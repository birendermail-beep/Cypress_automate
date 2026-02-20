/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 10858
@story_id: 11468
@story_name: Weekly Goal Report
@path: final/Focus
@test_case_name: Weekly Goal Report
@test_steps:

^show persons list with no weekly goal
-Click Reports
-From given options Select 
-Report type-weekly goal
-subtype-not updated 2w plan
-provide dates
-Click Go

@test_data: 
-Report: Weekly goal
-Subtype: Not updated 2w plan
-Start: 13Jun19
-End: 13Jun19

@result: persons list will come
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    it('Export Feature in project master', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
        cy.get('[data-cy="goal_tab"]').click()
        cy.get('[data-cy="my_project"]').click()
        cy.get('[data-cy=download_list_dropdown]').click()
        cy.get('[data-cy=export_as_csv]').click()
    })
})