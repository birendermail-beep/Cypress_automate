/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10433
@story_id: 
@story_name: Image Diagnostic
@path: final/Create
@test_case_name: Image Diagnostic.js
@description: 
@test_steps: 
^Image Diagnostic
-Open Author Area
-Click on Content Diagnostic
-Click on Image Diagnostic
-Choose Level 0,1,2 and check data in each

^Test the Image Diagnostic
-Open Author App
-Click on Content Diagnostic Tile
-Click on open in Image Diagnostic
-Select Level and submit

^when no course is selected
-Open module from this link https://www.ucertify.com/ext/content_diagnostic/
-Open My library
-Open MY projects tab
-Open on author button of any course
-Open Content diagnostic option on page.
-Content diagnostic dashboard page will be oepned.
-Click on ""Image"" option open button.
-A new page will open
-It will give error msg to select course"

^All Image related issues in course when course is selected
-Open diagnostic module as mentioned in above step
-select course as ""Diagnostic testing"".
-Click on ""Image"" option open button.
-A new page will open."

^Advanced Error page
-Click on advanced button in top right part
-Advanced errors page will open

^Detailed page
-Click on detailed button in top right part
-Detailed page will open

^search feature
-Click on arrow button beside text box.
-there are dropdowns of searching.
-On selecting values, records will be filtered

^download as excel
-Click on download button beside 3 tabs.
-All records will be downloaded in excel.

^image show in full page
-To view respective image, click on any image.
-it will open in full page modal with some information.

@test_data:
-CRN: CAS-003,WGU-D08,70-741,70-742

@result: The Diagnostic table should open if images are there
*/