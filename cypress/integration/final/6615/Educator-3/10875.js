/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 
@story_name: Clone Using Section List
@path: final\6615
@test_case_name: Clone Using Section List.js
@description: n/a
@test_steps:
^Create new section using "Clone Using Section List" with same Start & End date setting;
-Select "Clone Using Section List" option;       
-Select Section Tag from the list;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level (same as Section to be cloned);    
-Select the check boxes to copy settings; 

^Create new section using "Clone Using Section List" with different Start & End date setting (Less no. of days);
-Select "Clone Using Section List" option;       
-Select Section Tag from the list;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level (different as Section to be cloned);    
-Select the check boxes to copy settings;

^Create new section using "Clone Using Section List" with different Start & End date setting (More no. of days);
-Select "Clone Using Section List" option;       
-Select Section Tag from the list;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level (different as Section to be cloned);    
-Select the check boxes to copy settings;

^Create new section using "Clone Using Section List" with different Start & End date setting (With Fixed Start & End Date);
-Select "Clone Using Section List" option;       
-Select Section Tag from the list;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level (different as Section to be cloned);    
-Select the check boxes to copy settings;

^Create new section using "Clone Using Section List" with all setting copied except 'Design';
-Select "Clone Using Section List" option;       
-Select Section Tag from the list;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level;    
-Select the all the check boxes to copy settings except 'Copy Design';

^Create new section using "Clone Using Section List" with all setting copied except 'Assignments Schedule';
-Select "Clone Using Section List" option;       
-Select Section Tag from the list;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level;    
-Select the all the check boxes to copy settings except 'Copy Assignments Schedule';

^Create new section using "Clone Using Section Key" with Section Key of same course & same instructor;
-Select "Clone Using Section Key" option;       
-Add the Section key of the section to be cloned (Section Key of same course & same instructor);      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level;    
-Select the all the check boxes to copy settings;

^Create new section using "Clone Using Section Key" with Section Key of same course & different instructor;
-Select "Clone Using Section Key" option;       
-Add the Section key of the section to be cloned (Section Key of same course & different) instructor;      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level;    
-Select the all the check boxes to copy settings;

^Create new section using "Clone Using Section Key" with Section Key of different course & same instructor;
-Select "Clone Using Section Key" option;       
-Add the Section key of the section to be cloned (Section Key of different course & same instructor);      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level;    
-Select the all the check boxes to copy settings;

^Create new section using "Clone Using Section Key" with Section Key of different course & different instructor;
-Select "Clone Using Section Key" option;       
-Add the Section key of the section to be cloned (Section Key of different course & different instructor);      
-Enter the new Section Tag, Class Name; 
-Select Start Date & End Date, Mastery Level;    
-Select the all the check boxes to copy settings;

@test_data: n/a
@result: Clone using section list with same start and end date
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.showTechManage();
        })
    })
    it('Clone using section list with same start and end date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(1)').click({ force: true })
        cy.get('.section_list_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-section_list-results > li:eq(1)').click({ force: true })
        cy.wait(3000)

        // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('150')
        cy.get('#mastery_level').clear().type('90')
    })
    it('Clone using section list with same start and end date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(1)').click({ force: true })
        cy.wait(2000)
        cy.get('.section_list_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-section_list-results > li:eq(1)').click({ force: true })
        cy.wait(3000)
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('90')
        cy.get('#mastery_level').clear().type('80')
    });
    it('Clone using section list for 180 days', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(1)').click({ force: true })
        cy.wait(2000)
        cy.get('.section_list_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-section_list-results > li:eq(1)').click({ force: true })
        cy.wait(3000)
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('180')
        cy.get('#mastery_level').clear().type('80')
    })
    it('Clone using section list with same start and end date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(1)').click({ force: true })
        cy.wait(2000)
        cy.get('.section_list_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-section_list-results > li:eq(1)').click({ force: true })
        cy.wait(3000)
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.table-condensed > tbody > :nth-child(1) > :nth-child(3)').click({ force: true })
        cy.get('#new_end_date').click()
        cy.get('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.wait(2000)
        cy.get('#mastery_level').clear().type('80')
    })
    it('Clone using section list with same start and end date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(1)').click({ force: true })
        cy.get('.section_list_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-section_list-results > li:eq(1)').click({ force: true })
        cy.wait(3000)
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('150')
        cy.get('#mastery_level').clear().type('90')
        cy.get('#setting_chkbox').uncheck()
    })
    it('Clone using section list with same start and end date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(1)').click({ force: true })
        cy.get('.section_list_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-section_list-results > li:eq(1)').click({ force: true })
        cy.wait(3000)
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo', { force: true })
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('150')
        cy.get('#mastery_level').clear().type('90')
        cy.get('#assessment_chkbox').uncheck()
    })
    it('Clone using section list with same start and end date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(2)').click({ force: true })
        cy.get('#section_key').clear().type('K-VZLL-EBVD-VXDW').blur()
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('150')
        cy.get('#mastery_level').clear().type('90')
        cy.get('#description_chkbox').check()
        cy.get('#setting_chkbox').check()
        cy.get('#welcome_chkbox').check()
        cy.get('#assessment_chkbox').check()
    })
})