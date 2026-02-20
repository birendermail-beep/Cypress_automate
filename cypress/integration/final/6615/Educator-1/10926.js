/*
@author: irfan ahmad
@master_project_id: 6615
@phase_id : 
@story_id: 10926
@story_name: Remove Instructor
@path: final\6615
@test_case_name: Remove Instructor
@description :
@test_steps:
^test case Instructor area
- Click on Library.
- Search perticular course.
- Click open to go to the dashboard.
- Click on link with instructor.
- Click on remove button.
- Click on yes button to remove instuctor
- Task successful message will be delivered

@result: Instructor removed.
 */

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Remove instructor', function() {
    it('Remove instructor', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.get('[data-cy="mylibrary"]').click({ force: true })
            cy.get('[data-cy="searchbox"]').type('CIW 1D0-671')
            cy.visit(data.url + '/?func=load_course&course=1D0-671&theme_view=classic')
            cy.get('[data-cy=setup_tab]').click()
        })
    })
});