/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14887
@story_name: Lab template
@path: final/6607/Student
@test_case_name: Lab template
@description:
@test_steps:
^Lab template
-Login to uCertify.com
-Open the my library.
-Open the course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS).
-Open the Performance Labs.
-Open the any lab.(Understanding USB versions).
-Add "test_view=split" to url.

@test_data: n/a
@result: It will change the template of the lab.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Ebook slide', function() {

    it('Opening the ebook slide page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04ehS");
            cy.get('[data-type="l"]').click().then(() => {
                cy.contains("Understanding USB versions").click({force:true});
                cy.visit(data.url + "/?func=navigate_items&item_sequence=1&test_view=split")
            })
        })
    })
})