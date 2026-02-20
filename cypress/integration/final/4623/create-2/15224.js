/*
@author: Anirudha Pratap
@master_project_id: 4623
@phase_id:
@story_id: 15224
@story_name: epub area
@path: final/Create
@test_case_name: epub area
@description: Create area
@test_steps: 
^epub area
-Login on ucertify.com as educator.
-Open the my library.
-Click on the my project tab.
-Click on the Author button of any course.(https://www.ucertify.com/educator/project/project.php?author_course=1&func=load_course&course=5TXCUHIPAYJ7SYNM).
-Click on the Knowledge Domain.
-Click on the setting button of Lesson.
-Click on Import a Lesson Below.(https://www.ucertify.com/author/epub/index.php?func=view_full_asset&is_overlay=1&course_code=05Jnw&chapter_guid=05j99)

@test_data: N/A.
@result: Opening the epub index
*/
import { Navbar, login_username, login_password, LoginPage, CreateArea } from '../../../../page-objects/pages/index'
describe('epub page', function() {
    it('test the epub page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/educator/project/epub/index.php?func=view_full_asset&is_overlay=1&course_code=05Jnw&chapter_guid=05j99");

        })
    })
})