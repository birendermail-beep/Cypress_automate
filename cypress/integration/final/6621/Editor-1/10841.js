/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 10841
@story_name: Draw and highlight on a background image
@path: final/6621
@test_case_name: Draw and highlight on a background image.js
@description: n/a
@test_steps: 
^Open the module
-login to page
-visit the editor dashboard
-Search Draw/highlight background on a image.
-Open the Draw/highlight background on a image module

^Reset
-login to page
-visit the editor dashboard
-Search Draw/highlight background on a image.
-Open the Draw/highlight background on a image module
-Click on the reset button
-It will delete the default draw available on the image

^Upload image
-login to page
-visit the editor dashboard
-Search Draw/highlight background on a image.
-Open the Draw/highlight background on a image module
-Click on the pencil icon
-A dialog box appears
-Click Upload Media
-Go to the Gallery tab
-Select the image and click on 3 dots
-Select Use Media
-Select the draw color
-Click Submit
-or 
-Click on the pencil icon of image
-A dialog box appears
-Click Upload Media
-Click Upload Files
-Select the image which you want to upload
-Give short description and tags
-Click Upload details
-Select the draw color
-Click Submit

^Mark the correct answer
-login to page
-visit the editor dashboard
-Search Draw/highlight background on a image.
-Open the Draw/highlight background on a image module
-Draw on the area which you want to mark as correct answer.
-Go to the review area, mark the correct answer by drawing on the correct area
-Click on the review button, it should show correct

@test_data: n/a
@result: Module will open
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('.grid-item').contains("Draw/highlight on a background image").click({ force: true })
        })
    })

    //** Reset items */
    it('11.2 Reset ', function() {
        cy.wait(5000)
        cy.get('#reset').click()
    })

    //** upload image*/
    it('11.3 change image ', function() {
        cy.get('#hptdraw > .btn-group > .btn').click()
        cy.wait(2000);
        cy.get('#upload_media').click()
        cy.wait(2000);
        cy.get('#tab2').click();
        cy.get(':nth-child(2) > .relative > .px-2 > .px-0').click();
        cy.get(':nth-child(2) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click();
        cy.wait(2000);
        cy.get('.bg-primary').click()
    })
})