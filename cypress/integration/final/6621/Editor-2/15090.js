/*
@author: Sundaram Tripathi
@master_project_id: 6621
@phase_id: 
@Story_Id: 15090
@story_name: content_preview
@path: final/Dump_Test_Automation
@Test_Case_Name: content_preview.js
@description: Go to editor area and type guid and get the item info
@test_steps: 
^Test case of is eval on search
- visit on the editor area
- Successfully open Search Content.
- Go to the serach string and type guid and pree on the "Search" icon button.
- After that show the item and and go to the "Action" area and click on the setting icon button then pree the "Edit" option.
- Open the page and click on the "Info" option after that choose the "Item Details".
@test_data: Content Discovery : 066RQ
@result:Content Suucessfully open the "Item Information" dialogbox
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('Editor Area', function() {

    beforeEach('Item info with content preview', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url+"/editor");
        })
        cy.get('[data-cy=search_bar]').type('066RQ',{force:true});
        cy.get('[data-cy=search_icon]').click({force:true});
        cy.get('.dropdown > .btn').click({force:true});
        
    })
    it('Click on the Edit item',function(){
        cy.get('.actions > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click({force:true});
    })
    it('Visit content preview page',function(){
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/editor/?action=edit&content_guid=066RQ&no_header=1&react_content=1&no_domain=1');
            cy.get('#infoButton').click({force:true});
            cy.get('div.show > .dropdown-menu > .jss116 > :nth-child(1)').click({force:true});
        })
    })
    
    
})