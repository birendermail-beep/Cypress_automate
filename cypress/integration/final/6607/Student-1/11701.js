/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 11701
@story_name: Add Group
@path: final/6607/Student
@test_case_name: Add Group.js
@description: 
@test_steps: 
^Adding Group 1
-Click on Add group from left pane of My Library
-A modal dialog will open.
-Leave all the details blank and Click Add

^Adding Group 2
-Click on Add group from left pane of My Library
-A modal dialog will open.
-Provide the group name but don't select the Color and Title and Click Add

^Adding Group 3
-Click on Add group from left pane of My Library
-A modal dialog will open.
-Provide the group name, select Title and Click Add

^Adding Group 4
-Click on Add group from left pane of My Library
-A modal dialog will open.
-Provide the group name, select Title, select Color and Click Add
Note: Ungroup number should be changed properly.

^Edit/Delete a group
-Click the Toggle icon of side pane.
-Click on the pencil icon to edit/delete a group.
-A modal dialog will appear, click on delete button to delete the group

^Edit/Delete a group
-Click the Toggle icon of side pane.
-Click on the pencil icon to edit/delete a group.
-A modal dialog will appear, edit the details and click save.

@test_data: n/a
@result: Add Group will open.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('login page description', () => {
    it('Course access in Library', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        cy.get('[data-cy="mylibrary"]').click({ force: true })
            //Adding Group 1st
        cy.get('#outer_ul > .btn-group > .btn').click({ force: true })
        cy.get('#create_group > .d-block > :nth-child(2)').click({ force: true })
        cy.get('#add_group').click({ force: true })
        cy.get('[data-cy="cancel_group"]').click({ force: true })
            //Adding Group 2nd
        cy.get('#create_group').click({ force: true })
        cy.get('#group_name_textbox').type("new Testing group", { force: true })
        cy.get('#add_group').click({ force: true })
        cy.get('[data-cy="cancel_group"]').click({ force: true })
             //Adding Group 3rd
        cy.get('#create_group').click({ force: true })
        cy.get('#group_name_textbox').type("new Testing group", { force: true })
        cy.get('.colorChooser').click({ force: true })
        cy.get('[rgb="#006666"]').click({ force: true })
        cy.get('#courses_select').select('APP-Training [app-training]', { force: true })
        cy.get('#add_group').click({ force: true })
        cy.get('[data-cy=btn_group]').click({force: true})
        cy.get(':nth-child(5) > [data-cy=create_all_group] > .icomoon-pencil-2').click({force: true})
        cy.get('#group_name_textbox').clear().type('For Test2')
        cy.get('#add_group').click()
        cy.get('[data-cy=btn_group]').click({force: true})
        cy.get(':nth-child(4) > [data-cy=create_all_group] > .icomoon-pencil-2').click({force: true})
        cy.get('.col-md-12 > .btn-outline-primary').click()
        cy.wait(5000)
        cy.get('#delete_group').contains('Yes').click()
        cy.get('[data-cy=errormsg]').contains('Deleted successfully.')
    })
})