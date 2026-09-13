/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10723, 10858, 10974
@story_id: 11007
@story_name: TreeView
@path: final/6621
@test_case_name: TreeView.js
@test_steps:
^Create question
-Write intro/question text in intro section.
-Provide text for heading - Correct list Item
-Provide text for heading  - ALl list item
-If you want to sort all list item check the checkbox of sort otherwise items will shuffle bydefault.
-In the last content box provide list items detail-
    a. Add 1 # before list item name to make it root element(On this no item will be droppable)
    b. Add 2 # before the parant list item
    c. Add 3 # before the child elements of parent items which will be shown at the right side box in the preview section.

^Add List Items
-Add list items without adding # before it

^Try to drop item on the heading which don'nt have any child element
-Create test items In which 1 parent elemt dont have any child element
-Create a parent element which have some child elements

^Try to provide no text in heading
-Try to remove whole text of headings

^delete item after dropping it
-Drag and drop the item to the repective parent.
-right click the dropped item 
-Click on delete


^Upate and delete using ADA
-Open any question of TreeView module in book or quiz player.
-Focus the draggable element which needs to be drag on droppable area for answer matching using tab key.
-Press Enter key to copy it.
-Press shift+tab key to focus on droppable area element where draggable element needs to be drop.Press enter key to paste the draggable element on Droppable area.
-For focus on desire element on both draggable and droppable area navigater using up and down arrow key.
-If you want to remove any element from droppable area to draggable area, then focus on that element using up and down arrow.Press enter for select the desire element.
-Press ctrl+alt+d for open the contextmenu option.
-Navigate using up or down arrow and focus on 'Delete' option.
-Press enter for remove the option.
-Repeat these steps as much as you have to use it 

@test_data: 
-Title text - ""Example of tree view""
-Question - ""Select the appropriate functionality of the following types of WPF applications.""
-Heading for correct item list - ""WPF Application Types""
-Heading for all list item - ""Functionality""
-Click sort option If you want list items will come in sorted form
-Provide list item detail - 
-#WPF Application Types
-##Windows Application 
-###[Runs on a desktop computer]
-###[Full access to a computer's resources]
-###[Non-navigational]
-###[Windows-like user experience]
-###[No built-in navigation]
-###[Opens multiple windows at a time]
-##Navigation Application
-###[Runs on a desktop computer]
-###[Full access to a computer's resources]
-###[Navigational]"
-Any data 
-Provide list item detail - 
-WPF Application Types
-Windows Application "
-#Permissions
-##Standard NTFS folder permissons
-##Standard NTFS file permissions
-###[Read]
-###[Write]"
-remove heading text
-right click on the dropped item
-perform the task according to the mentioned steps

