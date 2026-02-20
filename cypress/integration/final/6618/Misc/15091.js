/*
@author: Sundaram Tripathi
@master_project_id: 6618
@phase_id: 
@story_id: 15091
@story_name: course_list
@path: final/Dump_Test_Automation
@Test_Case_Name: course_list.js
@description: Go to editor area and type guid and get the item info
@test_steps: 
^Test case of course_list.js
-Click on this link: https://www.jigyaasa.info/utils/temp/code-quality-what-not-todo-example.php
-Successfully open the courses page

@test_data: N/A

@result: Courses page should be open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Utils Area', function() {

    it('open courses list', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils/temp/code-quality-what-not-todo-example.php');
        })
    })
})