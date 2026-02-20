/*
@author: Akansha George
@master_project_id: 6622
@phase_id: 10858
@story_id: 11466
@story_name: Export Report
@path: final/Focus
@test_case_name: Export Report
@test_steps:

^Export Feature in project master
-Open the given URL
-There will be a button named Export
-Clicking this, there will be 2 options
-Export as xls
-Export as csv
-Click any of the options

@test_data: n/a
@result: file will be downloaded
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