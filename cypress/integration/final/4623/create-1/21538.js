
/*
@author: Shashank Gupta
@master_project_id: 4623
@phase_id: 11432
@story_id: 21538
@story_name: Project License
@path: 4623/create-1/21538.js
@test_case_name: Project License
@description: Provide project license via Admin Voucher
@test_steps:
^Provide project license
- Go to https://www.ucertify.com/admin/admin_voucher.php?action=voucher_gen
- Fill all required details
- Select the Enroll Directly option
- Click on Add Course button and select a course
- Click on the Permission drop-down and select the Project option
- Select a Stage
- On/Off the Owner switch button as per your requirement
- Fill user email and click the Proceed Next button
- A modal box will be opened and check the checkbox
- Click the Add button
@test_data: N/A
@result: - You will enroll in the course with project license and you will added under the workflow tab
         Note: (1) If selected stage is not present in the config, user will be enrolled with last present stage.
               (2) If there is no stage in config, all four stages will be added in the course. Otherwise, there willl be no change in the config.
*/