/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: Autograding when Machine Restarts
@path: final/LiveLab
@test_case_name: Autograding when Machine Restarts.js
@description: N/A 
@test_steps:

^Autograding message should be proper
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?content_guid=0511C&func=load_machine&action=test&device=apls&tab_section=test_enable&vcenter_server_id=6
-Perform the task
-When the machine is restarting click the submit button

@test_data: 
-course: MCSA 70-742 Cert Guide: Identity with Windows Server 2016
-Content: Promoting an existing domain controller to a global catalog server

@result: content guid = 0511C machine: apls
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Multiple Autograding Server Support', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?content_guid=0511C&func=load_machine&action=test&device=apls&tab_section=test_enable&vcenter_server_id=6');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();

        //steps need to be perform manually
    })
})
