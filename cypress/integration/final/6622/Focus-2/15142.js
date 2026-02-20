/*
@author: Sundaram Tripathi
@project_group: 
@phase_id: 
@Story_Id: 15142
@story_name: focus_dashboard
@path: final/Dump_Test_Automation
@Test_Case_Name: focus_dashboard.js
@description: Go to event date
@test_steps: 
^Test case of Events in focus
- visit on website
- Go to the focus area
- Click on the date field
- Select any festival or event date
- Also click on the "Go" button
@test_data:  Date  "10 Aug 2020"
@result: Successfully show the events in right hand side
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Events in focus', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus');
        })
        cy.get('#dashboard_start_date').click({force:true})
        cy.get('.datepicker-days > .table-condensed > thead > :nth-child(1) > .prev').click({force:true})
        cy.get('.table-condensed > tbody > :nth-child(3) > :nth-child(1)').click({force:true})
        cy.get('.ml-2 > .btn').click({force:true});
        
    })
})