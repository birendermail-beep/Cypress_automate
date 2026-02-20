/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10360
@story_id: 11592
@story_name: Instructor Infomation
@path: final/Admin
@test_case_name: Instructor Infomation.js
@description: 
@test_steps: 
^new fields in inside sales 1
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change street address 
-click on save

^new fields in inside sales 2
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change state 
-click on save

^new fields in inside sales 3
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change city
-click on save

^new fields in inside sales 4
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change zip
-click on save

^new fields in inside sales 5
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change pref mode of communication
-click on save

^new fields in inside sales 6
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change pref time of communication
-click on save

^new fields in inside sales 7
-open https://www.jigyaasa.info/admin/instructor_portal.php?list_view=1&search_text=ajeet.chauhan&custom_search=
-click on edit mode
-new fields, street address, city, state , zip, pref mode of comm, pref time of comm, decision maker are added
-Change decision maker
-click on save

@test_data:
-street address : Chaitham lines
-state : uttar pradesh
-city : mainpuri
-zip : 211013
-pref mode of comm : call
-pref time of comm : morning
-decision aker : yes

@result: on save content should be visible
*/
import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Sales Area', () => {
    it('Check New Fields Street address, City, State , Zip, Pref Mode of comm, Pref Time of Comm, Decision Maker', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        AdminArea.visitAdminPanel()
        AdminArea.visitOrderbookOtherTab()
        AdminArea.visitInsideSales()
        AdminArea.salesInsPortal()
        cy.get('[data-cy="street_add"]').focus()
        cy.get('[data-cy="street_add"]').should('be.visible')
        cy.get('[data-cy="user_city_text"]').should('be.visible')
        cy.get('[data-cy="user_state_text"]').should('be.visible')
        cy.get('[data-cy="user_zip_text"]').should('be.visible')
        cy.get('[data-cy="pref_mode_select"]').should('be.visible')
        cy.get('[data-cy="pref_time_select"]').should('be.visible')
        cy.get('[data-cy="desc_maker_select"]').should('be.visible')
    })
})