/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: n/a
@story_id: 10928
@story_name: Long text answer (with basic formatting)
@path: final/6621
@test_case_name: Long text answer (with basic formatting)
@description:
@test_steps: 
^open module
-click on search icon
-Type long text answer (with basic formatting)
-click on long text answer (with basic formatting)

^Write text
-Write text in the formatting area

^change the size of text
-First visit on given url then click on given image then Go to the authoring area.
-write some text on editor .
-select the full text or part of text to increase or decrease the size of font.
-click on 'F' dropdown button.
-select the desire size from list.
-if we have not selected the text then after click on 'F' dropdown button and selecting desire font then if we type the text then it will be of that size.

^make the text bold
-Go to the authoring area.
-write some text on editor .
-select the full text or part of text to make or unmake the text bold.
-click on 'B' button for make the text as bold.
-if we have not selected the text then after click on 'B' button if we type the text then it will be bold.
-again click the 'B' button to make the text as normal as it was before.

^make the text Italic
-Go to the authoring area.
-write some text on editor .
-select the full text or part of text to make or unmake the text italic.
-click on 'I' button for make the text as italic.
-if we have not selected the text then after click on 'I' button if we type the text then it will be italic.
-again click the 'I' button to make the text as normal as it was before.

^make the text underline
-Go to the authoring area.
-write some text on editor .
-select the full text or part of text to make or unmake the text underline.
-click on 'U' button for make the text as underline.
-if we have not selected the text then after click on 'U' button if we type the text then it will be underline.
-again click the 'U' button to make the text as normal as it was before."

^Reduce indent and Produce indent
-Go to the authoring area.
-write some text on editor .
-provide the indent from left by clicking the Indent button.
-click on 'Reduce Indent' button for reduce the indent.
-if we have not provide the indent then Reduce indent button will not work.

^Add bullet or number list
-Go to the authoring area.
-write some text on editor .
-to generate number list click on number list button.
-to generate bullet list click on bullet list button.
-we can also click on given list button for generate list before writting some text.

^To make any text as hyper link
-Go to the authoring area.
-write some text on editor .
-to make any text as hyperlink first select the text which you want to make as hyperlink.
-click on Hyperlink button .
-write the address where you want to move when hypertext is clicked inside text box.
-click on add button to add.

^Upload checkbox
-Check the upload checkbox
-Select the file format and number of files to be uploaded
-In the preview area, message should come accordingly (like if you have selected pdf and number of files 2, then the message should be Upload *.pdf files and only upload 2 files.
-In the preview area, click Browse, upload files of selected file format, the files should be uploaded"

@test_data: n/a
@result: fill in the blank drag and drop area
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Linux terminal", function() {
    it("open module", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.icomoon-essay').click({ force: true })
        })
        cy.get('#essay_editor').type('this is sample text{selectall}');
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(1) > .essay-btn').click();
        // font size - heading 3
        cy.get('.btn-group.show > .dropdown-menu > :nth-child(4) > .cmn-essay').click();
        cy.wait(2000);
        cy.get('#essay_editor > font').should('exist');
        //text bold
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(2) > [data-edit="bold"]').click();
        cy.wait(2000);
        cy.get('#essay_editor > font > b').should('exist');
        //text Italic
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(2) > [data-edit="italic"]').click();
        cy.wait(2000);
        cy.get('#essay_editor >font > b > i').should('exist');
        //text underline
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(2) > [data-edit="underline"]').click();
        cy.wait(2000);
        cy.get('#essay_editor >font > b > i > u').should('exist');
        //produce indent
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(4) > [data-edit="indent"]').click();
        cy.wait(2000);
        cy.get('#essay_editor > blockquote >font > b > i > u').should('exist');
        //reduce indent
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(4) > [data-edit="outdent"]').click();
        cy.wait(2000);
        cy.get('#essay_editor >font > b > i > u').click();
        //add bullet
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(4) > [data-edit="insertunorderedlist"]').click();
        cy.wait(2000);
        cy.get('#essay_editor > ul > li > font > b > i > u').should('exist');
        //add number list
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(4) > [data-edit="insertorderedlist"]').click();
        cy.wait(2000);
        cy.get('#essay_editor > ol > li > b > i > u').should('exist');
        //add hyperlink
        cy.get('#SM_essay > .hero-unit > .btn-toolbar > :nth-child(3) > .essay-btn').click();
        cy.get('.btn-group.show > .dropdown-menu > .form-control').clear().type('http://sampletext.com');
        cy.get('.btn-group.show > .dropdown-menu > .essay-btn-add').click();
        cy.get('#essay_editor > ol > li > b > i > u > a').should('exist');
        //upload option
        cy.get('#uploadChk').click();
        cy.get('#files_number').should('have.length',1);
    });
})