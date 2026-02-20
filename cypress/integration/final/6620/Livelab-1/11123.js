/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 
@story_name: Add/Edit Device
@path: final/LiveLab
@test_case_name: Add/Edit Device.js
@description: Edit Device details in db for machine not in db but in vcenter
@test_steps:
^Autograding Diagnosis from Test Autograding from machine list page
-Go to machine list page and search bs16 machine
-Go to action columns of row and click setting icon dropdown
-See first the machine is freezed or not. If not then first freeze the machine from load machine. 
-Click Test Autograding. 
-On/Connect machine 
-Click on Autograding diagnosis (present first icon at bottombar)

^Autograding Testing Section
-Load the course livelab autograding. (You can load any course)
-Connect the machine
-After the machine connected in setting icon (right bottom bar-dropdown. Testing option will be shown
-Click Testing. It will modal where user can enter the command. 
-After enter the command (I have enter ls). Click Test button top right side of modal.

^Autograding check for bs16 machine as password is in encrypted format
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=load_machine&action=test&tab_section=test_enable&custom_test=1&content_guid=04Nco&device=bs16&vcenter_server_id=6
-Perform the lab and then click on submit button

@test_data: 
-machine = apls
-course = livelab autograding
-content guid = 055Ag

@result: Autograding result will be shown in output text area
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
    })
    it('Autograding Diagnosis from Test Autograding from machine list page', () => {
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[host="s5.ucertify.com"] > :nth-child(14) > .dropdown > [data-cy=action_machine]').click({ force: true });
        cy.get('[data-cy=test_autograding]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(7000);
        cy.get('[data-cy=diagnosis_btn] > .icomoon-Verifying').click();
    })
    it('Autograding check for bs16 machine as password is in encrypted format', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=load_machine&action=test&tab_section=test_enable&custom_test=1&content_guid=04Nco&device=bs16&vcenter_server_id=6');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(15000);
        cy.get('[data-cy=submit_btn] > .toolbar-label').click();
        cy.get('[data-cy=evaluate_btn]').click();
        cy.get('#lab_explanations').should('exist');
    })
})