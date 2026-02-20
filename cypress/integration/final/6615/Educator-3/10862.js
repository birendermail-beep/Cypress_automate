/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10862
@story_name: Create Assessment
@path: final\6615
@test_case_name: Create Assessment
@description: n/a
@test_steps:
^Assessment tab/ Create New Assessment/ My selection
-Visit to website.
-Login into website.
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 60 mins;         
-Passing score as '80 percent';           
-Feedback as 'Result & Items review available';        
-Click Settings button and select Randomize Items & Answer option;       
-Add Instructions;      
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Auto selection-Lesson
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select Auto Selection - Lesson;       
-Select Time duration as 60 mins;         
-Passing score as '80 percent';           
-Feedback as 'Result & Items review available';        
-Click Settings button and select Randomize Items & Answer option;       
-Add Instructions;      
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Auto selection - Objective
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select Auto Selection - Objective;       
-Select Time duration as 60 mins;         
-Passing score as '80 percent';           
-Feedback as 'Result & Items review available';        
-Click Settings button and select Randomize Items & Answer option
-Add Instructions;
-Select the required questions;
-Click Save button; 

^Assessment tab/ Create New Assessment/ Time duration
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection ;       
-Select Time duration as 0 mins;         
-Passing score as '80 percent';       
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Passing score
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;         
-Passing score as '0 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Click Save button;

^Assessment tab/ Create New Assessment/ Feedback- Result & Items review available
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select Auto Selection - Lesson;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Feedback- Only Result available
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select Auto Selection - Lesson;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Only Result available';        
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Feedback- Result & Items review unavailable
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select Auto Selection - Lesson;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review unavailable';        
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Feedback- Review available during the test
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select Auto Selection - Lesson;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Review available during the test';        
-Select the required questions;      
-Click Save button; 

^Assessment tab/ Create New Assessment/ Not Randomize Items & Randomize Options
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;     
-Uncheck Randomize Items & Check Randomize Options;       
-Click Save button; 

^Assessment tab/ Create New Assessment/ Randomize few Items & Randomize Options
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;        
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Select Randomize Items & Check Randomize Options;       
-Click Save button; 

^Assessment tab/ Create New Assessment/ Randomize Items & not Randomize Options
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Check Randomize Items & Uncheck Randomize Options;       
-Click Save button; 

^Assessment tab/ Create New Assessment/ Not Randomize Items & not Randomize Options
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Uncheck Randomize Items & Uncheck Randomize Options;       
-Click Save button; 

^Assessment tab/ Create New Assessment/ Randomize Items & Randomize Options
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Uncheck Randomize Items & Check Randomize Options;       
-Click Save button; 

^Assessment tab/ Create New Assessment/ Last option as 'None of the above'
-Click on Assessment tab;        
-Click on 'Create New Assessment' button;            
-Give a name to assessment & Select My Selection;       
-Select Time duration as 120 mins;         
-Passing score as '70 percent';           
-Feedback as 'Result & Items review available';        
-Select the required questions;      
-Check Randomize Items & Check Randomize Options;       
-Check 'Last option as None of the above';        
-Click Save button; 

^Assessment tab/ Create New Assessment/ Grid view of question
-Click on Create new assessment;       
-Click on Grid view; 

^Assessment tab/ Create New Assessment/ List view of question
-Click on Create new assessment;       
-Click on List view; 

^Assessment tab/ Create New Assessment/ Search bar
-Click on Create new assessment;       
-Type in the required keyword in the Search bar; 

^Assessment tab/ Create New Assessment/ Lesson filter
-Click on Create new assessment;       
-Select the Lesson name from the Lesson filter

^Assessment tab/ Create New Assessment/ Your Action filter
-Click on Create new assessment;       
-Select the Action from the Your Action filter

^Assessment tab/ Create New Assessment/ All Type filter
-Click on Create new assessment;       
-Select the Type from the All Type filter

^Assessment tab/ Create New Assessment/ Components filter
-Click on Create new assessment;       
-Select the Component from where questions needs to be added

^Assessment tab/ Create New Assessment/ Cancel button
-Open the required assessment;        
-Click on Cancel button to close it

^Assessment tab/ Create New Assessment/ Save As button
-Open the Assessment to be copied;        
-Click on Save As button;       
-Give a new name to the required assessment;     
-Click on Create a Copy button;

