/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 15029
@story_name: Virtual Lab
@path: final/6607/Student
@test_case_name: Virtual Lab
@description: Opening video only courses.
@test_steps:
^Virtual Lab 
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on the Virtual lab.
-Click on the "Performing System Maintenance"(https://www.ucertify.com/?func=navigate_items&item_sequence=3)

^Virtual Lab2
-Login on the uCertify.
-Open the my library.
-Open the dashboard of any course.(https://www.ucertify.com/?func=load_course&course_code=02pzx&class_code=04ehS)
-Click on the Virtual lab.
-Click on the "Configuring E-mail on a Mobile Device"(https://www.ucertify.com/?func=navigate_items&item_sequence=9)

@test_data:n/a
@result: It will open the virtual lab
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('toolbar virtual lab', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            cy.visit(data.url + "/?func=load_course&course=LO-Aplus-complete&class_code=071Uj");
        })
    })
    it('Opening the toolbar virtual lab page (Performing System Maintenance)', function() {
        cy.get('[data-type="v"]').contains("Virtual Labs").click();
        cy.contains("Performing System Maintenance").click({force:true});
    })
    it('Opening the toolbar virtual lab page(Configuring E-mail on a Mobile Device)', function() {
        cy.get('[data-type="v"]').contains("Virtual Labs").click();
        cy.contains("Configuring E-mail on a Mobile Device").click({force:true});
    })
})