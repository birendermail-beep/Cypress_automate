/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id: 10395
@story_id:
@story_name: Teamplates VM List
@path: final/LiveLab
@test_case_name: Teamplates VM List.js
@description:  To check the templates vm list
@test_steps: 
^ To check the templates vm list
-Go to this url:
-https://www.jigyaasa.info/custom/docker/vmadmin/index.php?func=catalogue&action=templates_vm&vcenter_server_id=-1
-https://www.ucertify.com/custom/docker/vmadmin/index.php?func=catalogue&action=templates_vm&vcenter_server_id=-1
-Search the advanced search without filling any search option
-All templates vm list for both from vcenter s0 and d0 we can see."

@test_data:
-Templates vm Advanced search

@result: All the templates vm records will be shown.
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitVmAdmin()
        })
    })
    it('To check the templates vm list', () => {
        cy.get('#catalogue_button').click();
        cy.get('[data-cy=template_opt]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy=srch_btn]').click();
        cy.wait(10000);
        cy.get('[data-cy=template_tbl]').should('exist');
    })
})