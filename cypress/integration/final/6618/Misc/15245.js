/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15245
@story_name: contextMenu
@path: final/Misc
@test_case_name: contextMenu
@description: N/A   
@Test Steps: 
^contextMenu
1) Go to https://www.ucertify.com/utils/
2) Click on studio

@test_data: n/a
@result:certificate demo page will open
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Utils Area', function() {

    it('Contaxt Manu Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils');
        })
        cy.get(':nth-child(23) > :nth-child(3) > .btn').click({ force: true });
    })
})