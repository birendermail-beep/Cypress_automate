/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10395
@story_id: 
@story_name: Autograding on Pretend Login
@path: final/LiveLab
@test_case_name: Autograding on Pretend Login.js
@decription: 
@test_steps:
^Autograding 21 - Course :CompTIA CASP+ Study Guide CAS-003
-Login with admin and also login to pretend login for chetan email: chetan.singhal@ucertify.com
-Go to my library and load the course "CompTIA CASP+ Study Guide CAS-003"
-Open the content "Scanning TCP Ports"

^Autograding 22 - Course : MTA: Database Fundamentals
-Login with admin and also login to pretend login for chetan email: chetan.singhal@ucertify.com
-Go to my library and load the course "MTA: Database Fundamentals"
-Open the content "Creating a Database"

^Autograding 23 - Course : MTA: Database Fundamentals
-Login with admin and also login to pretend login for chetan email: chetan.singhal@ucertify.com
-Go to my library and load the course "MTA: Database Fundamentals"
-Open the content "Deleting a Database"

^Autograding 24 - Course: MTA: Windows Operating System Fundamentals (Video Training)
-Login with admin and also login to pretend login for chetan email: chetan.singhal@ucertify.com
-Go to my library and load the course " Windows Operating System Fundamentals (Video Training)"
-Open the content "Using Task Scheduler"

^Autograding 25 - Course: MTA: Windows Operating System Fundamentals (Video Training)
-Login with admin and also login to pretend login for chetan email: chetan.singhal@ucertify.com
-Go to my library and load the course " Windows Operating System Fundamentals (Video Training)"
-Open the content "Running the Disk Cleanup Utility"

^Autograding 26 - Course: MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016
-Login with admin and also login to pretend login for chetan email: chetan.singhal@ucertify.com
-Go to my library and load the course "MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016"
-Open the content "Configuring NLB operations"

^Autograding 27 - Course: Cyber Range v2
-Login with admin and also login to pretend login for chetan email: akanksha.yadav@ucertify.com
-Go to my library and load the course "Cyber Range v2"
-Open the content "Using Faview"

^Autograding 28 - Course: Cyber Range v2
-Login with admin and also login to pretend login for chetan email: akanksha.yadav@ucertify.com
-Go to my library and load the course "Cyber Range v2"
-Open the content "        
-Using MozillaCacheView"

^Autograding 29 - Course: MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016
-Login with admin and also login to pretend login for chetan email: akanksha.yadav@ucertify.com
-Go to my library and load the course "MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016"
-Open the content "Creating a Storage pool"

^Autograding 30 - Course: CW81-testing
-Login with admin and also login to pretend login for chetan email: akanksha.yadav@ucertify.com
-Go to my library and load the course "CW81-testing"
-Open the content "        
-Using MozillaCacheView"

^Autograding 31 - Course: CompTIA Cybersecurity Analyst+ (CySA+)
-Login with admin and also login to pretend login for chetan email: akanksha.yadav@ucertify.com
-Go to my library and load the course "CompTIA Cybersecurity Analyst+ (CySA+)"
-Open the content "        
-Using MozillaCacheView"

^Autograding 32
-Open this url: https://www.jigyaasa.info/custom/docker/vmadmin/index.php?content_guid=05k4O&func=load_machine&action=test&device=349m&tab_section=test_enable&vcenter_server_id=0
-https://www.ucertify.com/custom/docker/vmadmin/index.php?content_guid=05k4O&func=load_machine&action=test&device=349m&tab_section=test_enable&vcenter_server_id=0
-Perform the lab and click on submit button to check the autograding.

Autograding - 33 - Course: Microsoft Office 2016
-Login with admin and also login to pretend login for chetan email: prabhat.kumar@ucertify.com
-Go to my library and load the course "Microsoft Office 2016"
-Open the content "Modifying a Worksheet"

@test_data: 
-machine = bs16

@result: Task completed successfully
*/


import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/admin/user_login.php')
            cy.get('[data-cy=admin_user_login]').type('chetan.singhal@ucertify.com');
            cy.get('[data-cy=admin_login_submit]').click();
        })
    })
    it('Autograding with pretend login', () => {
        cy.get('[data-cy=searchbox]').type('CAS-003{enter}');
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course=CAS-003&desk_copy=1');
        })
        cy.get('[data-cy=labs]').click();
        cy.get('#adv_search').type('Scanning TCP Ports');
        cy.contains('Scanning TCP Ports').click({ force: true });
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(15000);
        /* after the machine is connected , cannot perform the task as machine is opening in Iframe and it is outside the scope of cypress */
        cy.get('[data-cy=submit_btn] > .toolbar-label').click();
        cy.get('[data-cy=evaluate_btn]').click();
        cy.wait(20000);
        cy.get('#device_tabs').should('exist');
    })
})

// rest of the testcases are all same steps and area
