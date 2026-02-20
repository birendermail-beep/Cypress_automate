/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10724
@story_id: 10976
@story_name: Relationship
@path: final/6621
@test_case_name: Relationship.js
@description:
@test_steps: 
^add_new_entity_title
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is connected with each other
- and top of the relationship box there is available ADD ENTITY Button
- click on the Add entity button and then open modal box 
- click on the title field and give entity title and click on the OK Button

^update_entity_title
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is connected with each other
- and top of the relationship box there is available ADD ENTITY Button
- click on the Add entity button and then open modal box 
- click on the title field and give entity title and click on the OK Button
- after added you want to change or update your title   
- click on the pencil icon which is show on the top side of entity 
- after clicking on the pencil icon the box is open and go inside title field update or set new title and press ok button

^add_attributes
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is connected with each other
- and top of the relationship box there is available ADD ENTITY Button
- click on the Add entity button and then open modal box 
- click on the attribute field and give some entity which you want
- every entity seprate by comma(,) and click on the OK Button

^position of entity
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is conected with each other
- and top of the relationship box there is availble ADD ENTITY Button   
- click on the Add entity button and then open modal box 
- click on the position field and in the position filed there is set some default position you can change the position value
- and click on the OK Button

^size of entity
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is conected with each other
- and top of the relationship box there is availble ADD ENTITY Button
- click on the Add entity button and then open modal box 
- click on the size field and in the size filed there is set some default size you can change the size value and set size of entity size
- and click on the OK Button

^set some type in entity
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is conected with each other.
- click on the created entity edit (pencil icon) button and there is show first field as type there is availble many types of type select any type.
- and click ok button

^permissions
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is conected with each other
- and top of the relationship box there is availble ADD ENTITY Button
- click on the Add entity button and then open modal box 
- there is three permission dropdown as Entity permission , Attribute Permission, Relationship Permission in all dropdown select only 2nd option and when you create entity you must select 2nd options in all permission dropdown
- and click on the OK Button

^context menu
- Visit to website.
- Login to website.
- visit editor area
- click each sidebar items
- open relationship module
- after open the module there is 3 default entity which is conected with each other
- click right click of any attribute there is open contect menu 
- select any option and set on the attribute.

@test_data: n/a
@result: relationship item page  area
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("relationship module testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                EditorPage.visitEditor(data.url)
                cy.get('.icomoon-puzzle').click({ force: true })
                cy.get('.labs-nav > li > a').contains('Add entity').click({ force: true })
            })
        })
        //add new entity title clicking by Add entity option and update entity title
    it('add new entity title clicking by Add entity option and update entity title', function() {
            cy.get('#ent-title').type('menu', { force: true })
            cy.get('.btn-success').click({ force: true })
            cy.get('[key="k3"] > .labs-btn-group > .labs-btn').eq(0).click({ force: true })
            cy.get('#ent-title').clear({ force: true }).type('item-menu', { force: true })
            cy.get('.btn-success').click({ force: true })
        })
        //add attributes in entity
    it('add attributes in entity', function() {
        cy.get('#ent-title').type('menu', { force: true })
        cy.get('#ent-attribute').type('combo pizza, paneer pizza', { force: true })
        cy.get('#ent-position').clear({ force: true }).type('200,400', { force: true })
        cy.get('#ent-size').clear({ force: true }).type('200,350', { force: true })
        cy.get('#ent-type').select('Circle', { force: true })
        cy.get('#ent-ent_created').select('Entity will create by default', { force: true })
        cy.get('#ent-attr_created').select('Entity will create by default', { force: true })
        cy.get('#ent-rel_created').select('Entity will create by default', { force: true })
        cy.get('.btn-success').click({ force: true })
        cy.get('#k0 > .entity-attributes > ul > :nth-child(1) > .attribute').rightclick({ force: true })
        cy.get('#ui-id-34').click({ force: true })

    })
})