@result: Open TreeView Module
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Editor Area", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitEditor(data.url)
        })
    })
    it('Tree view Create New', function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('tree view', { force: true })
        cy.get('.icomoon-arrow-left-4').click()
        cy.get('[data-subtype="7"]').click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/editor/?action=new&content_subtype=7&content_type=q&content_icon=0&react_content=1')
        })

        cy.get('#title').clear().type('Example of tree view Automation', { force: true })
        cy.get('#headingcorrect').clear().type('WPF Application Types', { force: true })
        cy.get('#headingall').clear().type('Functionality', { force: true })
        cy.get('#sort').check({ force: true })
        cy.get('#tree').clear()

        cy.get('#tree').type('{#}WPF Application Types{enter}', { force: true })

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Windows Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Non-navigational]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Windows-like user experience]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[No built-in navigation]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Opens multiple windows at a time]{enter}')

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Navigation Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Navigational]')
        cy.wait(4000)

        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
    })
    it('Tree view Create New Without Hash', function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('tree view', { force: true })
        cy.get('.icomoon-arrow-left-4').click()
        cy.get('[data-subtype="7"]').click()
        cy.visit(data.url + '/editor/?action=new&content_subtype=7&content_type=q&content_icon=0&react_content=1')

        cy.get('#title').clear().type('Example of tree view Automation', { force: true })
        cy.get('#headingcorrect').clear().type('WPF Application Types', { force: true })
        cy.get('#headingall').clear().type('Functionality', { force: true })
        cy.get('#sort').check({ force: true })
        cy.get('#tree').clear()
        cy.get('#tree').type('WPF Application Types{enter}')
        cy.get('#tree').type('Windows Application{enter}')
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')
        cy.get('#tree').type('[Full access to a computer resources]{enter}')
        cy.get('#tree').type('[Non-navigational]{enter}')
        cy.get('#tree').type('[Windows-like user experience]{enter}')
        cy.get('#tree').type('[No built-in navigation]{enter}')
        cy.get('#tree').type('[Opens multiple windows at a time]{enter}')
        cy.get('#tree').type('Navigation Application{enter}')
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')
        cy.get('#tree').type('[Full access to a computer resources]{enter}')
        cy.get('#tree').type('[Navigational]')
        cy.wait(4000)

        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
    })
    it('Tree view Create New without child', function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('tree view', { force: true })
        cy.get('.icomoon-arrow-left-4').click()
        cy.get('[data-subtype="7"]').click()
        cy.visit(data.url + '/editor/?action=new&content_subtype=7&content_type=q&content_icon=0&react_content=1')

        cy.get('#title').clear().type('Example of tree view Automation', { force: true })
        cy.get('#headingcorrect').clear().type('WPF Application Types', { force: true })
        cy.get('#headingall').clear().type('Functionality', { force: true })
        cy.get('#sort').check({ force: true })
        cy.get('#tree').clear()

        cy.get('#tree').type('{#}WPF Application Types{enter}', { force: true })

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Windows Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Non-navigational]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Windows-like user experience]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[No built-in navigation]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Opens multiple windows at a time]{enter}')

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Navigation Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Navigational]')
        cy.wait(4000)

        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
    })
    it('Tree view Create New', function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('tree view', { force: true })
        cy.get('.icomoon-arrow-left-4').click()
        cy.get('[data-subtype="7"]').click()
        cy.visit(data.url + '/editor/?action=new&content_subtype=7&content_type=q&content_icon=0&react_content=1')

        cy.get('#title').clear().type('Example of tree view Automation', { force: true })
        cy.get('#headingcorrect').clear()
        cy.get('#headingall').clear()
        cy.get('#sort').check({ force: true })
        cy.get('#tree').clear()

        cy.get('#tree').type('{#}WPF Application Types{enter}', { force: true })

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Windows Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Non-navigational]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Windows-like user experience]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[No built-in navigation]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Opens multiple windows at a time]{enter}')

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Navigation Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Navigational]')
        cy.wait(4000)

        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
    })
    it('Tree view Delete child items', function() {
        cy.get('.icomoon-search-2').click({ force: true })
        cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('tree view', { force: true })
        cy.get('.icomoon-arrow-left-4').click()
        cy.get('[data-subtype="7"]').click()
        cy.visit(data.url + '/editor/?action=new&content_subtype=7&content_type=q&content_icon=0&react_content=1')

        cy.get('#title').clear().type('Example of tree view Automation', { force: true })
        cy.get('#headingcorrect').clear().type('WPF Application Types', { force: true })
        cy.get('#headingall').clear().type('Functionality', { force: true })
        cy.get('#sort').check({ force: true })
        cy.get('#tree').clear()

        cy.get('#tree').type('{#}WPF Application Types{enter}', { force: true })

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Windows Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Non-navigational]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Windows-like user experience]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[No built-in navigation]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Opens multiple windows at a time]{enter}')

        cy.get('#tree').type('##', { parseSpecialCharSequences: false })
        cy.get('#tree').type('Navigation Application{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Runs on a desktop computer]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Full access to a computer resources]{enter}')

        cy.get('#tree').type('###', { parseSpecialCharSequences: false })
        cy.get('#tree').type('[Navigational]{enter}')
        cy.wait(4000)

        cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })

        cy.get('.data_style').contains('Full access to a computer resources').trigger('mousedown')
        cy.get('.jstree-anchor').contains('Navigation Application').trigger('mouseleave')
    })
})