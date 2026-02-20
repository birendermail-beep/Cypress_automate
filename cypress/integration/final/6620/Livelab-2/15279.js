/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15279 
@story_name: vma-content_diagnosis
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-content_diagnosis.js
@description: Go to "Logos" and open the Daily error report
@test_steps: 
^Test case of Show the content diagnosis
-Visit the website
-visit the vmadmin area
-Click on the "Diagnosis" dropdown button then select the 'Content Diagnosis' option
-Click on the "Search" button also select the "Advance Search" option
-Successfully open the advance search dialogbox
-Fill the details according your needs
-After that click on the "Search" button
@test_data: N/A
@result: Successfully open the Content daignosis report
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VMA area', function() {

    it('Show the content diagnosis', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/custom/docker/vmadmin/index.php');
        })
        cy.get(':nth-child(4) > #diagnosis_button').click({force:true});
        LoginPage.visitOnClick('#content_diagnosis');
        cy.get('[data-cy=sch_btn_adv]').click({force:true});
        cy.get('#mng_advance_search').click({force:true});
        cy.get('#adv_search_button').click({force:true}); 
    }) 
})