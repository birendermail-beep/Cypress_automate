/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10568
@story_id: 14954
@story_name: Library_admin_org_change
@path: final/7761
@test_case_name: Library_admin_org_change.js
@description:
@test_steps:

^test case Admin area
- Visit the Library
- Click on Admin tab
- Click on Org to select training room

@result:
- Org changed.
 */


import { Navbar, login_username, login_password, LoginPage, AdminArea, CreateArea } from '../../../../page-objects/pages/index' 
describe('Admin area', function() {
    it('Org change in Admin area', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
        })
        cy.get('[data-cy="admin_tab"]').contains('Admin').click({force:true})
        cy.get('#org_id').select('02iIK', {force: true})
    })
});