# Transaction Webhook Service

A production-ready Python backend service that receives transaction webhooks from external payment processors (like RazorPay), acknowledges them immediately, and processes transactions reliably in the background with proper idempotency handling.

## 🎯 Overview

This service implements a robust webhook processing system that:
- ✅ Acknowledges webhooks within 500ms regardless of processing complexity
- ✅ Processes transactions asynchronously with a 30-second simulation delay
- ✅ Ensures idempotency to prevent duplicate processing
- ✅ Stores transaction data with complete status and timing information
- ✅ Provides RESTful APIs for transaction status queries

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Supabase account and project
- Git

### 1. Environment Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd transaction-webhook-service/backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Supabase Database Setup

Run this SQL in your Supabase SQL Editor:

```sql
-- Drop existing table if needed
DROP TABLE IF EXISTS public.transactions CASCADE;

-- Create transactions table
CREATE TABLE public.transactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    transaction_id VARCHAR(255) UNIQUE NOT NULL,
    source_account VARCHAR(255) NOT NULL,
    destination_account VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    status VARCHAR(50) NOT NULL DEFAULT 'PROCESSING',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    processed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for performance
CREATE INDEX idx_transactions_transaction_id ON public.transactions(transaction_id);
CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_transactions_created_at ON public.transactions(created_at);

-- Enable Row Level Security
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Allow service role access for backend operations
CREATE POLICY "Service role can access all transactions" ON public.transactions
    FOR ALL USING (current_setting('role') = 'service_role');
```

### 3. Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your Supabase credentials and deployed URL
```

Required environment variables:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DEBUG=False
PROCESSING_DELAY_SECONDS=30
DEPLOYED_URL=https://your-service.onrender.com
```

### 4. Run the Service

```bash
# Start the development server
python main.py

# Or use uvicorn directly
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**Service URLs:**
- **API Base**: http://localhost:8000
- **Health Check**: http://localhost:8000/
- **API Documentation**: http://localhost:8000/docs

## 🧪 Testing the Service

### Test Webhook Processing

```bash
# 1. Send a webhook (should respond immediately with 202)
curl -X POST "http://localhost:8000/v1/webhooks/transactions" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "test_txn_001",
    "source_account": "acc_user_123",
    "destination_account": "acc_merchant_456",
    "amount": 1500.00,
    "currency": "INR"
  }'

# Expected response: 202 Accepted (within 500ms)

# 2. Check initial status (should be PROCESSING)
curl "http://localhost:8000/v1/transactions/test_txn_001"

# 3. Wait ~30 seconds, then check final status (should be PROCESSED)
curl "http://localhost:8000/v1/transactions/test_txn_001"
```

### Test Idempotency (Duplicate Prevention)

```bash
# Send the same webhook again
curl -X POST "http://localhost:8000/v1/webhooks/transactions" \
  -H "Content-Type: application/json" \
  -d '{
    "transaction_id": "test_txn_001",
    "source_account": "acc_user_123",
    "destination_account": "acc_merchant_456",
    "amount": 1500.00,
    "currency": "INR"
  }'

# Should return: "Transaction test_txn_001 already received and processed"
# No duplicate processing occurs
```

### Test Health Check

```bash
curl http://localhost:8000/

