/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Add Item
@path: final/Create
@test_case_name: Add Item.js
@description: 
@test_steps: 
^Testing "Item Bank" Options
1. Click on "My Library" after logging in your account
2. Click on "My Projects" tab given in tab bar.
3. Click on "Author" button of specified project.
4. Click On "Item Bank"
5. Click on "Add Item" dropdown.
6. Click on "Add Item" Link

^Testing "Item Bank" Options
1. Follow steps 1 to 6 as given in test case no. 37.
2. Click on multiple choice thumbnail.
3. Click on Stem dark circle plus icon given in authoring section of page.
4. Click on Text link on appeared modal .
5. Click on Paragraph link
6. Then write your desired question on input field which contains value "Place Your Text Here"
7. Click on Optin no. A or B or so on.
8. Check checkbox having right answer for the question.
9. Change option text to your desired text

@test_data: n/a

@result: A page with multiple options thumbnail like multiple choice, label an image etc. should be appear.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Item Bank Open', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            CreateArea.openLibrary()
            CreateArea.myProject()
        });
        cy.get(':nth-child(2) > .dashboard_item > h3').click({force:true})
        cy.wait(5000)
        cy.get('[onclick="add_part(event); return false;"] > .icomoon-new-24px-add-circle-1').click({force:true});
        cy.wait(5000);
        cy.get('#add_contents_modal > .modal-dialog > .modal-content > #add_contents_body > :nth-child(2) > .col-md-9 > #content_title').type('test');
        cy.get('#add_contents_modal > .modal-dialog > .modal-content > .modal-footer > .content_log_btn > .save_content').click();
        cy.get('[data-cy=errormsg]').should('exist');
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/editor/?action=new&in_frame=1&no_header=1&from_educator=1&add_coverage=1&show_add_new_button=1&goback=1&author_area=1&from_myproject=1')
        })
        cy.get('.multiple_choice').click().then(() => {
            cy.get('.settings_themes').should('exist').and('be.visible');
        })
        cy.wait(2000)
        cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add').eq(0).click().then(() => {
            cy.wait(4000)
            cy.get('#text').click().then(() => {
                cy.wait(2000)
                cy.get('#Paragraph').click()
            })
        })
        cy.wait(2000)
        cy.get('#title').clear().type('uCertify Offices in')
        cy.get('.answer_container > .option > .float-right > i').eq(0).click().then(() => {
            cy.get(':nth-child(1) > #user_answer').children().its('length').should('eq', 3);
        });
        cy.get('.answer_container > .option > .float-right > i').eq(0).click().then(() => {
            cy.get(':nth-child(1) > #user_answer').children().its('length').should('eq', 2);
        });
        cy.get('#option0').clear().type('Noida')
        cy.get('#option1').clear().type('Allahabad')
        cy.get('#userans-B').click()
    })
})