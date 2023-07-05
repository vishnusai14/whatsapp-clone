import cv2
import time
import math
lst=[]
second_highest = 0
smallest_number=0
smallest_speed=0

def find_smallest_number(lst):
    if len(lst) == 0:
        return None

    smallest = lst[0]
    for number in lst:
        if number < smallest:
            smallest = number

    return smallest

# Initialize video capture
video_path = "C:\\Users\\cmeen\\Downloads\\14kmph.mp4"
cap = cv2.VideoCapture(video_path)

# Set up the initial frame
ret, frame = cap.read()
prev_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
prev_points = cv2.goodFeaturesToTrack(prev_gray, maxCorners=35, qualityLevel=0.3, minDistance=7, blockSize=5)

# Initialize variables for tracking speed
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
    notepad_file_path = "C:\\Users\\cmeen\\Downloads\\trailfind.txt"  # Replace with the desired path and filename
    smallest_number = find_smallest_number(lst)
    
    # Save the list to the notepad file
    with open(notepad_file_path, "w") as file:       
        for item in lst:
            file.write(str(item) + "\n")

    # Read values from the notepad file
    with open(notepad_file_path, "r") as file:
         values = [float(line.strip()) for line in file]
         

        
    def pxframe_to_kmph(pxs_per_frame, frame_rate):
        meters_per_second = pixels_per_frame * frame_rate / 3779.5275591  # Conversion factor: 1 px/frame = 1/3779.5275591 m/s
        km_per_hour = meters_per_second * 3.6  # Conversion factor: 1 m/s = 3.6 km/hr
        return km_per_hour

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
