/*
@author: Sundaram Tripathi
@master_project_id: 6615
@phase_id: 
@story_id: 15122
@story_name: educator_right_section_popover
@path: final/Dump_Test_Automation
@Test_Case_Name: educator_right_section_popover.js
@description: Go to the resorce tab and open open the educator resource modal
@test_steps: 
^According to course and go to section list
-Click on this link: https://www.jigyaasa.info/
- Go to my library 
- Select any one desired course like : ""Automation Testing.""
- Click on the ""open"" button in prepkit.
- show the section and go to ""Actions"" option and click on the ""setting"" icon.
- Click on the ""Instructor Tools"".
- Successfully open the educator area.
- Show thw many tabs and click on the ""Track"" tabs.
- Open the roaster tab by default and go down bottom of the page.
-Click on the ""Click here"" option at the end.
- Successfully show the section list option.

@test_data:

@result: section list should be open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Educator Area', function() {

    it('In educator right section', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/educator/?func=class_edit&u_course_code=05Jnw.05JnX');
        })
        cy.get('[data-cy=track]').click({ force: true });
        cy.get('[data-cy=click_here_cy]').click({ force: true });

    })
})