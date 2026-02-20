/*
@author: Sundaram Tripathi
@master_project_id: 6607
@phase_id: 
@Story_Id: 15446
@story_name: admin failed sql
@path: final/6607/Student
@Test_Case_Name: admin failed sql
@description: open sql failed page
@test_steps:

^Test case of sql failed page
- visit on utils area.
- Show the utils list.
- Click on the start button in "Server Logs" option.
- After that click on the "SQL" option.
- Open by default "Daily Report" option and click on the "Failed SQL".
- Successfully open the "Failed SQL" page.

@test_data: n/a
@result: Successfully open the SQL Failed page
*/

import { login_username, login_password } from '../../../../../config'
import Navbar from '../../../../page-objects/components/Navbar'
import LoginPage from '../../../../page-objects/pages/LoginPage'

describe('utils Aea', function() {
    it('Open the failed sql', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(38) > :nth-child(3) > .btn').click({ force: true })
        cy.get('.btn-light > .ml-sm').contains('SQL').click({ force: true });
        cy.get('.btn-light > .ml-sm').contains('Failed SQL').click({ force: true });
    })
})