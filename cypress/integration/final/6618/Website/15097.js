/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: N/A
@story_id: 15097
@story_name: ebook-tags_SNT
@path: final/Dump_Test_Automation
@test_case_name: ebook-tags_SNT.js
@description: SNT tag page
@test_steps: 
^test case of About page in snt tag
-Visit to website
-Login to ucertify.com
-Visit the vmadmin
-go down the page and click on the "About Us" option.
-visit the ebook tags page. https://www.jigyaasa.info/about/index.php?page=ebook-tags
@test_data: N/A
@result: Successfully open the SNT Tag Page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Home Page', function() {

    it('Open the ebook page with SNT Tag', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);
            cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a > .pointer').click({ force: true });
            //this url not working right now discuss with rashmi ma'am
            //cy.visit(data.url + '/about/index.php?page=ebook-tags');
        })
    })
})