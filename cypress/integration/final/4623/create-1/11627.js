/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Epub-Import a Lesson Below
@path: final/Create
@test_case_name: Epub-Import a Lesson Below.js
@description: 
@test_steps: 
^To test the "Upload" button functionality without choosing any file
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Upload" button

^To test the "Choose File" button functionality
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button

^To test the "Upload" button functionality by not choosing any file
-Follow steps 1 to 6 as given in test case 1.
-Select "docx" option from dropdown.
-Click on "Upload" button

^To test the "Choose File" button functionality by choosing improper format of file
-Follow steps 1 to 6 as given in test case 1.
-Select "xml" option from dropdown.
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button

^To test the "Choose File" button functionality by choosing improper format of file
-Follow steps 1 to 6 as given in test case 1.
-Select "docx" option from dropdown.
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button


^To test the "Choose File" button functionality by choosing improper format of file
-Follow steps 1 to 6 as given in test case 1.
-Select "docx" option from dropdown.
-Click on "Choose File" button.
-Choose any file having "docx" extension
-Click on "Upload" button

^To test the "Choose File" button functionality by choosing improper format of file
-Follow steps 1 to 6 as given in test case 1.
-Select  any of options like "LO"  /  "enthuware"  /  "transcender"  / "dita/adam" / "xml questions" / "questions map"  from dropdown.
-Click on "Choose File" button.
-Choose any file having "html" extension
-Click on "Upload" button

^To test the "HTML" tab functionality
-Follow steps 1 to 4 as given in test case 2.
-Click on "HTML" tab.

^To test the "Source" tab functionality
-Follow steps 1 to 4 as given in test case 2.
-Click on "Source" tab.

^To test the "Element" tab functionality
-Follow steps 1 to 4 as given in test case 2.
-Click on "Element" tab.
-Select required tags for corresponding "Tags with class name"

^To test the "Result" tab functionality
-Follow steps 1 to 4 as given in test case 2.
-Click on "Result" tab.

^To test the "Export to preview " tab functionality without clicking on "Convert Tags"
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button
-Click on "Element" tab.
-Select "Chapter" option infront of <h2 class="h2">.
-Select "Link" option in front of <p class = "noindent">
-Click on "Export Preview"

^To test the "Input" button functionality while "Result" tab opened
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button
-Click on "Element" tab.
-Select "Chapter" option infront of <h2 class="h2">.
-Select "Link" option in front of <p class = "noindent">
-Click on "Export Preview"
-Click on "Input" button.

^To test the "Copy Preview" button functionality while "Result" tab opened
-Follow steps 1 to 6 as given in test case 1.
-Select "ePub" option from dropdown.(if it is not selected)
-Click on "Choose File" button.
-Choose any file having html extension
-Click on "Upload" button
-Click on "Element" tab.
-Select "Chapter" option infront of <h2 class="h2">.
-Select "Link" option in front of <p class = "noindent">
-Click on "Export Preview"
-Click on "Copy Preview" button.

@test_data:
-Uploaded File: Chapter1.html
-Uploaded File: Chapter2.html

@result: Epub upload will open.
*/