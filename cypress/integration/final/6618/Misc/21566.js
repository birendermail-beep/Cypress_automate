
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11631
@story_id: 21566
@story_name: Sign In
@path: 6618/Misc/21566.js
@test_case_name: Sign In
@description: Sign In
@test_steps:
^Use unregistered email
- Go to login page
- Fill unregistered email and password
- Click the Sign button

^Use correct email and wrong password
- Go to login page
- Fill wrong email and password
- Click the Sign button

^Use wrong email and correct password
- Go to login page
- Fill wrong email and password
- Click the Sign button

^Use correct email and correct password
- Go to login page
- Fill wrong email and password
- Click the Sign button
@test_data: N/A
@result: If credentials are correct, the user will be logged in. Otherwise, the user will get an error message.
*/