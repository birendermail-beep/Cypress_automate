/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10048
@story_id: 11160
@story_name: Live Lab Machine Operations
@path: final/LiveLab
@test_case_name: Live Lab Machine Operations
@description: N/A
@test_steps: 

^Machine On
-Go to my library
-Load the course = MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016
-load the lab with snippet: "Enabling Windows features offline on a WIM"
-After the page load.
-Click on machine name. it will show the on option in case of machine is powered off or connect.

^Machine Connect
-Follow the test case 1 then,
-After the machine on
-Click on Connect to connect the machine.

^Machine reset
-Follow the test case 1, then
-After the machine connected
-Click on reset to reset the machine in default condition.

^Machine off
-Follow the test case 1, then
-After the machine connected
-Click on Off to powered off the machine.

^Increasing access time of using the machine
-First on the machine
-Click on icon of timer. 
-It will open the madal with dropdown list of time to set
-Select the time
-Click on save button

^Show the explanation of the task
-follow the test case 1, then
-Click on submit button present right side of bottombar
-It will show the two options Evaluate and Show Explanation
-Click on show explanation

@test_data: N/A
@result: It will test whole content area in catalog tab.
 */
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index' 
describe('live_lab area', function() {
    it('vma-operation', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
        })
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
    })

})