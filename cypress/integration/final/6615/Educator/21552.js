
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11631
@story_id: 21552
@story_name: Welcome Page
@path: 6615/Educator/21552.js
@test_case_name: Welcome Page
@description: Show welcome page
@test_steps:
^Student Taught
- Go to the instructor dashboard page
- Total student will be shows
- if there is any student, filled circle will be showin with tick mark. Otherwise blank circle will be shown

^Instructor Training
- Go to the instructor dashboard page
- If instructor training is pending, Request Training option will be shown and blank circle will be shown
    - Click the Request Training option and you will get a success message. Also, this will showing in the Instructor Training report
    - Goto Instructor Training report
    - Click the setting button
    - Click the Mark as done option
    - It will be marked as completed
    - Go back to instructor dashboard page and intructor training will be shown as completed
- If instructor training is done, Certificate of Completion and Request additional training option will be shown and filled circle will be shown with tick mark.
    - Click the Certificate of Completion option and you will be redirected to the certifcate page
    - Click the Request additional training option to request for a additional training 

^Your Profile
- Go to the instructor dashboard page
- Click the Pencile icon of the Address
- Textarea will be shown
- Fill the addredd and click the Update button
- New address will be updated
- Click the Pencile icon of the Date of Birth
- Datepicker will be shown
- Choose a date and click the Update button
- New DOB will be updated

^uCertify Educator Network
- Go to the instructor dashboard page
- If you have permission
    - 'You are enrolled' message will be shown and filled circle will be shown with tick mark
    - Review benefits option will be shown
    - Click the Review benefits option
    - A modal will bve shown
    - All benefits will listed in the modal
- If you don't have permission, 'You are not yet part a member.' message will be shown and blank circle will be shown
    - 'You are not yet part a member' message will be shown and filled circle will be shown with tick mark
    - Review benefits & enroll option will be shown
    - Click the Review benefits & enroll option
    - A modal will bve shown
    - All benefits will listed in the modal with a Request button
    - Click the Request button
    - You will get a success message and this will be shown in the uCertify Educator Network report
    - Goto uCertify Educator Network and review this request
    - Click the setting button
    - Click the Approve button
    - User will become the member of uCertify Educator Network

^Evaluate & Adopt Courses
- Go to the instructor dashboard page
- Click the Request courses option and you will be redirected to the Eval Copy page
- If you have any eval copy course, filled circle will be showin with tick mark. Otherwise blank circle will be shown

^Provide Feedback
- Go to the instructor dashboard page
- Click the Take a 1 minute survey option
- Current course will be selected in the course list
- Click the next button
- Active Section list will be shown
- Select section and click the Next button
- Check Educator Survey (Row no. 18) test case to proceed further

^Account Manager
- Go to the instructor dashboard page
- I user has account manager, Account manager details will be shown and the filled circle will be shown with tick mark
- I user does not a has account manager, instructor.care@ucertify.com email be shown and the blank circle will be shown
@test_data: N/A
@result: Instructor dashboard page will be shown
*/