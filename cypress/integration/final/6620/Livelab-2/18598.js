
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18598
@story_name: Load machine UI from vmadmin
@path: final/6620/Livelab-2
@test_case_name: LB_UI_08
@description: New UI for the load machine changed right panel will be as pinned and inpinned with draggable and resizable
@test_steps:
^Load machine UI from vmadmin
- Visit to website.
- Login into website.
- Go to this url https://demo-a.ucertify.com:8012/custom/docker/vmadmin/index.php?func=catalogue&action=contents .
- Search this guid: 06ayY.
- Go to setting icon dropdown and click on Test and select g0.
- It will load the new page.
- Reference video screenshot: https://www.screencast.com/t/NBn8dQ46 . 
@test_data: device=bs16
@result: New UI is showing.
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Container Instance', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=contents');
            cy.get('[data-cy=sch_btn_adv]').click();
            cy.get('#mng_advance_search').click();
            cy.wait(5000);
            cy.get('[data-cy=content_guid_txt]').type('06ayY{enter}');
            //cy.get('[data-cy=srch_btn]').click();
            cy.get('[data-cy=action_content]').click();
            cy.get('[data-cy=test_menu]').click();
            cy.get('[data-cy=g0_menu]')
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                });
        })
    })
})