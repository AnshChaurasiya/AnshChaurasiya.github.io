Face-Detection-System-using-Python
This is a Python script that uses the OpenCV library to perform real-time face detection on a video feed from the computer's camera.

The script begins by loading the Haar Cascade classifier for frontal face detection from a file located at "C:/Users/HP/AppData/Local/Programs/Python/Python310/Lib/site-packages/cv2/data/haarcascade_frontalface_default.xml". This classifier is a pre-trained machine learning model that can detect faces in images.

Next, the script creates a VideoCapture object that captures video from the computer's default camera (camera index 0). The script then enters an infinite loop that reads frames from the video feed, converts each frame to grayscale, and performs face detection on the grayscale frame using the Haar Cascade classifier.

The detectMultiScale method of the classifier takes several parameters:

'col': The grayscale frame to perform face detection on. 'scaleFactor': The scale factor to use when searching for faces. A higher value means that the classifier will search for faces at larger scales, but may also detect more false positives.

'minNeighbors': The minimum number of neighbors that a candidate rectangle must have to be considered a face. A higher value means that the classifier will be more selective and detect fewer false positives, but may also miss some faces.

'minSize': The minimum size of a face that the classifier should detect.

'flags': Additional flags to control the behavior of the classifier.

The script then draws a rectangle around each detected face using the 'cv2.rectangle' function.

Finally, the script displays the video feed with detected faces using the 'cv2.imshow' function and waits for a key press using the 'cv2.waitKey' function. If the user presses the "a" key, the loop is broken and the script releases the VideoCapture object and exits.

Overall, this script demonstrates how to use the OpenCV library to perform real-time face detection on a video feed from a camera.

"NOTE: CHANGE THE HAAR CASCADE CLASSIFIER FILE LOCATION ACCORDING TO YOUR SYSTEM"