@test_data: n/a
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
    it('1.11.1.1 Assessment tab/ Create New Assessment/ My selection', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testing', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('60', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('80', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('.pt-3 > .btn').click()
        cy.get('#randomize_items').click()
        cy.get('#description').clear({ force: true }).type('Time Limit Is 60 Mins', { force: true })
            // cy.get('.d-lg-block > :nth-child(2) > .btn').click()
        cy.get('#assess_setup_modal > .modal-dialog > .modal-content > .modal-header > .close').click();
        cy.get('#chapterName').click();
        cy.get('#chapter_list > :nth-child(4) > .dropdown-item').click()
        cy.get('.mysel_view_style > .btn').click({ force: true })
        cy.get('#save_assessment > .toolbar-label').click({ force: true })
        cy.get('#btn-cancelled').click()
    })
    it('1.11.1.2 Assessment tab/ Create New Assessment Auto selection-Lesson', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testing', { force: true })
        cy.get('#item_selection').select('Auto Selection - Lesson', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('60', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('80', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.wait(3000);
        cy.get('.pt-3 > .btn').click()
        cy.wait(3000);
        cy.get('#randomize_items').click()
        cy.get('#description').clear({ force: true }).type('Time Limit Is 60 Mins', { force: true })
        cy.get('#assess_setup_modal > .modal-dialog > .modal-content > .modal-header > .close').click();
    })
    it('1.11.1.3 Assessment tab/ Create New Assessment Auto selection - Objective', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testing', { force: true })
        cy.get('#item_selection').select('Auto Selection - Lesson', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('60', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('80', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
            // cy.get('.icomoon-new-24px-gear-1').click()
        cy.wait(5000);
        cy.get('.pt-3 > .btn').click()
        cy.wait(5000);
        cy.get('#randomize_items').click()
        cy.get('#description').clear({ force: true }).type('Time limit is 60 mins', { force: true })
        cy.get('#assess_setup_modal > .modal-dialog > .modal-content > .modal-header > .close').click();
    })
    it('1.11.2.1 Assessment tab/ Create New Assessment/ Time duration1', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testing', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('0', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('80', { force: true })
        cy.get('#test_mode_item').select('Remediation during test', { force: true })
    })
    it('1.11.2.2 Assessment tab/ Create New Assessment/ Time duration', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testing', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#untimed_test').click()
        cy.get('#passing_score').clear({ force: true }).type('80', { force: true })
        cy.get('#test_mode_item').select('No result or feedback', { force: true })
    })
    it('1.11.2.3 Assessment tab/ Create New Assessment/ Passing score', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testing', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('0', { force: true })
        cy.get('#test_mode_item').select('Result only', { force: true })
    })
    it('1.11.3.1 Assessment tab/ Create New Assessment/ Feedback- Result & Items review available', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew', { force: true })
        cy.get('#item_selection').select('Auto Selection - Lesson', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
    })
    it('1.11.3.2 Assessment tab/ Create New Assessment/ Feedback-  Only result available', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew', { force: true })
        cy.get('#item_selection').select('Auto Selection - Lesson', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result only', { force: true })
    })
    it('1.11.3.3 Assessment tab/ Create New Assessment/ Feedback- Result & Items review unavailable', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew', { force: true })
        cy.get('#item_selection').select('Auto Selection - Lesson', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('#item037F4').clear({ force: true }).type('14', { force: true })
    })
    it('1.11.3.4 Assessment tab/ Create New Assessment/ Feedback- Review available during the test', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew', { force: true })
        cy.get('#item_selection').select('Auto Selection - Lesson', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Remediation during test', { force: true })
        cy.get('#item037F4').clear({ force: true }).type('24', { force: true })
        cy.get('#item037F5').clear({ force: true }).type('14', { force: true })
        cy.get('#save_assessment').click({ force: true })
    })
    it('1.11.4.1 Assessment tab/ Create New Assessment/ Not Randomize Items & Randomize Options', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew11', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('.pt-3 > .btn').click()
        cy.get('#description').clear({ force: true }).type('Time limit is 60 mins', { force: true })
        cy.get('#assess_setup_modal > .modal-dialog > .modal-content > .modal-header > .close').click();
        cy.get('#save_assessment').click({ force: true })
    }); 
    it('1.11.4.2 Assessment tab/ Create New Assessment/ Randomize few Items & Randomize Options', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew11', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('.pt-3 > .btn').click()
        cy.get('#randomize_items').click({ force: true })
        cy.get('#description').clear({ force: true }).type('Time limit is 60 mins', { force: true }).blur()
        cy.get('#assess_setup_modal > .modal-dialog > .modal-content > .modal-header > .close').click();
        cy.get('#save_assessment').click({ force: true })
        // cy.get('[data-cy=yesbutton]').click()
    })
    it('1.11.4.6 Assessment tab/ Create New Assessment/ Last option as None of the above', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew11', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('.pt-3 > .btn').click()
        cy.get('#randomize_items').click({ force: true })
        cy.get('#is_none_of_the_above').click({ force: true })
        cy.get('#description').clear({ force: true }).type('Time limit is 60 mins', { force: true })
        cy.get('#assess_setup_modal > .modal-dialog > .modal-content > .modal-header > .close').click();
        cy.get('#save_assessment').click({ force: true })
        // cy.get('[data-cy=yesbutton]').click()
    })
    it('1.11.5.1 Assessment tab/ Create New Assessment/ Grid view of question', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew11', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
    })
    it('1.11.5.2 Assessment tab/ Create New Assessment/ List view of question', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew11', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('.mysel_view_style > .btn').click()
    })
    it('1.11.5.3 Assessment tab/ Create New Assessment/ Search bar', function() {
        cy.get('#new').click()
        cy.get('#student_assignment_name').clear({ force: true }).type('testingNew11', { force: true })
        cy.get('#item_selection').select('My Selection', { force: true })
        cy.get('#total_time_allowed').clear({ force: true }).type('120', { force: true })
        cy.get('#passing_score').clear({ force: true }).type('70', { force: true })
        cy.get('#test_mode_item').select('Result & remediation', { force: true })
        cy.get('.icon-white').click({ force: true })
        cy.get('#search_box').clear({ force: true }).type('test', { force: true })
        // cy.get('#search_text > .icomoon-search-3').click({ force: true })
    })
    it('1.11.5.4 Assessment tab/ Create New Assessment/ Lab filter', function() {
        cy.get('#new').click()
        cy.get('.icon-white').click({ force: true })
        // cy.get('.d-lg-block > :nth-child(2) > .btn').click({ force: true })
        cy.get('#filter > .btn-group > [filter="lb"]').dblclick({ force: true })
        cy.get('[filter="ex"]').click();
        cy.get('[filter="ts"]').click();
        cy.get('#filter > .btn-group > [filter="u"]').click();
    })
    it('1.11.5.5 Assessment tab/ Create New Assessment/ Excersice filter', function() {
        cy.get('#new').click()
        cy.get('.icon-white').click({ force: true })
        cy.get('#filter > .btn-group > [filter="lb"]').click({ force: true })
        cy.get('[filter="ex"]').dblclick();
        cy.get('[filter="ts"]').click();
        cy.get('#filter > .btn-group > [filter="u"]').click();
    })
    it('1.11.5.6 Assessment tab/ Create New Assessment/ test filter', function() {
        cy.get('#new').click()
        cy.get('.icon-white').click({ force: true })
        cy.get('#filter > .btn-group > [filter="lb"]').click({ force: true })
        cy.get('[filter="ex"]').click();
        cy.get('[filter="ts"]').dblclick();
        cy.get('#filter > .btn-group > [filter="u"]').click();
    })
    it('1.11.5.7 Assessment tab/ Create New Assessment/ Quiz filter', function() {
        cy.get('#new').click()
        cy.get('.icon-white').dblclick({ force: true })
        cy.get('#filter > .btn-group > [filter="lb"]').click({ force: true })
        cy.get('[filter="ex"]').click();
        cy.get('[filter="ts"]').click();
        cy.get('#filter > .btn-group > [filter="u"]').dblclick();
    })
    it('1.11.6.1 Assessment tab/ Create New Assessment/ Cancel button', function() {
        cy.get('#new').click()
        cy.get('.toolbar-label.d-none.d-md-inline-block').eq(0).click()
    })
    it('1.11.6.2 Assessment tab/ Create New Assessment/ Save As button', function() {
        cy.get('[data-cy=action_assignment_btn]').eq(0).click({ force: true })
        cy.get('[data-cy=action_modify_btn]').eq(0).click({ force: true })
        cy.get('#student_assignment_name').clear({ force: true }).type('abcEdited', { force: true })
        cy.get('#save_as_assessment > .toolbar-label').click({ force: true })
        cy.get('#assessment_name').clear({ force: true }).type('lession', { force: true })
        cy.get('.btn-primary').click({ force: true })
    })
})