/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: Bug id: 558850 
@story_id: 
@story_name: Item Bank
@path: final/Create
@test_case_name: Item Bank.js
@description: 
@test_steps: 
^Testing "Item Bank" options
-Follow Steps 1 to 4 as given in test case no. 45
-Click on sub collapsible that are on the name of lesson name under Lessons collapsible

^Using this we can add existing item in course.
-Firstly we need to go to "My Library".
-Then click on "My Projects".
-Click on "Author> Item Bank ".
-Then click top right "Add existing Item", then search a guid.
-Finally, show the content and click click on "Table > Action > Add".

@test_data: n/a
@result: Should only collapse contents under Lesson name Accordian.
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('Create Area', () => {
    it('Item Bank Open and Existing Item Add', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            CreateArea.openLibrary()
            CreateArea.myProject()
            CreateArea.itemBank()
            CreateArea.additem()
            cy.wait(3000);
            cy.contains('Remove').click()
            cy.get('#delete_nested_content').click()
        })
    })
})