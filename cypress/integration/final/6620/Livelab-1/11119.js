/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: Server Logs
@path: final/LiveLab
@test_case_name: Server Logs.js
@decription: 
@test_steps:
^Showing the login report in server logs
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Go to advanced search and Select the date range and log type VAPI Login and click the submit button https://www.screencast.com/t/zBKVTVKb

^Showing the login report in server logs for particular ip
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs 
-Go to advanced search and  Enter the ip address in the IP. Select the date range and log type VAPI Login and click the submit button https://www.screencast.com/t/r9tAPB2BN

^Export the data 
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Select the record and click on export as clv https://www.screencast.com/t/hwL61gAQnE

^Show ip details
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-After the logs shown go to actions column and click on show ip details
-Ip details will be shown in modal https://www.screencast.com/t/nxLb1X3Odk0

^Export the data 
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Select the record and click on export as xls. https://www.screencast.com/t/aA0QPMcv

^Firewall report 
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Go to advanced search and Select log type as Firewall and click the submit button. https://www.screencast.com/t/CE0jfGrdfrq

^To show the freeze access logs
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Go to advanced search and select log type = Freeze Access. https://www.screencast.com/t/aanxbeEtYhDx

^To show the freeze error logs 
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Go to advanced search and Select log type as freeze error and click the submit button. https://www.screencast.com/t/7FnijBrAz9A8

^To show the ag error logs
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=server_logs
-Go to advanced search and Select log type as Firewall and click the submit button. https://www.screencast.com/t/dgw7MiArXEjL

@test_data: 
-Period = Yesterday 
-log type VAPI Login
-Ip = 66.220.10.174
-Export Type = export as cls
-Action = show ip detail
-Export Type = export as cls
-Log type = Firewall
-log type = Freeze Access
-Log type = Freeze Error
-Log type = Ag Error

@result:All Login report, Login for entered ip, Data will be exported in excel sheet Modal, and ip detail, Data will be exported in excel sheet , Firewall report,Freeze access log, Freeze Error log , Ag Error logs will be shown
*/


import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('Server error log', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/utils");
            cy.get(':nth-child(38) > :nth-child(2) > .nh > .chapter-link').click();
        })
    })
    it('Apache error log', function() {
        cy.get('[href="https://www.jigyaasa.info/utils/server_log.php?func=apache_error"]').click();
        cy.get('[data-cy="apache_log"]').click();
        cy.get('input[data-cy="error_date"]').clear({ force: true }).type('06-Sep-20', { force: true });
        cy.get('button[data-cy="search_error"]').click();
    })
    it('access error log', function() {
        cy.get('[href="https://www.jigyaasa.info/utils/server_log.php?func=apache_error"]').click();
        cy.get('[data-cy="access_log"]').click();
        cy.get('input[data-cy="error_date"]').clear({ force: true }).type('07-Sep-20', { force: true });
        cy.get('button[data-cy="search_error"]').click();
    })
    it('Slow site error log', function() {
        cy.get('[href="https://www.jigyaasa.info/utils/server_log.php?func=apache_error"]').click();
        cy.get('[data-cy="slow_site_log"]').click();
        cy.get('input[data-cy="error_date"]').clear({ force: true }).type('06-Sep-20', { force: true });
        cy.get('button[data-cy="search_error"]').click();
    })
})