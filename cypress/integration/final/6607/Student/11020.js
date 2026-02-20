/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11020
@story_name: Access Topics from Side Pane
@path: final/6607/Student
@test_case_name: Access Topics from Side Pane.js
@description:
@test_steps:
^Open side Pane
-click on toc as item list in left side

^Search content in TOC
-you can search TOC and lesson 

^Open lesson or objective from TOC
-you can navigate into chapter and topics

@test_data: n/a
@result: search result will be display
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Toc book', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitCourse(data.url)
            })
        })
        //chapter.item_list, chapter.item_list1,chapter.item_list2,chapter.item_list3
    it('click on toc as item list in left side', function() {
            cy.get('[data-cy="chapters"]').click({ force: true })
            cy.get('[data-cy="toc_chapters"]').eq(0).click({ force: true })
            cy.get('#btntxt').click({ force: true })
            //Pankaj:ucauto
            cy.wait(5000);
            cy.get('#toc_search').click({ force: true })
            cy.get('#toc_search').type('supporting')
        })
        //chapter.item_list6
    it('click on goback then you will come to TOC page in full screen', function() {
        cy.get('[data-cy="chapters"]').click({ force: true })
        cy.get('[data-cy="toc_chapters"]').eq(0).click({ force: true })
        cy.get('[intro-id="global_goback"]').click({ force: true })
    })
})