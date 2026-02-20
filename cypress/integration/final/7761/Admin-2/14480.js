/*
@author: Anirudh Pratap
@master_project_id: 7761
@phase_id: 10887
@story_id: 14480
@story_name: Manage ExtraJob
@path: final/7761
@test_case_name: Manage ExtraJob.js
@description: 
@test_steps:
^Load extrajob
-Click the search button and select extrajob option

^Create Extrajob
-Click the manage button
-Modal box will be opened
-Fill data
-Click the Save button

^edit extrajob
-Click on setting button 
-Modal box will be opened
-Fill data
-Click the Save button

^Delete extrajob
-Click on setting button 
-Click on Delete option
-A confirmation modal box will be opened
-Click on Ok button

^Search extrajob
-Put data in search text box and click search icon

@test_data: n/a
@result:  extrajob page will be loaded.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Thank you page', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin");
        })
    })
    it('Extra job list', function() {
        cy.get('[tab="entities_tab"]').click();
        cy.get('#entities_info > #taglist > tbody > :nth-child(10) > :nth-child(2) > .nh > .chapter-link').click();
    })

    it('Action dropdown in Extrajob list', function() {
        cy.get('[tab="entities_tab"]').click();
        cy.get('#entities_info > #taglist > tbody > :nth-child(10) > :nth-child(2) > .nh > .chapter-link').click()
        cy.get('[data-cy=update_lock_status]').click();
        cy.get('[data-cy="yesbutton"]').click();
    })
})