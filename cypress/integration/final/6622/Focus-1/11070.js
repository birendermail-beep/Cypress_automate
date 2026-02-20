/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 10110
@story_id: 11070
@story_name: Red Report
@path: final/Focus
@test_case_name: Red Report
@test_steps:

^Red report
-Click on reports menu
-click on choose button.
-Report Modal will be opened
-Select 'Red report'.
-Click on Go.

^From this, user can copy red report options of any user.
-From more menu, click reports and then click Red report. Report will be displayed. 
-Click view summary option. Modal will be opened.
-Click settings option in any cell and then click copy.
-the exceptions will be copied.

^User can send email red report points
-Click send email and it will open the details in gmail menu.

@test_data:N/A
@result: Rows will be copied.
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    it('Red report', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="red_report"]').click()
        cy.wait(2000)
        cy.get('[data-cy="red_report_table"]').should('be.visible')
    })
})