# Expected response:
# {
#   "status": "HEALTHY",
#   "current_time": "2025-10-30T...",
#   "service": "Transaction Webhook Service",
#   "version": "1.0.0"
# }
```

## 🏗️ Technical Architecture

### Core Technologies
- **FastAPI**: High-performance async web framework
- **Supabase**: PostgreSQL database with real-time capabilities
- **Pydantic**: Data validation and serialization
- **Uvicorn**: ASGI server for production deployment

### Key Design Decisions

#### 1. **Immediate Acknowledgment Pattern**
- Webhooks return HTTP 202 within 500ms regardless of processing complexity
- Background tasks handle the actual transaction processing
- Ensures external payment processors receive timely responses

#### 2. **Background Processing with Simulation**
- 30-second delay simulates external API calls (payment processing, validation)
- Async processing prevents blocking and ensures scalability
- Status updates provide complete audit trail

#### 3. **Idempotency Implementation**
- Transaction ID uniqueness prevents duplicate processing
- Graceful handling of repeated webhooks
- Database constraints ensure data integrity

#### 4. **Database Schema Design**
- Normalized structure for transaction data
- Proper indexing for query performance
- Row Level Security for access control
- Timestamp tracking for complete audit trail

#### 5. **Error Handling & Resilience**
- Global exception handlers with appropriate HTTP status codes
- Input validation with detailed error messages
- Logging for debugging and monitoring
- Graceful degradation under load

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Health check with service status |
| `POST` | `/v1/webhooks/transactions` | Receive transaction webhooks |
| `GET` | `/v1/transactions/{id}` | Query transaction status |

### Data Flow

```
Webhook Received → Validate → Check Idempotency → Store (PROCESSING) → Background Process (30s) → Update (PROCESSED)
```

## 📊 Performance Characteristics

- **Webhook Response Time**: < 500ms (requirement met)
- **Background Processing**: ~30 seconds (configurable)
- **Concurrent Webhooks**: Handled asynchronously
- **Database Queries**: Indexed for optimal performance
- **Memory Usage**: Efficient async processing

## 🚀 Deployment

### Render (Recommended for FastAPI)

**Why Render?** Unlike Vercel (which has 10-second execution limits for serverless functions), Render supports persistent services perfect for APIs with background processing.

#### Setup Steps:

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Name**: `transaction-webhook-service`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

3. **Environment Variables**
   Add these in Render dashboard:
   ```
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   DEBUG=False
   PROCESSING_DELAY_SECONDS=30
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy automatically
   - Your API will be available at: `https://your-service.onrender.com`

5. **Keep-Alive Configuration**
   - The service includes an automatic keep-alive mechanism that pings itself every 45 minutes
   - This prevents Render's free tier from spinning down the instance due to inactivity
   - Set `DEPLOYED_URL` in your environment variables to enable this feature
   - Reduces cold start delays for status checks and subsequent requests

#### Free Tier Benefits:
- ✅ 750 hours/month free
- ✅ Persistent service (no timeout limits)
- ✅ Background processing works perfectly
- ✅ Automatic SSL certificates
- ✅ Custom domains supported

### Alternative: Vercel (Not Recommended)

Vercel works for simple APIs but has limitations:
- ❌ 10-second execution limit (conflicts with 30-second background processing)
- ❌ Background tasks may timeout
- ❌ Not ideal for persistent API services

```json
// vercel.json (if you must use Vercel)
{
  "builds": [
    {
      "src": "main.py",
      "use": "@vercel/python"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "main.py"
    }
  ],
  "functions": {
    "main.py": {
      "maxDuration": 30
    }
  }
}
```

## 🔧 Development & Troubleshooting

### Common Issues

**Database Connection Errors:**
- Verify Supabase credentials in `.env`
- Ensure database tables exist with correct schema
- Check network connectivity

**Slow Responses / Timeouts:**
- On Render free tier, instances spin down after 15 minutes of inactivity
- The keep-alive mechanism pings the service every 10 minutes to prevent spin-downs
- Ensure `DEPLOYED_URL` is set correctly in environment variables
- First request after spin-down may take ~1 minute for cold start

**Slow Responses:**
- Confirm background tasks are not blocking
- Monitor database query performance
- Check async/await implementation

**Import Errors:**
- Activate virtual environment: `source venv/bin/activate`
- Install dependencies: `pip install -r requirements.txt`
- Verify Python version compatibility

### Environment Variables Reference

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `SUPABASE_URL` | Supabase project URL | - | Yes |
| `SUPABASE_KEY` | Supabase anon key | - | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key for admin operations | - | Yes |
| `DEBUG` | Enable debug logging | `False` | No |
| `PROCESSING_DELAY_SECONDS` | Background processing delay | `30` | No |
| `WEBHOOK_TIMEOUT_SECONDS` | Max webhook response time | `0.5` | No |

## 📈 Success Criteria Verification

✅ **Single Transaction**: Webhook → processed after ~30 seconds  
✅ **Duplicate Prevention**: Multiple same webhooks → one transaction only  
✅ **Performance**: Webhook responses < 500ms under load  
✅ **Reliability**: Error handling, no transaction loss, graceful failures  

## 📝 License

MIT License - see LICENSE file for details.

---

**Public Repository**: This working Python application is available on GitHub with complete setup and testing instructions.