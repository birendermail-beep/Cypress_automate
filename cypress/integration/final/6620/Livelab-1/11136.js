/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id: 10395
@story_id:
@story_name: Machine List
@path: final/LiveLab
@test_case_name: Machine List.js
@description: To show the all machines records for vcenter s0 and d0 
@test_steps: 
^To show the all machines records for vcenter s0 and d0 
-Go to this url: https://www.jigyaasa.info/custom/docker/vmadmin/index.php?func=devices&action=list&vcenter_server_id=-1
-https://www.ucertify.com/custom/docker/vmadmin/index.php?func=devices&action=list&vcenter_server_id=-1
-Search the advanced search without filling any search option
-All Machine list for both from vcenter s0 and d0 we can see.

@test_data:
-Machine list Advanced search

@result: All the machines will be shown.
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
    it('To show the all machines records for vcenter s0 and d0', () => {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy=search_btn]').click();
    })
})