/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10518
@story_id: 
@story_name: Navigation Tools
@path: final/Create
@test_case_name: Navigation Tools.js
@description: 
@test_steps: 
^Inside Tools[Navigation]
-Firstly, we need to go into "Navigation > Save Data".
-Click on "Save Data", then open a modal and write a ISBN number.
-And click "Save" button.
-Note: After that next time for get, we need to upload the file and click on restore button and put the ISBN and go to "Element" tab , Then already converted current tag into old tags.

^Navigation > Tools> Image Upload
-Firstly, we need click "Navigation > Tools > Image Upload".
-Enter a folder name and chosse image.
-Then file upload and return folder name with proper message.

^Navigation > Tools> LO/Dita Books
-Firstly, we need click "Navigation > Tools >  LO/Dita Books".
-Choose .opf file and chosse other files .ditamap also.
-All the files will upload one by one.
-Then Download button will appear after uploading all the files , Now click on download file button to download all the files.

^Navigation > Tools> Table Column Remover
-Firstly, we need click "Navigation > Tools >  Table Column Remover".
-Then paste the table into "insert table textbox".
-Enter Column number which you want to delete and click on "Remove column" button

@test_data:
-Table data.

@result: Navigation Tool is shown.
*/