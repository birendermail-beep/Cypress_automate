/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 
@story_name: Connect the device
@path: final/LiveLab
@test_case_name: Connect the device.js
@decription: username, password from db only
@test_steps:
^Connect the device
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?content_guid=05iwN&func=load_machine&action=test&device=364m&tab_section=test_enable&vcenter_server_id=0
-On the machine from bottom left menubar
-Afte the machine on then click on connect from same dropdown.

@test_data: 
-machine = bs16

@result: Machine will be connected 
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
        LiveLabArea.ConnectingDevice_bs16();
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
    })
})