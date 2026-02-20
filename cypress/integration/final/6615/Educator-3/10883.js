/*
@author: Anirudha Pratap 
@master_project_id: 6615
@phase_id: 
@story_id: 10883
@story_name: Schedule Test
@path: final/6615
@test_case_name: Schedule Test.js
@description: n/a
@test_steps:
^Design tab/ Action button/ Modify Test option
-On Design tab, click on Action button for the required component that needs to be modified;         
-Click on the Pencil icon next to the component name;         
-Give the required Title & Description;         
-Select the required items that needs to be added from the drop-down list;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Schedule Test option/ Start & End date
-On Design tab, click on Action button for the required component that needs to be scheduled;         
-Select Start date & time and End date & time;          
-Select the time zone if required;         
-Click on OK button & click on Save button;

^Design tab/ Action button/ Schedule Test option/ Prerequisite
-On Design tab, click on Action button for the required component;         
-Check the Prerequisite checkbox;         
-Select the required component from the drop-down and select the required minimum %age to be scored;        
-Click on OK button & click on Save button;

^Design tab/ Action button/ Schedule Test option/ Protected by password
-On Design tab, click on Action button for the required component;         
-Check the Protected By checkbox;         
-Select Password and enter the required password;
-Click on OK button & click on Save button;

^Design tab/ Action button/ Schedule Test option/ Protected by Proctor login
-On Design tab, click on Action button for the required component;         
-Check the Protected By checkbox;         
-Select Proctor Login and enter the required proctor's email address;     
-Click on OK button & click on Save button;

@test_data: n/a
@result: Components are modified as per the settings made
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
    // it('1.12.2.2 Design tab/ Action button/ Modify Test option', function() {
    //     cy.get('#settting_t_-4').click({ force: true })
    //     cy.get('.icomoon-pencil-3').click({ force: true })
    //     cy.get('#rename_name').clear({ force: true }).type('Test A', { force: true })
    //     cy.get('#rename_desc').clear({ force: true }).type('Test start', { force: true })
    //     cy.get('.col-8 > .select2-container > .selection > .select2-selection').click()
    //     cy.get('.select2-search__field').clear({ force: true }).type('testingNew11', { force: true })
    //     cy.get('#modal_to_settings').click()
    //     cy.get('.btn-group > #save_assessment').click({ force: true })
    // })
    it('1.12.2.3.1 Design tab/ Action button/ Schedule Test option/ Start & End date', function() {
        cy.get('#settting_t_-4').click()
        cy.wait(2000);
        cy.get('#assessment_start_date2').clear({ force: true }).type('22-Dec-2020 at 09:00 A.M.', { force: true })
        cy.get('#assessment_end_date2').clear({ force: true }).type('23-Dec-2020 at 09:00 A.M.', { force: true })
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click()
    })
    it('1.12.2.3.2 Design tab/ Action button/ Schedule Test option/ Prerequisite', function() {
        cy.get('#settting_t_-4').click()
        cy.wait(2000)
        cy.get('#for_pre_requisite').click({ force: true })
        cy.get('#previous_object_tests').select('Practice Test A', { force: true })
        cy.get('#unlock_when').clear({ force: true }).type('60', { force: true })
        cy.get('#for_pre_requisite').click({ force: true })
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.3.3 Design tab/ Action button/ Schedule Test option/ Protected by password', function() {
        cy.get('#settting_t_-4').click()
        cy.wait(2000);
        cy.get('.float-left > .form-check').click()
        cy.get('#stand_alone_password > :nth-child(3)').click({ force: true })
        cy.get('#password').clear({ force: true }).type('1234', { force: true })
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
    it('1.12.2.3.4 Design tab/ Action button/ Schedule Test option/ Protected by Proctor login', function() {
        cy.get('#settting_t_-4').click()
        cy.wait(2000);
        cy.get('.float-left > .form-check').click({ force: true })
        cy.get('#proctor_password > :nth-child(3)').click({ force: true })
        cy.fixture('global').then(data => {
            cy.get('#password').clear({ force: true }).type(data.auditor_email[5], { force: true })
        })
        cy.get('#modal_to_settings').click()
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
    })
});