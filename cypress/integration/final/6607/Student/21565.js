
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11631
@story_id: 21565
@story_name: Activate Account
@path: 6607/Student/21565.js
@test_case_name: Activate Account
@description: Activate user account
@test_steps:
^Put incorrect activation code
- Go to course dashboard
- If your account is not active, you will see a Activate Now label
- Click the Activate Now
- A modal box will be opened
- Fill a incorrect activation code
- Click the Activate button
- You will get an error message

^Put correct activation code
- Go to course dashboard
- If your account is not active, you will see a Activate Now label
- Click the Activate Now
- A modal box will be opened
- Fill a correct activation code
- Click the Activate button
- User name and password inputs will be show
- Fill first name, last name, password, confirm password and I agree checkbox
- Click the submit button

@test_data: N/A
@result: - If activation code is correct, the user account will be activated. Otherwise, the user will get an error message.
         - If User name and password inputs are filled correctly, user details will be saved.
*/