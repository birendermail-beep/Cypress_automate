/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_start
@path: final/7761/orderbook
@test_case_name: orderbook_start.js
@description: 
@test_steps:
^To enroll yourself in course 1
1- enter access code
2- Select type: self placed
3- Click on validate
4- Click on enroll button to enroll in this course

^To enroll yourself in course 2
1- enter access code
2- Select type: instructor led
3- Click on validate
4- Click on enroll button to enroll in this course

@test_data:
-Access code: M3DL-CFGL-2PAY-VXG5
-Access code: M3DL-CFGL-2PAY-VXG5

@result: License should be added. 
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/start/");
        })
    });
    it("To enroll yourself in course self", function() {
        cy.get('#self_paced_stu').click()
        cy.get('#next_btn').click()
        cy.get("#access_code").type("M3DL-CFGL-2PAY-VXG5");
        cy.get("#validate_code").click();
    });
    it("To enroll yourself in course lab", function() {
        cy.get('#have_not_key').click()
        cy.get('#next_btn').click()
        cy.get("#access_code").type("M3DL-CFGL-2PAY-VXG5");
        cy.get("#validate_code").click();
    });
});