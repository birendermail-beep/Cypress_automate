/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: Server Health Report
@path: final/LiveLab
@test_case_name: Server Health Report.js
@decription: 
@test_steps:
^High CPU Usage report
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=machine_issue_report&vcenter_server_id=-1
-Go to advanced search and select the action type = High CPU Usage and Report Type= Machine Issue  https://www.screencast.com/t/c5QNfSrjQngJ

^High memory usage report
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=machine_issue_report&vcenter_server_id=-1
-Go to advanced search and select the alert type = High memory usage and Report Type = Machine Issue https://www.screencast.com/t/wziNwwbqXe

^Showing the CPU usage report in report alert
-o to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=machine_issue_report&vcenter_server_id=-1
-o to advanced search and select the action type = CPU Usage and Report Type = Machine Issue. https://www.screencast.com/t/cszFF87oq

^Three attempts not removed
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=machine_issue_report&vcenter_server_id=-1
-Go to advanced search and select the action type = Three attemps not removed and Report Type = Machine Issue https://www.screencast.com/t/MHEnoMFpK6g

@test_data: 
-action type = High CPU Usage
-action type = High memory usage
-action type = CPU Usage
-action type = Three attempt not removed

@result: High memory usage report, Threshold crossed machine report, Three attemp not removed machine report will be shown. 
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
        cy.get('#machine_issue_report')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
    })
    it('High CPU Usage report', () => {
        cy.get('.select2-search__field').type('High CPU Usage{enter}');
        cy.get('[data-cy=adv_machine_issue_cy]').click({ force: true });
    })
    it('High memory usage report', () => {
        cy.get('.select2-search__field').type('High memory usage{enter}');
        cy.get('[data-cy=adv_machine_issue_cy]').click({ force: true });
    })
    it('Three attempts not removed', () => {
        cy.get('.select2-search__field').type('Three attempt not removed{enter}');
        cy.get('[data-cy=adv_machine_issue_cy]').click({ force: true });
    })
})