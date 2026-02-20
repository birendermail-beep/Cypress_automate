
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11631
@story_id: 21564
@story_name: Change Email
@path: 6607/Student/21564.js
@test_case_name: Change Email
@description: Change user email
@test_steps:
^Use registered email
- Go to course dashboard
- If your account is not active, you will see a Activate Now label
- Click the Activate Now
- A modal box will be opened
- Click the Change Email link
- New Email input box will be shown
- Fill a alreday registered email
- Click the Update & Resend Activation Code

^Use unregistered email
- Go to course dashboard
- If your account is not active, you will see a Activate Now label
- Click the Activate Now
- A modal box will be opened
- Click the Change Email link
- New Email input box will be shown
- Fill a alreday unregistered email
- Click the Update & Resend Activation Code

@test_data: N/A
@result: If the user email is correct, the user email will be changed and get the Activation Code via activation email. Otherwise, the user will get an error message.
*/