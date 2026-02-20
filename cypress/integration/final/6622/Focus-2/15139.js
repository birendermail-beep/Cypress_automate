/*
@author: Sundaram Tripathi
@master_project_id: 6622
@phase_id : 6618
@story_id: 15139
@story_name: focus_bugs_review_report.js
@path: final/Dump_Test_Automation
@test_case_name: focus_bugs_review_report.js
@description : 
@test_steps:
^"bugs review report
-Click on this link: https://www.jigyaasa.info/focus/index.php?func=reports
- Click on the choose dropdown button.
- Go to the ""Report"" section and select ""Bug Review Report"".
- After that click on the ""Period"" section and select ""Last Month.""
- Click on the ""Go"" button."

@test_data: Login credential, org permission

@result: Bug review report should be show
*/


import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Focus Area', function() {

    it('Bugs review report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/focus/index.php?func=reports');
        })
        cy.get('[data-cy=show_report_modal]').click({force:true});
        cy.get('#report_chosen').select('Bugs Review Report',{force:true});
        cy.get('#report_auto_date').select('Last Month',{force:true});
        cy.get('#advance_search').click({force:true});
    }) 
})