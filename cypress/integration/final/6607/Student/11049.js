/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11049
@story_name: Download Manuals
@path: final/6607/Student
@test_case_name:Download Manuals
@description: Download Manuals
@test_steps:
^download student manual
-Open https://ucertify.com/ 
-Login with your account
-Click on help page and goto this url : https://www.ucertify.com/features/?manual_type=student_manual
-and click on manual then download button

^download intrcutor  manual
-Open https://ucertify.com/ 
-Login with your account
-Click on help page and goto this url : https://www.ucertify.com/features/?manual_type=instructor_manual
-and click on manual then click on download button (you have permission of instrcutor then you can download this pdf)

^download administrator manual
-Open https://ucertify.com/ 
-Login with your account
-Click on help page and goto this url : https://www.ucertify.com/features/05tPC-administrator-area.html
-and click manual then click on download button (if you are administrator of ucertify then you can download theis manual)

@test_data: n/a
@result: Feature area will open. 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
            })
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        //download student manual
    it('download student manual', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/features/?manual_type=student_manual')
            })
            cy.get('h3.mt-sm > .btn').click()
        })
        //download intrcutor  manual
    it('download intrcutor  manual', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/features/?manual_type=instructor_manual')
            })
            cy.get('h3.mt-sm > .btn').click()
        })
        //download administrator manual
    it('download administrator manual', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/features/FAQS-05tPc-getting-started_administrator_manual.html')
            cy.get('#pills_manual_tab').click()
        })
        cy.get('h3.mt-sm > .btn').click()
    })
})