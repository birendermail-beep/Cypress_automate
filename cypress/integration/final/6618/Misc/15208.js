/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id : 
@story_id: 15208
@story_name: pe-qrgenerator
@path: final/Dump_Test_Automation
@test_case_name: pe-qrgenerator.js
@description : 
@test_steps:
^Go to the utils and open the Qr Generator
-Click on this link: https://www.jigyaasa.info/utils
-Successfully open the utils area.
-Click on the ""Start"" button in the ""QR Generator"" option.
-Successfully open the qr generator page,

@test_data: n/a

@result: Generated QR Code should be open.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Utils Area', function() {

    it('QR Generator', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(21) > :nth-child(3) > .btn').click({ force: true })
    })
})