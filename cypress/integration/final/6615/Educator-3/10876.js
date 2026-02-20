/*
@author: Anirudha Pratap
@master_project_id: 6615
@phase_id:
@story_id: 10876
@story_name: Create Section with Create New Section option
@path: final\6615
@test_case_name: Create Section with Create New Section option.js
@description: n/a
@test_steps:
^Go to Section List page
-Click on 'Manage' button

^Open 'New Section' modal box
-Click on 'Add a new section' button

^Create new section using "Create a New Section" option for Open enrollment with 90 days
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button

^Create new section using "Create a New Section" option for Open enrollment with 0 days
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section using "Create a New Section" option for Open enrollment with 500 days
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section using "Create a New Section" option for Fixed Start & End Date
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section using "Create a New Section" option with Mastery Level '50' (Fixed Start & End Date)
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section using "Create a New Section" option with Mastery Level '0' (Fixed Start & End Date)
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section using "Create a New Section" option with Mastery Level '100' (Fixed Start & End Date)
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section using "Create a New Section" option with Mastery Level '150' (Fixed Start & End Date)
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

^Create new section with same Section Tag & Class Name (Fixed Start & End Date)
-Enter a Section Tag & Class Name;       
-Select Start date & End date;              
-Select Mastery level;                       
-Click on 'Save & Manage' button;

@test_data: n/a
@result: Go to Section List page
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe('Instructor Area', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            InstructorPage.showManage();
        })
    })
    it('My library manage button add new section button', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click()
    })
    it('Create new section for 0% Mastery level', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })

        // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.table-condensed > tbody > :nth-child(1) > :nth-child(3)').click({ force: true })
        cy.get('#new_end_date').click()
        cy.get('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.get('#mastery_level').clear().type('0')
    })
    it('Create new section for 50% Mastery level', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.table-condensed > tbody > :nth-child(1) > :nth-child(3)').click({ force: true })
        cy.get('#new_end_date').click()
        cy.get('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.get('#mastery_level').clear().type('50')
    })
    it('Create new section for 100% Mastery level', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo')
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.table-condensed > tbody > :nth-child(1) > :nth-child(3)').click({ force: true })
        cy.get('#new_end_date').click()
        cy.get('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.get('#mastery_level').clear().type('100')
    })
    it('Create new section for same tag & class name', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })

        // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo', { force: true })
        cy.get('#new_class_name').type('demo')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#mastery_level').clear().type('80')
    })
    it('Create new section for 150% Mastery level', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo', { force: true })
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.table-condensed > tbody > :nth-child(1) > :nth-child(3)').click({ force: true })
        cy.get('#new_end_date').click()
        cy.get('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.get('#mastery_level').clear().type('150')
    })
    it('Create new section for 500 days', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo', { force: true })
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.extra_option > .hideit').click({ force: true })
        cy.wait(2000)
        cy.get('#ends_duration').clear().type('90')
        cy.get('#mastery_level').clear().type('80')
    })
    it('Create new section for fixed date', function() {
        cy.get(':nth-child(4) > [data-cy=create_section]').click({ force: true })
        cy.get('.clone_div > .select2-container > .selection > .select2-selection').click({ force: true })
        cy.get('#select2-clone_configuration-results li:eq(0)').click({ force: true })
            // Make sure Tag & Class name should be unique every time.
        cy.get('#class_tag').type('demo', { force: true })
        cy.get('#new_class_name').type('demo-class')
        cy.get('#new_start_date').click()
        cy.get('.table-condensed > tbody > :nth-child(1) > :nth-child(3)').click({ force: true })
        cy.get('#new_end_date').click()
        cy.get('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > :nth-child(5) > :nth-child(4)').click({ force: true })
        cy.get('#mastery_level').clear().type('80')
    })
});