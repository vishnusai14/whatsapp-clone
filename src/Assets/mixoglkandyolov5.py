# capture.py
import math
import time
import numpy as np
import cv2
import torch
from Tracker import  *


frame_width = 1920
frame_height = 1080
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)
tracker = Tracker()
# Capture video from camera
# cap = cv2.VideoCapture(0)

def find_smallest_number(lst):
    if len(lst) == 0:
        return None

    smallest = lst[0]
    for number in lst:
        if number < smallest:
            smallest = number

    return smallest
def pxframe_to_kmph(pxs_per_frame, frame_rate):
    meters_per_second = pixels_per_frame * frame_rate / 3779.5275591  # Conversion factor: 1 px/frame = 1/3779.5275591 m/s
    km_per_hour = meters_per_second * 3.6  # Conversion factor: 1 m/s = 3.6 km/hr
    return km_per_hour

# Capture video from file
cap = cv2.VideoCapture("C:\\Users\\cmeen\\PycharmProjects\\speed\\14kmph1.mp4")
out = cv2.VideoWriter('36output.mp4',cv2.VideoWriter_fourcc('m','p','4','v'), 30, (frame_width,frame_height))


prev_cent = ()
current_cent = ()
frame_count = 0
count=0
entering_time = 0
exit_time = 0
ppm = 1.4 #(Pixel Per Meter)
while(cap.isOpened()):  

    speed = 0
    ret, frame = cap.read()
    cap = cv2.VideoCapture("C:\\Users\\cmeen\\PycharmProjects\\speed\\14kmph1.mp4")
    while(cap.isOpened()):

        # Capture frame-by-frame
        ret, frame = cap.read()
        if ret:
            assert not isinstance(frame,type(None)), 'frame not found'
    results = model(frame)
    result_row = results.pandas().xyxy[0]
    vehicle_list = []
    for index, rows in result_row.iterrows() :
        # print(rows)
        if rows['class'] == 2 or rows['class'] == 3 or rows['class'] == 4 or rows['class'] == 5 or rows['class'] == 6 or rows['class'] == 7:
            frame_count = frame_count + 1
            x = int(rows[0])
            y = int(rows[1])
            x1 = int(rows[2])
            y1 = int(rows[3])
            cent_x = int((x + x1) / 2)
            cent_y = int((y + y1) / 2)
            vehicle_list.append([x, y, x1, y1])
        idx_box = tracker.update(vehicle_list)

        for box in idx_box:
            x, y, x1, y1, id = box
            print(y)
            ret, frame = cap.read()
            prev_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            prev_points = cv2.goodFeaturesToTrack(prev_gray, maxCorners=35, qualityLevel=0.3, minDistance=7, blockSize=5)  
            prev_time = time.time()
            total_distance = 0.0
            total_frames = 0
            # Loop over video frames
            while True:
                ret, frame = cap.read()
                if not ret:
                    break

    # Convert frame to grayscale
                gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Calculate optical flow using Lucas-Kanade method
                next_points, status, _ = cv2.calcOpticalFlowPyrLK(prev_gray, gray, prev_points, None)

    # Select good points for tracking
                good_prev = prev_points[status == 1]
                good_next = next_points[status == 1]

    # Calculate the distance traveled by vehicles
                distance = 0.0
                for i, (prev, next) in enumerate(zip(good_prev, good_next)):
                    x_prev, y_prev = prev.ravel()
                    x_next, y_next = next.ravel()
                    distance += math.sqrt((x_next - x_prev)**2 + (y_next - y_prev)**2)

    # Update total distance and frame count
                total_distance += distance
                total_frames += 1

    # Calculate average speed
                current_time = time.time()
                elapsed_time = current_time - prev_time
                average_speed = total_distance / total_frames / elapsed_time
    
                lst.append(average_speed)
                smallest_number = find_smallest_number(lst)
     # Example usage
            pixels_per_frame = smallest_number
            frame_rate = 30 # Assuming a frame rate of 30 frames per second
            km_per_hour = pxframe_to_kmph(pixels_per_frame, frame_rate)

            cv2.putText(frame,f"{pixels_per_frame} px/frame is approximately {km_per_hour:.2f} km/hr.".format(km_per_hour), (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            cv2.imshow('Video', frame)
        
    # Update the previous frame and points
            prev_gray = gray.copy()
            prev_points = good_next.reshape(-1, 1, 2)

    # Break the loop if 'q' is pressed
            if cv2.waitKey(1) == ord('q'):
                break

    # Update the previous time
            prev_time = current_time

#print(f"The second highest value is: {second_highest}")
print(f"{pixels_per_frame} px/frame is approximately {km_per_hour:.2f} km/hr.")
print("The smallest number in list is:", smallest_number)
# Release video capture and close windows
cap.release()
cv2.destroyAllWindows()
