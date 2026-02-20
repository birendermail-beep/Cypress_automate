/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 
@story_name: Load the machine
@path: final/LiveLab
@test_case_name: Load the machine.js
@description: username, password from db only
@test_steps:
^Load the machine
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?content_guid=05iwN&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=0
-On/Connect the machine from bottom left menu bar
-After machine on/connected successfully, Go to setting icon to the right side of same menubar
-Click setting icon and then click on share vm. It will show the modal with url 
-Copy the url and open in new window

@test_data: 
-content guid= 05iwN
-machine = 364m 
-action option = connect

@result: Same machine will be open in new window
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
    it('Load the machine', () => {
        LiveLabArea.ConnectingDevice_bs16();
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(7000);
        cy.get('#manage_settg > .icomoon-new-24px-gear-1').click();
        cy.get('#share_vm').click();
        cy.wait(5000);
        cy.get('#vm_link').should('exist');
    })
})