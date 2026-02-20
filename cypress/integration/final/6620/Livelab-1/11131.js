/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10395
@story_id: 
@story_name: Autograding on Single Router
@path: final/LiveLab
@test_case_name: Autograding on Single Router.js
@description: 
@test_steps:
^Autograding 1
-Open this url: https://www.jigyaasa.info/custom/docker/vmadmin/index.php?content_guid=05iwN&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=6
-https://www.ucertify.com/custom/docker/vmadmin/index.php?content_guid=05iwN&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=6
-Perform the task and click submit to see the autograding output 

^Autograding 2
-Open this url: https://www.jigyaasa.info/custom/docker/vmadmin/index.php?content_guid=05iXX&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=6
-https://www.ucertify.com/custom/docker/vmadmin/index.php?content_guid=05iwN&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=6
-Perform the task and click submit to see the autograding output 

@test_data: 
-Single Router:
-http://72.52.75.194:3838
-machine = 364m
-content guid = 05iXX

@result: Task is completed successfully
*/


import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Autograding 1', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?content_guid=05iwN&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=6');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(10000);
        /* after the machine is connected , cannot perform the task as machine is opening in Iframe and it is outside the scope of cypress */
        cy.get('[data-cy=submit_btn] > .toolbar-label').click();
        cy.get('[data-cy=evaluate_btn]').click();
        cy.wait(10000);
        cy.get('#device_tabs').should('exist');
    })
    it('Autograding 2', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?content_guid=05iXX&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=6');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(10000);
        /* after the machine is connected , cannot perform the task as machine is opening in Iframe and it is outside the scope of cypress */
        cy.get('[data-cy=submit_btn] > .toolbar-label').click();
        cy.get('[data-cy=evaluate_btn]').click();
        cy.wait(10000);
        cy.get('.display').should('exist');
    })
})