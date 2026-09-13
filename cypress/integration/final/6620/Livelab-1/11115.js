/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 11115
@story_name: Machine Issue Report
@path: final/LiveLab
@test_case_name: Machine Issue Report.js
@description: N/A 
@test_steps:

^Content Issue in machine issue report
-Go to machine issue report https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=machine_issue_report&vcenter_server_id=-1#
-Click search and then advanced search. modal will be open.  https://www.screencast.com/t/dskUshWxD
-Select the Report type Content Issue
-Select the date range

^Content Issue Searching for status selected
-Follow the steps 1-3 from previous steps
-Select Status as ignore
-https://www.screencast.com/t/GDdK8CzYrL

^Content Issue Searching for content guid
-Follow the steps 1-3 from previous steps
-Select the Report type Content Issue
-Enter Content guid as 03ey9

^Changing the status of content guid
-Follow the steps 1-3 from previous steps
-Go to actions and then click on Edit option https://www.screencast.com/t/MsiztZsIC1Zt 
-Modal will be open where you have to select the status and add comment
-Click on Update to update the status. https://www.screencast.com/t/r6sH0qTFpPXV

^Test Content
-Follow the steps 1-3 from previous steps
-Go to actions and then click on Test Content option. https://www.screencast.com/t/iQWPEtOtv

^Export as csv for content issue
-Follow the steps 1-3 from previous steps
-Select the first checkbox to select the records. https://www.screencast.com/t/DNpVrIKR50qD
-Click on export as csv

^Export as xls for content issue
-Follow the steps 1-3 from previous steps
-Select the first checkbox to select the records. https://www.screencast.com/t/LzaXw7BvE4Fp
-Click on export as xls

^Select all the p1 issue  but that is not in ignore status
-Follow the steps 1-3 from previous steps
-Click on p1 issue dropdown. https://www.screencast.com/t/MRIHhpjEm
-All the list that is not in ignore status will be selected. https://www.screencast.com/t/u1Wx6x8m8b5F
-You can you the reset button to reset the selected option

^Open bugs
-Follow the steps 1-3 from previous steps
-Click on open bugs
-New tab will be opened with draft email

@test_data: 
-Report type = content issue
-Report type = content issue
-Status = ignore"
-Report type = content issue
-Content guid= 03ey9"
-Action= Edit
-Action = Test Content
-content guid: 03Fwh"
-Export as csv
-Export as csv
-Select p1 issue
-Open bugs button

@result: All content issue  will be shown. Total and Percentage correct will be shown
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Live Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get('#logs_report').click()
        cy.get('#machine_issue_report')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
    })
    it('Content Issue in machine issue report', () => {
        cy.get(':nth-child(6) > .col-lg-9 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Content Issue{enter}');
        cy.get('[data-cy=adv_machine_issue_cy]').click();
    })
    it('Content Issue Searching for status selected', () => {
        cy.get(':nth-child(6) > .col-lg-9 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Content Issue{enter}');
        cy.get(':nth-child(5) > .col-lg-9 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Ignore{enter}');
        cy.get('[data-cy=adv_machine_issue_cy]').click();
    })

    it('Content Issue Searching for content guid', () => {
        cy.get(':nth-child(6) > .col-lg-9 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Content Issue{enter}');
        cy.get('#obj_key').type('03ey9');
        cy.get('[data-cy=adv_machine_issue_cy]').click();
    })

    // 4th testcase
    it('Changing the status of content guid', () => {
        cy.get('#machine_issue_report_advance_search > .modal-dialog > .modal-content > .modal-footer > [type="submit"]').click();
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[last_updated_on="27Dec19"] > .pr-0 > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=action_btn]').click();
        cy.contains('Edit').click();
        cy.wait(5000);
        cy.get(':nth-child(1) > .form-group > .col-lg-9 > .select2-container > .selection > .select2-selection').click()
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Ignore{enter}');
        cy.get('#comment_textarea').type('Testing for Ignore status');
        // cy.get('#multiple_status_update_modal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click();
    })

    it('Test Content', () => {
        cy.get('#machine_issue_report_advance_search > .modal-dialog > .modal-content > .modal-footer > [type="submit"]').click();
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[last_updated_on="27Dec19"] > .pr-0 > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=action_btn]').click();
        cy.contains('Test Content').click();
        cy.wait(5000);
    })

    it('Export as csv for content issue', () => {
        cy.get('#machine_issue_report_advance_search > .modal-dialog > .modal-content > .modal-footer > [type="submit"]').click();
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[last_updated_on="27Dec19"] > .pr-0 > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=export_btn]').click();
        cy.get('#export_all_csv').click();
    })

    it('Export as xls for content issue', () => {
        cy.get('#machine_issue_report_advance_search > .modal-dialog > .modal-content > .modal-footer > [type="submit"]').click();
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[last_updated_on="27Dec19"] > .pr-0 > .d-flex > .custom_checkbox_new > .check_mark_custom').click();
        cy.get('[data-cy=export_btn]').click();
        cy.get('#export_all').click();
    })

    it('To load manage search the machine p1 issue report log.', () => {
        cy.get('[data-cy="adv_machine_issue_cy"]').click({ force: true })
        cy.wait(5000)
        cy.get('[data-cy="p1_issue_btn-cy"]').click({ force: true })
    })
})