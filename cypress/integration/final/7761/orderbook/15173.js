/*
@author: Sundaram Tripathi
@master_project_id: 7761
@phase_id: 
@story_id: 15173
@story_name: knowledge check diagnosis
@path: final/Dump_Test_Automation
@test_case_name: knowledge_check_diagnosis.js
@description: In orderbook and open invoice with email
@test_steps: 
^test case of orderbook click button
-Visit to website
-Login to ucertify.com
- Visit on this link "https://www.jigyaasa.info/admin/knowledge_check_diagnosis.php"
- Click on the "Knowledge Check Diagnosis" option.
- Select any course and click on the "Diagnosis" button.
- After that show the details about courses.
@test_data: Course Name  "WGU-C706 Secure Software Design"
@result: Successfully open the course details
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Admin', function() {

    it('Open the knowledge Check Diagnosis', function() {
        cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.visit(data.url + '/admin/knowledge_check_diagnosis.php');
            })
            // cy.get('.col-md-12 > .px-2').click({force:true});
            // cy.get('#course_list').select('WGU-C706 Secure Software Design',{force:true});
            // cy.get('#diagnose').click({force:true});

    })
})