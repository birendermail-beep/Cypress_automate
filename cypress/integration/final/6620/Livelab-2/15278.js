/*
@author: Sundaram Tripathi
@master_project_id: 6620
@phase_id: 
@story_id: 15278
@story_name: vma-aws
@path: final/Dump_Test_Automation
@Test_Case_Name: vma-aws.js
@description: Go to "AWS" option and click on the "Member list"
@test_steps: 
^Test case of AWS Report
-Visit the website
- visit the vmadmin area
- Click the "AWS" tab and select the "Member List"
- Successfully open the "AWS" member page
- Click on the "Search" button and click on the "Advance search"
- Search your desired field
- Press the "Search" button
@test_data: 
    -Status  "active"
@result: Successfully open the AWS Members list
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('VMA area', function() {

    beforeEach(function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/custom/docker/vmadmin/index.php');
            cy.get(':nth-child(5) > #diagnosis_button').click({ force: true });
        })
    })

    it('vma-aws member list', function() {
        LoginPage.visitOnClick('#member_list');
        LiveLabArea.vmaMemberList();

    })
})