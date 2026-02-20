/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: Daily Error Report
@path: final/LiveLab
@test_case_name: Daily Error Report.js
@decription: 
@test_steps:
^Error Report for any file save error or missing thing
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Go to advanced search and click the search button

^Daily Error Report
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-It will show the page with the message: Didn't find your record? Hit search button for advanced search.

^Selected the limit condition and Click Search
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Click search dropdown. Then Click Advanced Search.
-With Selected the limit condition and Click Search

^Selected the limit condition and Select the period as Today
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Click search dropdown. Then Click Advanced Search.
-With Selected the limit condition and Select the period as Today

^Selected the limit condition and User as 066ez
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Click search dropdown. Then Click Advanced Search.
-With Selected the limit condition and User as 066ez

^Selected the limit condition and Method as saveFrameworkLog
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Click search dropdown. Then Click Advanced Search.
-With Selected the limit condition and Method as saveFrameworkLog

^click on Export dropdown and Export as csv
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Click search dropdown. Then Click Advanced Search.
-Search the record as shown above for advanced search creteria
-Select the record and click on Export dropdown and then Export as csv

^click on Export dropdown and Export as xls
-Go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=daily_error_report&vcenter_server_id=-1
-Click search dropdown. Then Click Advanced Search.
-Search the record as shown above for advanced search creteria
-Select the record and click on Export dropdown and then Export as xls

@test_data: 
-tab = Logs ->Daily Error Report
-limit = 30
-period = Today
-user = 066ez
-method = saveFrameworkLog
-Export Type = Export as csv
-Export Type = Export as xls

@result: Daily error report will be shown
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get('#logs_report').click()
        cy.get('#daily_error_report')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
    })
    //1st and 3rd testcase same
    it('Error Report for any file save error or missing thing', () => {
        cy.get('#adv_search_button').click();
    })
    it('Daily Error Report', () => {
        cy.get('.modal-footer > [data-dismiss="modal"]').click();
        cy.get('.mainWrapper > .alert').should('exist');
    })
    it('Selected the limit condition and Select the period as Today', () => {
        cy.get('#select2-report_auto_date-container > .select2-selection__placeholder').click();
        cy.get('.select2-search__field').type('Today{enter}')
        cy.get('#adv_search_button').click({ force: true });
    })
    it('Selected the limit condition and User as 066ez', () => {
        cy.get('#user_guid').type('066ez');
        cy.get('#adv_search_button').click({ force: true });
        cy.get('.col-md-12 > .alert').should('exist');
    })
    it('Selected the limit condition and Method as saveFrameworkLog', () => {
        cy.get('#method').type('saveFrameworkLog');
        cy.get('#adv_search_button').click({ force: true });
        cy.wait(5000);
    })
    it('click on Export dropdown and Export as csv', () => {
        cy.get('#adv_search_button').click({ force: true });
        cy.get(':nth-child(1) > .text-center > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=export_btn]').click();
        cy.get('#export_all_csv').click();
    })
    it.only('click on Export dropdown and Export as xls', () => {
        cy.get('#adv_search_button').click({ force: true });
        cy.get(':nth-child(1) > .text-center > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=export_btn]').click();
        cy.get('#export_all').click();
    })
})