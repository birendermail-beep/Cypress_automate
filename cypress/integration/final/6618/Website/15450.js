/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15450
@story_name: certification page
@path: final/6618/Website
@test_case_name: certification page
@description:N/A
@test_steps: 

^certification page
-Visit to https://certification-partners.ucertify.com
-Login to website
-click on homepage

@test_data: n/a
@result: home page footer open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('certification page', function () {
    it('Opening the certification page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.website[10])
            // Navbar.clickOnLogin()
            // LoginPage.loginPage(login_username, login_password)
            // cy.get('[data-cy=homepage]').click({ force: true })
        })
    })
})