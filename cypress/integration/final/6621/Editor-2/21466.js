/*
@author: Ayush Srivastava
@master_project_id: 6621
@phase_id: 11353
@story_id: 21466
@story_name: Graph Svelte
@path: 6621/Editor-2/21466.js
@test_case_name: Graph Svelte
@description: Graph Svelte
@test_steps:
^delete _points
-Click on the delete icon.
-A dialog box will appear with message "Click the last plotted point of the item to delete the item!"
-Click OK, Now the delete icon becomes active.
-Click on the last plotted point. It will be deleted.
-Repeat step 1 to 4 if you want to delete more points.

^Graph width
-Click on the pencil icon
-Leave the width textbox blank, it should a message to fill out this field
-Now, fill the value for the width and Click OK.

^Graph Height
-Click on the pencil icon
-Leave the height textbox blank, it should a message to fill out this field
-Now, fill the value for the height and Click OK.

^set the X and Y Axis coordinate value
-Click on the pencil icon
-Enter the x-axis and y-axis value as 1 & 1 respecitively
-It should show a message that "Value must be greater than or equal to 2."
-Then enter the correct values

^set the X-interval and Y-interval Axis coordinate value
-Click on the pencil icon
-Leave the x-interval and y-interval blank, it should show message to fill out this field.
-Now give the values in x-interval and y-interval.
-Click on the OK button.

^Check correct answer
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by making the correct line (click on the correct points to make the line)
-It should message of correct answer

^Check incorrect answer
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by making the correct line (click on the correct points to make the line)
-It should message of incorrect answer

^Check correct answer of line
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by clicking on the correct points to make the correct circles.
-It should message of correct answer

^Check incorrect answer of line
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points to make the incorrect circles
-It should message of incorrect answer


^Check correct answer of circle
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area (You need to give 2 points to make a parabola)
-Go to the preview area and mark the correct answer by clicking on the correct points to make the correct parabolas.
-It should message of correct answer

^Check incorrect answer of circle
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area (You need to give 2 points to make a parabola)
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points to make the incorrect parabolas
-It should message of incorrect answer

^Check correct answer of points
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by clicking on the correct points
-It should message of correct answer

^Check incorrect answer of points
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points
-It should message of incorrect answer


^Check correct answer of Rays
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by clicking on the correct points
-It should message of correct answer

^Check incorrect answer of Rays
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points
-It should message of incorrect answer


Check correct answer of segment
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by clicking on the correct points
-It should message of correct answer

^Check incorrect answer of segment
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points
-It should message of incorrect answer


^Check correct answer of vector, sine, cosine, polygon
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the correct answer by clicking on the correct points
-It should message of correct answer

^Check incorrect answer of vector, sine, cosine, polygon
-Click on the pencil icon
-Fill out all the fields
-Click OK.
-Plot the correct answer in the authoring area
-Go to the preview area and mark the incorrect answer by clicking on the incorrect points
-It should message of incorrect answer

^Graph Type
-click on the pencil icon
-Choose any other type of graph
-Click OK

@test_data: n/a
@result: Plot Lines module open
*/