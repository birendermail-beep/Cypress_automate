/*
@author: Akansha George
@master_project_id: 6618
@phase_id: 10995
@story_id: 15293
@story_name: Add-Edit-Delete Testcases
@path: final/Focus
@test_case_name: Add-Edit-Delete Testcases
@test_steps:

^Add Testcases
-go to jigyaasa.info/custom/tcm.
-After adding the sub-story , click on it 
-On right pane, Add Testcases button will appear.
-On clicking this button, .js file will be generated with template and story id will already be present in the template.
-Once the testcases and code is wriiten in file, merge it with Beta.
-For reading the data from the GITHUB, see sub-story Import files from Github. 

^Edit Testcases
-Click on sub-story and table will appear with all the teststeps present in the file.
-Click on Action dropdown and Edit/Delete option will appear
-Click on Edit button and modal will pop-up 
-You are allow to edit only name of the testcase. Rest details are read only.

^Delete story
-Click on sub-story and table will appear with all the teststeps present in the file.
-Click on Action dropdown and Edit/Delete option will appear
-Click on Delete button and a confirmation modal will pop-up to delete the testcase.

- Delete Testcases before deleting sub-story.

@test_data:N/A
@result: Testcases will be Added/Edited/Deleted .

*/