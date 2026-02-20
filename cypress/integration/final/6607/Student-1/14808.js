/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id: 14808
@story_name: ebook slide
@path: final/6607/Student
@test_case_name: ebook slide
@description: Opening the ebook slide page
@test_steps:

^test case of ebook area
-visit the website
-login into page
-Open the my library.
-Open any course. (url +/?func=load_course&course=A-220-1001).
-Click on the chapter and lesson.
-Start the chapter-1.

^test case of ebook slide2
-visit the website
-login into page
-Open the my library.
-Open any course.(url +/?func=load_course&course_code=02pzx&class_code=04ehS).
-Click on the chapter and lesson.
-Start the chapter-9.

^ebook slide page
-Login to uCertify.com
-Open the my library.
-Click on the my project tab.
-Open any course.(https://www.ucertify.com/?func=load_course&course=A-220-1001).
-Click on the chapter and lesson.
-Start the chapter-1."

^Download chapter
-Login to uCertify.com
-Open the my library.
-Click on the my project tab.
-Open any course.(https://www.ucertify.com/?func=load_course&course=A-220-1001).
-Click on the chapter a-nd lesson.
-Add download_pdf=1 to url"

@test_data:n/a
@result:Opening the ebook slide page
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Ebook slide', function() {
    beforeEach('this is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
        })
    })

    it('Opening the ebook slide page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course=A-220-1001");
        })
        cy.get('[data-cy="chapters"]').click()
        cy.get('[data-cy="toc_chapters"]').eq(0).click({ force: true })
    })
    it('Opening the ebook slide page2', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course_code=02pzx&class_code=04ehS");
        })
        cy.get('[data-cy="chapters"]').click()
        cy.get('[data-cy="toc_chapters"]').eq(8).click({ force: true })
    })
    it('Opening the ebook slide page, Download chapter and lesson in PDF', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=get_course_list&show=courses");
            cy.get('[intro-id="myproject"]').click();
            cy.visit(data.url + "/?func=load_course&course=A-220-1001");
            cy.get('[data-cy="chapters"]').click().then(() => {
                cy.get('[data-cy="toc_chapters"]').eq(0).click({ force: true })
            })
            cy.visit(data.url + '/?func=ebook&chapter_no=1#top&download_pdf=1')
        })
    })
})