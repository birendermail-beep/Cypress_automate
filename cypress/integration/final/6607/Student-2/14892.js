/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14892
@story_name: Upgrade Licence
@path: final/6607/Student
@test_case_name: Upgrade Licence
@description:
@test_steps:
^modal-upgrade-licence
1. Go to url https://pearson.ucertify.com
2. Login with given details
3. Go to my library
4. Search course certified ethical hacker
5.Click to open

@test_data: n/a
@result: upgrate available display in right pane
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student Area', function() {

    it('modal-upgrade-licence', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[2])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy=mylibrary]').click()
            cy.get('#search_course').type('certified ethical hacker', { force: true })
            cy.visit(data.website[2] + '/?func=load_course&course=pearson-ceh-v9-complete')
        })
    })

})