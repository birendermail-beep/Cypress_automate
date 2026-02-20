/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10865
@story_name: Share & Import Assessment
@path: final\6615
@test_case_name: Share & Import Assessment.js
@description: n/a
@test_steps:
^Assessment tab/ Share & Import button/Share Assessment
-Click on Share and Import button;        
-Select Share Assessment button;     
-Click on Generate key button;      
-Click on Copy to Clipboard button;    
-Share the Key with the required instructor;

^Assessment tab/ Share & Import button/Import Assessment/Link assessment
-Click on Share and Import button        
-Select Import Assessment button     
-Select Copy assessment button      
-Enter Assessment key    
-Click on Get button     
-Select the Assessment to be imported     
-Click on Copy button

^Assessment tab/ Share & Import button/Import Assessment/Link assessment
-Click on Share and Import button        
-Select Import Assessment button     
-Select Copy assessment button      
-Enter Assessment key    
-Click on Get button     
-Select the Assessment to be imported     
-Click on Copy button
@test_data: N/A 
@result: open the Assessment tab open
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.visitTechCourse();
        })
    })
    it('1.11.7.5 Assessment tab/ Share & Import button/Share Assessment', function() {
        // cy.get('[data-cy=educator_design]').click();
        // cy.wait(2000);
        cy.get('#customize_gradebook_form > .form-group > .btn').click();
        cy.wait(2000);
        cy.get('.import_btn').click();
        cy.wait(2000);
        cy.get('#get_generate_key').click();
    })
    it('1.11.7.7 Assessment tab/ Share & Import button/Import Assessment/ Copy assessment', function() {
        // cy.get('[data-cy=educator_design]').click();
        // cy.wait(2000);
        cy.get('#customize_gradebook_form > .form-group > .btn').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .dropdown-item').contains('Import Assessment').click();
        cy.get('#import_assessment').click();
        cy.fixture('global').then(data => {
            cy.get('#section_key').clear({ force: true }).type(data.section_key[2], { force: true })
        })
        cy.get('#section_submit').click({force:true})
        cy.get('#submit_assessment_btn').click({force:true})
        
    })
    it('1.11.7.6 Assessment tab/ Share & Import button/Import Assessment/Link assessment', function() {
        // cy.get('[data-cy=educator_design]').click();
        // cy.wait(2000);
        cy.get('#customize_gradebook_form > .form-group > .btn').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .dropdown-item').contains('Import Assessment').click();
        cy.fixture('global').then(data => {
            cy.get('#section_key').clear({ force: true }).type(data.section_key[2], { force: true })
        })
        cy.get('#section_submit').click({force:true})
        cy.get('#submit_assessment_btn').click({force:true})
    })
});