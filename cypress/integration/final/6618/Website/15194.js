/*
@author: Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:15194
@story_name: Homepage
@path: final/Website
@test_case_name: Homepage
@description: N/A
@test_steps:
^test the browse title
-visit the website
-click on Browse Title
-mouseover on each component as 'adobe'

@test_data: n/a
@result: home page open
*/
import { Navbar } from '../../../../page-objects/pages/index' 
describe('Home Page', function() {
    it('testing of home page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickonBrowseTitle()
        cy.get('[data-tag-guid="00ZCK"]').contains('Creative Tools').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCk"]').contains('Cloud Technology').click();
        cy.get(2000);
        cy.get('[data-tag-guid="00ZCL"]').contains('Databases').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCN"]').contains('OS').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCp"]').contains('Productivity Tools').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCQ"]').contains('Networking').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCr"]').contains('Data Analytics').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCs"]').contains('AI, ML & Bigdata').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCt"]').contains('Computer Science').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCU"]').contains('Web Development').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="00ZCV"]').contains('DevOps').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="05fTF"]').contains('Coding').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="05ftb"]').contains('Information Technology').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="05ftC"]').contains('Vocational Training').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="05ftc"]').contains('Project Management').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="05nCP"]').contains('Cyber Security').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="06m4G"]').contains('IT Fundamentals').click();
        cy.wait(2000);
        cy.get('[data-tag-guid="06m4g"]').contains('Mobile Development').click();
        cy.wait(2000);
    })
}) 