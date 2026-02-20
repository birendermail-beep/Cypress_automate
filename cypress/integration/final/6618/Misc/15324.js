/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15324
@story_name: Api monitoring
@path: final/Misc
@test_case_name: Api monitoring
@description: N/A   
@test_steps: 
^api_monitoring
-visit the website
-login to website
-visit the utils area
-click on Api monitoring
-click search and advance search 
-select Api fill the dates 
-type min time and max time
-click on search button
-click on setting button
-click on detail

@test_data: n/a
@result: api monitoring area
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe("misc page testing", function() {
    it("API Monitoring area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils/");
        })
        cy.get(".chapter-link").contains("API Monitoring").click({ force: true });
        cy.get('.input-group-append > .dropdown-toggle').click({ force: true });
        cy.get('.input-group-append > .dropdown-menu > li > .dropdown-item').click({ force: true });
        cy.get('.form-control.form-control-sm.w-100.select2.select2-hidden-accessible').select('catalog_bundle_get', { force: true });
        cy.get('#search_sdt').click({ force: true });
        cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click({ force: true });
        cy.get('#search_edt').click({ force: true });
        cy.get('.table-condensed > tbody > :nth-child(4) > :nth-child(6)').click({ force: true });
        cy.get('#advance_search').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(9) > .dropdown > .btn').click({ force: true });
        cy.get(':nth-child(2) > :nth-child(9) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click({ force: true });
    });
});