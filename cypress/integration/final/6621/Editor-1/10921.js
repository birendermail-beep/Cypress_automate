/*
@author: Vikas Shukla
@master_project_id: 6621
@phase_id: 
@story_id: 10921 
@story_name: Label an Image (with drop downs)
@area: Editor
@Test_Case_Name: label_an_image_with_drop_downs.js
@description: 
@test_steps: 
^Test case of Label an Image (drop downs) for Upload image in editor area.
- login to page
- visit the editor dashboard 
- Click on the pencil icon
- A dialog box appears
- Click Upload Media
- Go to the Gallery tab
- Select the image and click on 3 dots
- Select Use Media
- Click Save
^Test case of Label an Image (drop downs) for Adding text box in editor area.
- login to page
- visit the editor dashboard
- Right click on the image area, navigate to Select > select Select Dropdown
- Edit the fields accordingly
- In the options text box, give the options (every option should be in new line and in correct answer use * before that option) 
- Click OK
^Test case of Label an Image (drop downs) for Checking answer in editor area.
- login to page
- visit the editor dashboard
- Go to the preview answer, select the correct answer in the select box
- It should show correct message
^Test case of Label an Image (drop downs) for edit icon in editor area.
- login to page
- visit the editor dashboard
- If you want to edit the fields, click on the edit icon given on the elements.
-  Dialog box will appear, edit the feilds accordingly, Click OK.
^Test case of Label an Image (drop downs) for Delete select box in editor area.
- login to page
- visit the editor dashboard
- Click on the delete icon given in the select box
- A confirmation prompt will appear, click OK
@test_data: n/a
@result: open all tabs and export of educator page
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Label an image (with drop downs)").click({force: true})
        })
    })
    
     /** Upload image. */
    it("Upload image", function() {
        cy.get('.mr-1 > .btn').click()
        cy.wait(5000);
        cy.get('#upload_media').click({force:true})
        cy.wait(3000);
        cy.get('#tab2').click()
        cy.wait(5000)
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click()
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click()
        cy.get('.addElement').click()
    });

    /** Adding text box. */
    it("Adding text box", function() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Select').click()
        cy.get('.context-menu-visible > .context-menu-list > :nth-child(1)').click()
        cy.get('#ddn-width').clear().type('{selectall}{backspace}80')
        cy.get('#ddn-height').clear().type('50')
        cy.get('#ddn-top').clear().type('150')
        cy.get('#ddn-left').clear().type('150')
        cy.get('#ddn-value').type('TCP {enter}*HTTP{enter}HTTP')
        cy.get('button').contains('OK').click()
    });

    /** Checking answer. */
    it("Checking answer", function() {
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.get('.dndID0').select('Standerd-ATX')
        cy.get('.dndID1').select('Micro-ATX')
        cy.get('.dndID2').select('Mini-ITX')
        cy.get('.dndID3').select('Nano-ITX')
        cy.get('.dndID4').select('Pico-ITX')
        cy.contains('correct');
    });
  
    /** Click on edit icon. */
    it("Click on edit icon ", function() {
        cy.get('#ID0').click()
        cy.get('#ID0 > .btn-group > button > .icomoon-24px-edit-1').click()
        cy.wait(2000);
        cy.get('#ddn-width').click().clear().type('200')
        cy.get('#ddn-height').clear().type('50')
        cy.get('#ddn-left').clear().type('100')
        cy.get('button').contains('OK')
    });

    /** Delete select box. */
    it("Delete select box", function() {
        cy.get('#ID0').click()
        cy.get('#ID0 > .btn-group > button > .icomoon-new-24px-delete-1').click()
    });
});    