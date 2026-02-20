/*
@author: irfan ahmad
@master_project_id: 7761
@phase_id: 10568
@story_id: 14955
@story_name: Library_admin_select_multiple_enrollment
@path: final/7761
@test_case_name: Library_admin_select_multiple_enrollment.js
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
    it('Admin area select multiple enrollment', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
        })
        cy.get('[data-cy=admin_tab]').click({force:true});
        cy.get('[data-cy=enroll_link]').click({force:true});
        cy.get('#enroll_as_multiple').click({force:true});
        cy.get('#multiple_email').type('avinash.pandey@ucertify.com,anirudha.pratap@ucertify.com',{force:true});
        cy.get('.enrollment_send_email > .custom_checkbox_new > .check_mark_custom').click({force:true});
        cy.get('#parse_bulk').click({force:true});

        cy.get('#add_bulk_user > span').click({force:true});
        cy.get('#add_bulk_user > span').click({force:true});

    })
});