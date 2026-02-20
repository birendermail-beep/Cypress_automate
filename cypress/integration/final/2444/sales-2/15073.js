/*
@author: Sundaram Tripathi
@master_project_id: 2444
@phase_id: N/A
@story_id: 15073
@story_name: assessment_survey_download
@path: final/Dump_Test_Automation
@test_case_name: assessment_survey_download
@description: Go to the admin area then download the survey report
@test_steps: 
^test case of download the survey report
-Visit to website
-Login to ucertify.com
-Visit this link "/admin/admin-survey-report.php?download=1"
@test_data: N/A
@result: Successfully download the survey report
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Admin Area', function() {

    it('Download survey report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.request(data.url+'/admin/admin-survey-report.php?download=1');
        });
    }) 
})