/*
@author: Anurag Chaurasia
@master_project_id: 4623
@phase_id:
@story_id: 15235
@story_name: other
@path: final/Create
@test_case_name: other
@description: Create area
@test_steps: 
^other
-Login to ucertify.com as author.
-Open the following url:

@test_data: N/A.
@result: Opening the other page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('create Area', function() {
    it('other', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/index.php?func=view_full_asset&from_myproject=1&course_code=05KGH&chapter_guid=05kfE')
        })
    })
})