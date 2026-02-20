/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 10433
@story_id: 
@story_name: Exam Objective
@path: final/Create
@test_case_name: Exam Objective.js
@description: 
@test_steps: 
^TO test the questions in which exam objective is not assigned
-Open Author App
-Click on Content Diagnostic Tile
-Click on open in Exam objectives not assigned to question

@test_data:
-CRN: CAS-003,WGU-D08,70-741,70-742

@result: The Diagnostic table should open with question unassigned.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('content diagnostic', function() {
    it('test the content diagnostic page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/project/index.php?author_course=1&func=load_course&course=tech-support-2018&class_code=04J83");
        })
    })
})