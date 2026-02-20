/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Convert Tag
@path: final/Create
@test_case_name: Convert Tag.js
@description: 
@test_steps: 
^To test the "Convert tags" button functionality
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button
-Click on "Element" tab.
-Select "Chapter" option infront of <h2 class="h2">.
-Select "Link" option in front of <p class = "noindent">
-Click on "Convert Tags" button.

^To test the "Input" button functionality while opened other tab instead of "Result" tab
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button
-Click on "Input" button.

^To test the "Copy Preview" button functionality while opened other tab instead of "Result" tab
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button
-Click on "Copy Preview" button.

^To test "help" button in grid view icon
-Follow steps 1 to 6 as given in test case 1.
-Click in grid view icon
-Click on help icon button

^Convert the tags
-Click on "Element" tab, And select the require tags from dropdown.
-Click on "Convert tags".
-Then Show a data on "Result || Preview" tab.
-Finally, click on "Export to Preview".
-Click on "Save" button for publish the contents.
-Note: Must be comes from "Author as lesson".

^Input a html tags.
-Firstly, Need to select places where need to add html tags.
-Click on input button and select html tags.

^Using this we can convert html tags.
-Click on "Element" tab, And select the reqire tags from dropdown.
-Click on "Convert tags".

@test_data: n/a
@result: Convert Tag will open
*/