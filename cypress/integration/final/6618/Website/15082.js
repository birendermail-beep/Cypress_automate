/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@Story_Id: 15082
@story_name: certification_new
@path: final/Dump_Test_Automation
@Test_Case_Name: certification_new.js
@description: Go to the certification home page
@test_steps: 
^Test case of is eval on search
- visit on the website page
- Successfully open the home page.
- Scroll the page and go to tha footer part.
- Click on the "Certifications" option.
- After that open the "Our Certification" page.
- Click on the any course.
- open the particular page according to course.
- After that click on the "Certification" tab.
- Successfully open the certificaton area.
@test_data: Vendor = ORACLE 
@result:Successfully open the certifications page
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website Area', function() {

    it('Our certification home page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url);

            cy.get('.col-md-3 > .list-unstyled > :nth-child(2)').click({ force: true });
            cy.visit(data.url + "/vendors/Oracle.html")
            cy.get(':nth-child(3) > .tab').click({ force: true });
        })
    })
})