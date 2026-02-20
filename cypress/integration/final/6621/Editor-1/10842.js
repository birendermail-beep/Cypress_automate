/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10537, 10858
@story_id: 10842
@story_name: Drawing
@path: final/6621
@test_case_name: Drawing.js
@description: n/a
@test_steps: 
^Check XML
-login to page
-visit the editor dashboard
-Add the point and check the point is added into XML
-Add the focus point and the point will be add in XML

^Change the authoring section and seeing the changes in preview section
-login to page
-visit the editor dashboard
-Perform the action like add point or add focus point 

^Checking the  correct answer 1
-login to page
-visit the editor dashboard
-go to the Drawing Module
-Create XML and Save XML
-Use tools for drawing
-Use undo and redo and erasor tool
-By creating question check the answer is coming correct by performing it correct.

^Checking the  incorrect answer 1
-login to page
-visit the editor dashboard
-Go to the Drawing Module
-Create XML and Save XML
-Use tools for drawing
-Use undo and redo and erasor tool
-By creating question check the answer is coming incorrect by performing it incorrect.

^Checking the  incorrect answer 2
-login to page
-visit the editor dashboard
-Go to the Drawing Module
-Use tools and keyevents for drawing
-Check the answer by performing incorrect.

^Checking the  correct answer 2
-login to page
-visit the editor dashboard
-Go to the Drawing Module
-Use tools and key events for drawing
-Check the answer by performing correct.

@test_data: n/a
@result: open the drawing module
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe('ebook area testing', function () {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
            cy.get('[data-subtype="41"]').click({ force: true })
        })
    })

    //** check Xml */
    it('Check XML', function () {
        cy.get('#focus_point').click();
        cy.get('#authoringSvg').click(116.84721374511719, 41.36573791503906);
        cy.get('#authoringSvg').click(71.84721374511719, 119.36573791503906);
        cy.get('#authoringSvg').click(237.8472137451172, 140.36573791503906);
        cy.get('#focus_point').click();
        cy.get('#icon_menu').click();
        cy.get('#xml').click()
        cy.wait(2000);
        cy.get('#xmlDone').click()
    })
    //preview Section
    it('Change the authoring section and seeing the changes in preview section', function () {
        cy.get('#focus_point').click();
        cy.get('#authoringSvg').click(116.84721374511719, 41.36573791503906);
        cy.get('#authoringSvg').click(71.84721374511719, 119.36573791503906);
        cy.get('#authoringSvg').click(237.8472137451172, 140.36573791503906);
        cy.get('#focus_point').click();
        cy.get('#edi_tabs > :nth-child(2) > a').click()
    })
    //correct and incorrect
    it('Change the authoring section and seeing the changes in preview section', function () {
        cy.get('#authoring_point').click()
        cy.get('#focus_point').click()
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.contains('Review').click({ force: true })
    })
})