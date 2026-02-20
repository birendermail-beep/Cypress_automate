/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id:
@story_id: 15138
@story_name: product_details_new
@path: final/Website
@test_case_name: product_details_new
@description: N/A
@test_steps:
^product details new
-Login to ucertify.com
-Open the following url:(https://www.ucertify.com/courses/?search_query=70-486-VT)

@test_data: n/a
@result: It will Open the product details new page.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('product details page', function() {
    it('test the product details page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/courses/?search_query=70-486-VT");
        })
    })
})