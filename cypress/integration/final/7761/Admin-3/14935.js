/*
    @author: irfan ahmad
    @master_project_id: 7761
    @phase_id: 10701
    @story_id: 14935
    @story_name: Inside_sales_leaderboard_page_revenue_tickler
    @path: final/7761
    @test_case_name: Inside_sales_leaderboard_page_revenue_tickler.js
    @description:
    @test_steps:

    ^test case Inside sales area
        - Visit the Inside sales page
        - Click on KPI report dropdown tab
        - Click on Account Manager Leaderboard option
        - Inside sales report will be shown.
        - Click on Summary tab
        - Click on Revenue tickler list numbers
        - It will show the page contained all the record

    @result:
        - Revenue tickler list page will be shown
 */

import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Revenue tickler list page data', function() {
    it('Revenue tickler list page data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            AdminArea.salesLeaderboard();
            cy.get('[data-cy=summary_tab]').click()
            cy.get(':nth-child(2) > :nth-child(3) > [data-cy=revenue_ticker]').click()
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php?&primary_contact[]=04hbA&tickler_revenue=non_zero&func=&advance_search=inside_sale&search_tab=Inside+Sale')
        })
    })
});