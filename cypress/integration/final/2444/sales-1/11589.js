/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10360
@story_id: 11589
@story_name: Calendar Invite
@path: final/Admin
@test_case_name: Calendar Invite.js
@description: 
@test_steps: 
^Google calendar invite
-open "url + /admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-click on demo tab
-Click on invite meetings
-invite modal will open up

^Google calendar invite without time
-open "url + /admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-click on demo tab
-Click on invite meetings
-invite modal will open up
-click on save

^google calendar without timezone
-open "url + /admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-click on demo tab
-Click on invite meetings
-invite modal will open up
-Fill time in time column
-click on save

^google calendar without duration
-open "url + /admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-click on demo tab
-Click on invite meetings
-invite modal will open up
-Fill time in time column
-select timezone 
-click on save

^google calendar save
-open "url + /admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-click on demo tab
-Click on invite meetings
-invite modal will open up
-Fill time in time column
-select timezone 
-select duration
-click on save

@test_data: n/a

@result: event created successfully essage should show up
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Sales Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbookOtherTab()
        AdminArea.visitInsideSales()
        AdminArea.salesInsPortal()
        cy.get('[data-cy="demo_tab_btn"]').click()
        cy.get('[data-cy="invite_btn"]').click()
        cy.wait(2000)
        cy.get('#meeting_invite_modal').should('be.visible')
    })
    
    it('Google calendar without duration', () => {
        cy.wait(5000)
        cy.get('#start_time_name').clear().type('21:30') //File not found that's why data-cy not added.
        cy.get('#zone_time').select('Asia/Kolkata', { force: true })
    })

    it('Google calendar with duration', () => {
        cy.wait(5000)
        cy.get('#start_time_name').clear().type('21:30') 
        cy.get('#zone_time').select('Asia/Kolkata', { force: true }) //File not found that's why data-cy not added.
        cy.get('#time_name').select('60', { force: true })
    })
})