
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11631
@story_id: 21561
@story_name: Sign In
@path: 6607/Student/21561.js
@test_case_name: Sign In or Sign Up
@description: Sign In
@test_steps:
^Use unregistered email
- Go to course dashboard
- Click on the any course component
- A login modal box willbe open
- Fill unregistered email and password
- Click the Sign button

^Use correct email and wrong password
- Go to course dashboard
- Click on the any course component
- A login modal box willbe open
- Fill wrong email and password
- Click the Sign button

^Use wrong email and correct password
- Go to course dashboard
- Click on the any course component
- A login modal box willbe open
- Fill wrong email and password
- Click the Sign button

^Use correct email and correct password
- Go to course dashboard
- Click on the any course component
- A login modal box willbe open
- Fill wrong email and password
- Click the Sign button

@test_data: N/A
@result: If credentials are correct, the user will be logged in. Otherwise, the user will get an error message.
*/