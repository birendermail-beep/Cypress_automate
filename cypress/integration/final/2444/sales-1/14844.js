/*
@author: Anirudha Pratap
@master_project_id: 2444
@phase_id: 10148
@story_id: 14844
@story_name: exam_objective_relation
@path: final/Admin
@test_case_name: exam_objective_relation.js
@description:
@test_steps:
^show the exam objectives
-goto to the link: https://demo.ucertify.com:9040/admin/catalog.php
-click on settings icon option button
-click on exam objectives

@test_data: n/a

@result: show the exam objectives
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("admin page testing", function() {
    it("exam objectives in admin area", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+'/admin/catalog.php');
            cy.get('[data-cy=settings_menu]').eq(0).click({force:true});
            cy.get('[data-cy=exam_objective_cy]').eq(5).click({force:true});
            cy.visit(data.url+'/?func=exam_obj_relation&course_code=01F8O&is_catalog=1');
        })
    });
});