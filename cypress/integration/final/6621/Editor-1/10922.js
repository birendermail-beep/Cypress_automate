/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id:
@story_id: 10922
@story_name: Label an Image (with text)
@path: final/6621
@test_case_name: Label an Image (with text)
@description : na
@test_steps:
^Open the module
-Go to the URL : https://www.ucertify.com/editor/?action=new. 
-Search Label an Image (with text).
-Open the Label an Image (with text) module

^Upload image
-Click on the pencil icon
-A dialog box appears
-Click Upload Media
-Go to the Gallery tab
-Select the image and click on 3 dots
-Select Use Media
-Click Save
-or 
-Click on the pencil icon of image
-A dialog box appears
-Click Upload Media
-Click Upload Files
-Select the image which you want to upload
-Give short description and tags
-Click Upload details
-Click Save

^Adding text box
-Right click on the image area, navigate to Input > select Input Box
-Edit the fields accordingly
-In the correct answer text box, give the correct answer
-Click OK

^Checking answer
-Go to the preview answer, give the correct answer in the text box
-It should show correct message

^Click on edit icon 
-If you want to edit the fields, click on the edit icon given on the elements.
-Dialog box will appear, edit the feilds accordingly, Click OK.

^Delete text box
-Click on the delete icon given in the text box
-A confirmation prompt will appear, click OK

^Adjust the position of text box
-You can also drag to adjust the position of the text box.

@test_data: n/a
@result: Correct message
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('editor area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Label an image (add text)").click({ force: true })
        })
    })

    /** Upload image. */
    it("Upload image", function() {
        cy.get('.mr-1 > .btn').click()
        cy.get('#upload_media').click()
        cy.get('#tab2').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click()
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click()
        cy.get('#authoring-modal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    });

    /** Adding text box. */
    it("Adding text box", function() {
        cy.get('#dndmain > img').click()
        cy.wait(3000);
        cy.get('#dndmain > img').rightclick({ force: true })
        cy.wait(2000);
        cy.get('ul li span').contains('Input').click({ force: true })
        cy.get('ul li span').contains('Input Box').click({ force: true })
        cy.get('#int-width').click().clear().type('70')
        cy.get('#int-height').clear().type('50')
        cy.get('#int-top').clear().type('200')
        cy.get('#int-left').clear().type('300')
        cy.get('#int-correctans').type('Correct answer')
        cy.get('button').contains('OK').click()
    });

    /** Checking answer. */
    it("Checking answer", function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('.dndID10').type('Standerd-ATX')
        cy.get('.dndID11').type('Micro-ATX')
        cy.get('.dndID12').type('Mini-ITX')
        cy.get('.dndID13').type('Nano-ITX')
        cy.get('.dndID14').type('Pico-ITX')
        cy.contains('correct');
    });

    /** Click on edit icon. */
    it("Click on edit icon ", function() {
        cy.wait(2000);
        cy.get('#ID10').click({ force: true })
        cy.wait(2000);
        cy.get('#ID10 > div > .btn > .icomoon-24px-edit-1').click({ force: true })
        cy.get('#int-width').click().clear().type('70')
        cy.get('#int-height').clear().type('50')
        cy.get('#int-top').clear().type('90')
        cy.get('#int-left').clear().type('100')
        cy.get('button').contains('OK')
    });

    /** Delete text box. */
    it("Delete text box ", function() {

        cy.get('#dndmain > img').click()
        cy.get('#ID10').click({ force: true })
        cy.get('#ID10 > div > .btn > .icomoon-new-24px-delete-1').click({ force: true })
    });
});