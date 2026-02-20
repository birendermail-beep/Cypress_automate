/*
@author: Anirudh Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14878
@story_name: ebook search
@path: final/6607/Student
@test_case_name: ebook search
@description: N/A   
@test_steps: 
^ebook_search

-go to ucertify.com and login.
-go to my library and search course LO CompTIA.
-click on manage and open desk copy.
-click on chapter and lessons.
-elect search by lesson and type component.
-click on search lession.

@test_data: N/A 
@result: content will display on dashboard
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student Area', function() {
    it('ebook_search', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course_code=02pzx&class_code=05Rf3')
        })
        cy.get('[data-cy="chapters"]').click()
        cy.get('#toc_search').clear({ force: true }).type('component', { force: true })
        cy.get('#lessonsearch').click()
    })

})