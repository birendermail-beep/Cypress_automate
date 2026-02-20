/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10360
@story_id: 11593
@story_name: Add Oppurtunity
@path: final/Admin
@test_case_name: Add Oppurtunity.js
@description: 
@test_steps: 
^new fields in opportunity
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-go to opportunity tab 
-edit opportunity
-fill PO number
-click on save

^new fields in opportunity
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-go to opportunity tab 
-edit opportunity
-fill Doc link 
-click on save

@test_data:
-PO : 123456
-doc link : docs.google.com

@result: chnages should save and reflect on refresh
*/
import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Sales Area', () => {
    it('Opportunity PO and Doc Link check', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbookOtherTab()
        AdminArea.visitInsideSales()
        AdminArea.salesInsPortal()
        cy.get('[data-cy="opportunity_tab_upper"]').click()
        cy.get('[data-cy="oppo_action"]').eq(0).click()
        cy.get('[data-cy="edit_tab_connect"]').eq(0).click()
        cy.get('[data-cy="po_textbox"]').clear().type("1234")
        cy.get('[data-cy="doc_link_textbox"]').clear().type("docs.google.com")
        cy.get('[data-cy=save_oppo]').click()
        cy.go('back')
        cy.go('back')
    })
})