/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 11228
@story_name: Upload Evidence
@path: final/LiveLab
@test_case_name: Upload Evidence
@description: n/a
@test_steps:

^upload_my_work
-Go to ucertify.com
-Go to my library
-Search course ucertify test kit
-Click on manage 
-Open desk copy
-Click on performance lab
-Open live lab (connecting to a database)
-Click on evidence tab on right top section

@test_data: n/a
@result: upload form will display
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {

    it('upload_my_work', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=get_course_list&show=courses')
            cy.get('#search_course').clear({ force: true }).type('ucertify', { force: true })
            cy.get('[course_code="055Jj"]').contains('Manage').click({ force: true })
            cy.visit(data.url + '/?func=load_course&course=items&class_code=055Jj')
            cy.get('[data-cy=labs]').click()
            cy.visit(data.url + '/?func=navigate_items&item_sequence=1')
        })
        cy.get('[aria-controls="Evidence Tab"]').click({ force: true })
    })

})