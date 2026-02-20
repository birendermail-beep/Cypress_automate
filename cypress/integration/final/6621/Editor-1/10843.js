/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10291
@story_id: 10843
@story_name: Email Template
@path: final/6621
@test_case_name: Email Template
@description: n/a
@test_steps: 
^Add new email template when course is loaded
-visit the website
-login to page
-visit the editor dashboard
-Open admin email page.
-click on add new.
-select template type of email.
-Do not fill title and fill message 
-click on save button.

^Add new email template when course is loaded
-visit the website
-login to page
-visit the editor dashboard
-open Admin email page.
-click on add new.
-Select template type of email client.
-Add title and message.
-click on save button.

@test_data: n/a
@result: Guid will show on editor and after close editor template list will updated.
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('Admin', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })
    it('Email Templates Page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin');
        });
        cy.get('[data-cy=other_tab]').click({ force: true });
        cy.get(':nth-child(5) > :nth-child(3) > [data-cy=other_start]').click({ force: true });
    })
    it('Add new email template with Title & Message', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_message.php");
            cy.get('#add_new_template').click()
            cy.get('#email_category_add').select('1', { force: true })
            cy.get('#next').click()
            cy.wait(2000)
            cy.visit(data.url + '/editor/?content_icon=0&content_type=e&content_subtype=1&action=new')
            cy.wait(5000)
            cy.get('#title').type('Automation Testing')
            cy.get('#message').type('Hello, This is testing message')
            cy.get('#save_xml').click({ force: true })
            cy.wait(3000)
            cy.get('#approve').click({ force: true })
        })
    })
    it('Add new email template without filling Title & Message', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/admin_message.php");
            cy.get('#add_new_template').click()
            cy.get('#email_category_add').select('1', { force: true })
            cy.get('#next').click()
            cy.wait(2000)
            cy.visit(data.url + '/editor/?content_icon=0&content_type=e&content_subtype=1&action=new')
            cy.wait(5000)
            cy.get('#title').clear()
            cy.get('#message').clear()
            cy.get('#save_xml').click({ force: true })
            cy.get('#approve').click({ force: true })
        })
    })
})