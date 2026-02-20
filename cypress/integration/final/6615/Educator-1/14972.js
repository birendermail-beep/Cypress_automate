/*
@author: Anirudh Pratap
@master_project_id: 6615
@phase_id: 11024
@story_id: 14972
@story_name: Move to Archive option in List view
@path: final/6615
@test_case_name: Move to Archive option in List view.js
@description: Move to Archive option in List view
@test_steps:
^Move to Active option in List view
-Click on Drop down menu  
-Select 'Move to Archive' option     
-Click on 'Yes' button

^Move to Archive option in List view
-Click on Drop down menu  
-Select 'Move to Archive' option     
-Click on 'Yes' button

@test_data: n/a

@result: Section is moved under Archive tab
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
        })
    })

    it('1.6.7.1 Move to Active option from Archive in list view', function() {
        cy.get('button').contains('Manage').click({ force: true })
        cy.get('.span13 > .btn-sm > .icomoon-menu-2').eq(0).click({ force: true })
        cy.get('.span13 > .dropdown-menu > :nth-child(1) > .move_to_archive').eq(0).click()
        cy.get('[data-cy=yesbutton]').click({ force: true })
    })

    it('1.6.7.2 Move to Archive option from Active in list view', function() {
        cy.get('button').contains('Manage').click({ force: true })
        cy.get('.col-xl-9 > #nav_tab > .archive_tab > .nav-link').click({ force: true })
        cy.get('.span13 > .btn-sm > .icomoon-menu-2').eq(0).click({ force: true })
        cy.get('.span13 > .dropdown-menu > :nth-child(1) > .move_to_active').click({ force: true })
        cy.get('[data-cy=yesbutton]').click({ force: true })
    })
});