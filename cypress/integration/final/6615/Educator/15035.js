/*
@author: Anurag Chaurasia
@master_project_id: 6615
@phase_id : 10148
@story_id: 15034
@story_name: educator_user_group_setting
@path: final/Educator
@test_case_name: educator_user_group_setting.js
@description : educator_user_group_setting
@test_steps:
^test To show action dropdown in user group
- to show manage user option in action dropdown
- create, activity report in action dropdown
- Move To Active in action dropdown

^test case of to show manage user option in action dropdown
- Login In ucertify portal in ocps
- Go to my library
- go to user group tab
- select all user tab
- open a group
- open actiob dropdown button
- manage user option will show 

^test case of show create, activity report in action dropdown
- Login In ucertify portal in ocps
- Go to my library
- go to user group tab
- select all user tab
- open action dropdown
- create group, activity report option will show

^test case of show Move To Active in action dropdown
- Login In ucertify portal in ocps
- Go to my library
- go to user group tab
- select all user tab
- switch to archive tab
- open action dropdown
- move to active option will show

@test_data: Login credential.

@result: action dropdown option will show
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe("action dropdown in user group", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[0])
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
        cy.get('[data-cy=mylibrary]').click();
        cy.get('[data-cy=user_groups]').click();
        cy.get('[data-cy=all_groups]').click();
    })
    it("to show manage user option in action dropdown", function() {
        cy.get('[data-cy=open]').eq(0).click({ force: true });
        cy.get('[data-cy=user_group_settings]').click();
    })
    it("create, activity report in action dropdown", function() {
        cy.get('[data-cy=user_group_settings]').click();
    })
    it("Move To Active in action dropdown", function() {
        cy.get('#user_group_achive').click();
        cy.get('[data-cy=user_group_settings]').click();
    })
});