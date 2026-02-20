/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15096
@story_name: download_doc
@path: final/Dump_Test_Automation
@Test_Case_Name: download_doc.js
@description: 
@test_steps: 
^Test case of download_doc.js
-Click on this link: https://www.jigyaasa.info/courses/download_new.php
- Open download page.
- Go to the course name and select any courses.
- After that select the course."

@test_data: N/A

@result: Course will be downlod in doc format
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Website', function() {

    it('Download file in doc', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/courses/download_new.php");
        })
        cy.get('#course').select('1D0-622:CIW: Data Analyst', { force: true });
        cy.get('#format').select('DOC', { force: true });
        cy.get('.btn').click({ force: true });
    })
})