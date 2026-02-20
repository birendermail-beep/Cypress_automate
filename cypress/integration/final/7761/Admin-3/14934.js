/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10701
@story_id: 14934
@story_name: Inside_sales_leaderboard_page_reference_tickler
@path: final/7761
@test_case_name: Inside_sales_leaderboard_page_reference_tickler.js
@description:
@test_steps:

^test case Inside sales area
- Visit the Inside sales page
- Click on KPI report dropdown tab
- Click on Account Manager Leaderboard option
- Inside sales report will be shown.
- Click on Summary tab
- Click on Reference tickler list numbers
- It will show the page contained all the record

@result:
- Reference tickler list page will be shown
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Reference tickler list page data', function() {
    it('Reference tickler list page data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            AdminArea.salesLeaderboard();
            cy.get('[data-cy=summary_tab]').click()
            cy.get(':nth-child(2) > :nth-child(4) > [data-cy=reference_ticker]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?&primary_contact[]=04hbA&tickler_reference=non_zero&func=&advance_search=inside_sale&search_tab=Inside+Sale')
        })
    })
});