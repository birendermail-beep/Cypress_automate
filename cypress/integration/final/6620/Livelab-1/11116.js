/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: Pretend Login User Detail
@path: final/LiveLab
@test_case_name: Pretend Login User Detail.js
@description: N/A 
@test_steps:
^Saving the original user details for device activity
-Login with admin with different user email. https://ucertify.com/admin/user_login.php https://www.screencast.com/t/EgSlj3m7FhKd
-Go to my library
-load the lab of virtual lab and On/Connect the machine. https://www.screencast.com/t/LlXQkOBoe
-You can see the machine name and login user name. original user detail will be saved. https://www.screencast.com/t/FQfZyjRST

^Saving the original user details for vm expiry
-Follow the previous steps
-Go to vm expiry logs: Logs->Vm Expriy https://www.screencast.com/t/fOr6g9eNSV
-Search the list and you can see the machine name is with last login username but user details will be with original user details https://www.screencast.com/t/eT9srJyaSWt

^Saving the original user details for content activity
-Follow the previous steps
-Go to vm expiry logs: Logs->Content Activity https://www.screencast.com/t/teoD8vARR
-Search the list and you can see the machine name is with last login username but user details will be with original user details https://www.screencast.com/t/EdGbWzrW3fr

@test_data: 
-course: MCSA 70-742 Cert Guide: Identity with Windows Server 2016
-Content: Promoting an existing domain controller to a global catalog server

@result: Original user details will be saved in content activity
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VM Expiry', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/user_login.php");
        })
    })

    // testcases #1 and #2 covered
    it('Saving the original user details for device activity', function() {
        cy.get('[data-cy=admin_user_login]').type('chetan.singhal@ucertify.com');
        cy.get('[data-cy=admin_login_submit]').click();
        cy.wait(7000);
        cy.get('[class_code="05x7d"] > [data-cy=manage]').click();
        cy.get('[data-cy=view_course] >').contains('View Course').click();
        cy.get('[intro-id="labs"]').click();
        cy.contains('Encrypting Files with EFS').click({force:true});
        cy.wait(8000);
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
    
    })
    it('Saving the original user details for vm expiry', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/custom/docker/vmadmin/index.php?func=devices&action=list&vcenter_server_id=-1");
        })
        cy.get('#logs_report').click();
        cy.get('#vm_expiry')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
        });
    })
})
