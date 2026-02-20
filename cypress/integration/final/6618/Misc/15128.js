/*
@author: Anurag Chaurasia
@master_project_id: 6618
@phase_id : 6618
@story_id: 15128
@story_name: file_search
@path: final/Dump_Test_Automation
@test_case_name: file_search.js
@description : show list of TPL, JS or PHP files, 
@test_steps:
^test case of show List if files 
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open Find TPL module
- click on folder dropdown
- select PHP, TPL,or JS 
- List of files will be shown

^test case of show List of files in Pe-gold but not in created array
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open Find TPL module
- click on folder dropdown
- select files in pe-gold but not in created array
- List of files will be shown

^test case of show usage of files 
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open Find TPL module
- click on folder dropdown
- select TPL or PHP or JS under usage option
- List of files will be shown

^test case of no record found 
- Login In ucertify portal
- Go tho this link https://www.jigyaasa.info/util
- open Find TPL module
- alert of no record found will be shown 


@test_data: Login credential, admin permission

@result: List of files will be shown
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Find TPL Module', function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.visit(data.url + "/utils");
                cy.get(':nth-child(40) > :nth-child(2) > .nh > .chapter-link').click();
            })
            cy.get('[data-cy="list_dropdown"]').click();
        })
        //show List if files
    it('show List if files', function() {
            cy.get('[data-cy="TPL_label"]').click();
            cy.get('[data-cy="bs4"]').click();
        })
        //show List of files in Pe-gold but not in created array
    it('show List if files', function() {
            cy.get('[data-cy="TPL_label"]').click();
            cy.get('[data-cy="not_in_created_array"]').click();
        })
        //show usage of files 
    it('show List if files', function() {
        cy.get('[data-cy="usage_label"]').click();
        cy.get('[data-cy="tpl_usage"]').click();
    })
})