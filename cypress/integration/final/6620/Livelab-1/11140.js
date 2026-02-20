/*
@author: Anirudh Pratap
@master_project_id: 6620
@phase_id: 10395
@story_id:
@story_name: Content Activity
@path: final/LiveLab
@test_case_name: Content Activity.js
@description:  VMAdmin Log
@test_steps: 
^ To check the content activity list
-Go to this url:
-https://www.jigyaasa.info/custom/docker/vmadmin/index.php?func=logs&action=content_activity&vcenter_server_id=-1
-https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity&vcenter_server_id=-1
-Search the advanced search without filling any search option
-Content activity list for both from vcenter s0 and d0 with pagination of 30 we can see.

@test_data:
-Content activity Advanced search

@result: Content activity records will be shown with Pagination 30 record and at the bottom we can load more records.
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
    it('To check the content activity list', () => {
        cy.get('#logs_report').click()
        cy.get('[data-cy=content_activity_opt]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy=srch_btn]').click();
    })
})