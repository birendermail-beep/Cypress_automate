/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10943
@story_name: Order (Choose) 
@path: final/6621
@test_case_name: Order (Choose).js
@description: 
@test_steps:
^Search Module
-click on search icon
-Type Order (Choose) 
-click on Order (Choose) 

^Open module
-click on Order (Choose) 

^Enter a Title and this Fiels is mendatory this field is never empty
-Click on the Title text box
-type new or update your title

^Add item
-click on the plus icon button for adding new item

^Add more than 6 item
-click on the plus icon button for adding new item
-If you add more than 6 Item there is appear one Warning Message As
-(Having more than 6 option may cause this item not to render properly on smartphone.)
-There is also genrate two button OK and SKIP after clicking on any button your item is added successfully
-But if you click on the SKIP Button then warning message will not appear again 
-and if you are click on the OK Button then it will genrate every time warning message when you add new item more than 6

^Update item data 
-click on the .pif item text box 
-and erase .pif and write new text as .html

^check and uncheck checkbox
-when you check or uncheck the checkbox it decide the correct answer if  checkbox is checked then it means answer is correct and if checkbox is unchecked it means it is not correct answer

^delete item by delete icon
-click on the delete icon which is show right side every item
-when you click on the delete icon there is appear one popup with confirmation message as (Do you really want to delete?)
-and there is also show two button on appear box button as NO and YES 
-when you click on the YES button your item is deleted
-otherwise you click on NO button your item is not deleted 

^Sequencing of the selected item is not required. Click to select items.
-click on the correct items only, selected items ordering is not required 

^Check paragraph
-Check Paragraph
-click on the correct items and set the sequencing order its 
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Order (Choose)").click({ force: true })
        })
    })

    /* Update the title. */
    it("give the title", function() {
        cy.get('#headingCorrect').type('{selectall}{backspace}{selectall}{backspace}New Title');
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('.choose_header').should('contain', 'New Title')
    });

    //** add one item and then more than 6 item it will show the warning message. */
    it("add Iitem", function() {
        cy.get("#add-item").click();
        cy.get("#add-item").click();
        cy.get('div').should('contain', 'More than 6 options may cause this item to not render properly on a smartphone.')
    });

    //** Update item data.checkForDisabled  */
    it("Update item data", function() {
        cy.get(':nth-child(1) > .col-md-12 > .height32').clear().type('.html')
    });

    //** check and uncheck checkbox. */
    it("check and uncheck checkbox", function() {
        cy.get(':nth-child(1) > .col-md-12').click()
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('li').contains('.doc/.docx').click({ force: true })
        cy.get('li').contains('.zip').click({ force: true })
        cy.get('li').contains('.txt').click({ force: true })
    });

    //** delete item by delete icon. */
    it("delete item by delete icon", function() {
        cy.get(':nth-child(5) > .col-md-12 > .remove-item').click({ force: true })
        cy.get('button > span').contains('No').click()
        cy.get(':nth-child(5) > .col-md-12 > .remove-item').click({ force: true })
        cy.wait(3000);
        cy.get('button > span').contains('Yes').click()
        cy.wait(3000);
        //cy.get(':nth-child(5) > .col-md-12 > .remove-item').should('not.be.visible')
    });

    /** Sequencing of the selected item is not required. */
    it("Sequencing of the selected item is not required.", function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get("#sortable > li").contains(".doc/.docx").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }).trigger('mousemove', { which: 1, pageX: 600, pageY: -2000 }).trigger("mouseup", { force: true })
        cy.get("#sortable > li").contains(".zip").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }).trigger('mousemove', { which: 1, pageX: 600, pageY: -600 }).trigger("mouseup", { force: true })
        cy.get("#sortable > li").contains(".txt").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }).trigger('mousemove', { which: 1, pageX: 600, pageY: -600 }).trigger("mouseup", { force: true })
        let doc = cy.get("#sortable > li").contains(".doc/.docx").find(".prefix").invoke("text")
        let zip = cy.get("#sortable > li").contains(".zip").find(".prefix").invoke("text")
        let txt = cy.get("#sortable > li").contains(".txt").find(".prefix").invoke("text")
        if (doc == 1 && zip == 2 && txt == 3) {
            cy.get('.MuiSnackbar-root-173').should('contain', 'Correct')
        }
    })

    /** Click to select Drag and Drop to set sequence. */
    it("Click to select. Drag and Drop to set sequence.", function() {
        cy.get('#isSentence').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('[optid="0"]').trigger("mousemove")
            .trigger("mouseup")
        cy.get('[optid="1"]').trigger("mouseleave")
    });

    /** Click to select Drag and Drop to set sequence. */
    it("Click to select. Drag and Drop to set sequence.", function() {
        cy.get('#isParagraph').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('[optid="0"]').trigger("mousemove")
            .trigger("mouseup")
        cy.get('[optid="1"]').trigger("mouseleave")
    });

    it("Click to select. Drag and Drop to set sequence.", function() {
        cy.get('#allowSort').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('[optid="0"]').trigger("mousemove")
            .trigger("mouseup")
        cy.get('[optid="1"]').trigger("mouseleave")
    });

    /** sequencing order its important. */
    it("sequencing order its important.", function() {
        cy.get('#allowSort').click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get("#sortable > li").contains(".doc/.docx").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }).trigger('mousemove', { which: 1, pageX: 600, pageY: -2000 }).trigger("mouseup", { force: true })
        cy.get("#sortable > li").contains(".zip").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }).trigger('mousemove', { which: 1, pageX: 600, pageY: -600 }).trigger("mouseup", { force: true })
        cy.get("#sortable > li").contains(".txt").trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }).trigger('mousemove', { which: 1, pageX: 600, pageY: -600 }).trigger("mouseup", { force: true })
        let doc = cy.get("#sortable > li").contains(".doc/.docx").find(".prefix").invoke("text")
        let zip = cy.get("#sortable > li").contains(".zip").find(".prefix").invoke("text")
        let txt = cy.get("#sortable > li").contains(".txt").find(".prefix").invoke("text")
        if (doc == 1 && zip == 2 && txt == 3) {
            cy.get('.MuiSnackbar-root-173').should('contain', 'Correct')
        }
    })
});