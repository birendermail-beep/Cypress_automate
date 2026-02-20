/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15095
@story_name: diagnosis
@path: final/Dump_Test_Automation
@Test_Case_Name: diagnosis.js
@description: 
@test_steps: 
^Test case of diagnosis.js
-Click on this link: https://www.jigyaasa.info/custom/docker/diagnosis/index.php
- Successfully open the vmadmin.
- Click on the ""Diagnosis"" dropdown button.
- Select the ""Autograding"".
- Successfully open the autograding page."

@test_data: N/A

@result: Red report should be open.
*/


import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VmAdmin Area ', function() {

    beforeEach(function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/custom/docker/diagnosis/index.php');
        })
    })
    it('Diagnosis with autograding',function() {
        cy.get(':nth-child(4) > #diagnosis_button').click({force:true});
        cy.get('#autograding_diagnosis').click({force:true});
    })
    it('Show the backup in diagnosis ',function(){
        cy.get(':nth-child(4) > #diagnosis_button').click({force:true});
        LoginPage.visitOnClick('#backup_diagnosis');
        
    })
    it('Show the machindetails', function() {
        cy.get(':nth-child(4) > #diagnosis_button').click({force:true});
        LoginPage.visitOnClick('#autograding_diagnosis');
        cy.get('#machines').type('bs16',{force:true});
        cy.get('.col-lg-2 > .btn').click({force:true});
    })
})