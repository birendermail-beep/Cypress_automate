/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10478
@story_id: 11033
@story_name: Side Pane of Features Page
@path: final/6607/Student
@test_case_name: Side Pane of Features Page.js
@description: all uceritfy fearure are descripted here
@test_steps:

^ucertify feature
-Open https://ucertify.com/ 
-Login with your account
-Click on My Library and click on support icon in right upper corner 
-click on features tab then all feature content will be shown 
-navigation all feature from the left corner 

@test_data: n/a
@result: Feature Area will open
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    //all uceritfy fearure are descripted here, download student manual
    it('all uceritfy fearure are descripted here', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get(':nth-child(4) > .btn').click({ force: true })
            cy.get('.icomoon-help-new-1').trigger('mouseover', { force: true })
            cy.contains('Features').visit(data.url + '/features/ucertify_features-02gSS-help-videos.html')
            cy.get('.prev_btn').should('be.disabled')
            cy.get('.next_btn').click({ force: true })
                //download student manual
            cy.get('.icomoon-file-download').click({ force: true })
        })
    })
})