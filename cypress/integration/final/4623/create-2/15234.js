/*
@author: Anurag Chaurasia
@master_project_id: 4623
@phase_id:
@story_id: 15234
@story_name: content_errors
@path: final/Create
@test_case_name: content_errors
@description: Create area
@test_steps: 
^content_errors
-Login on ucertify.com as educator.
-Open the my library.
-Click on the my project tab.
-Click on the Author button of any course.(https://www.ucertify.com/educator/project/project.php?author_course=1&func=load_course&course=5TXCUHIPAYJ7SYNM).
-Click on the Knowledge Domain.(https://www.ucertify.com/educator/project/project.php?author_course=1&func=add_domains&course_code=05Jnw&course_crn=&course_crn=5TXCUHIPAYJ7SYNM&reload=1)
-Click on the setting button of Lesson.
-Click on Edit mode option.(https://www.ucertify.com/educator/project/project.php?func=view_full_asset&from_myproject=1&course_code=05Jnw&chapter_guid=05j99)
-Click on the "Edit Lesson" in footer.
-Select content type Lession.
- Click on the Preview.
- Click on the summary

@test_data: N/A.
@result: Opening the  content_errors page
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('create Area', function() {
    it('content_errors', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/project/index.php?func=view_full_asset&from_myproject=1&course_code=03Hy5&chapter_guid=037F3');
            cy.wait(20000);
            CreateArea.itemBank()
            cy.get('[data-cy=right_side] > .circle_items').eq(0).click()
            cy.contains('Edit Lesson').eq(0).click();
            cy.get('[data-cy="export_content_type"]').select('Lesson', { force: true });
            cy.wait(2000);
            cy.get('#success').click({ force: true });
        })
    })
})