/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14945
@story_name: Content Copyright
@path: final/6607/Student
@test_case_name: Content Copyright
@description: N/A   
@test_steps:
^pe-content-copyright
-go to the ucertify.com
-go to my library and select SQL for Data Analysis course

@test_data: n/a
@result: dashboard will open
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student Area', function() {
    it('pe-content-copyright', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click()
            cy.get('#search_course').clear({ force: true }).type('SQl for', { force: true })
            cy.wait(4000)
            cy.visit(data.url + '/?func=load_course&course_code=04Hd6&class_code=05C4Q')
        })
    })
})