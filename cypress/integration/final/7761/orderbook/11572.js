/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 
@story_name: orderbook_report
@path: final/7761/orderbook
@test_case_name: orderbook_report.js
@description: 
@test_steps:
^enable all feature
-Click on checkboxes
-select 1 to enable
-In chapter label select -1
-In tab level select Book level
-Chapter level reset: Book and parts
-Click on submit

^show calculator and labs type
-Select scientific calculator
-Labs: msoffice-msword-2010

^course certificate, certification,certificate confirmation, show certificate, number of contact hour
1-Enter course certificate 
-Click on both boxes
-Enter 10 in number of contact hours

^Enter data to change details of pre assessment test
-Enter file title
-Enter description
-Enter assignment code

^Enter data to change details of post assessment test
-Enter file title
-Enter description
-Enter assignment code

^Enter data to change details of practice test description and pratic test A
-Enter Practise test description
-Enter file title in Practice test A
-Enter description in Practice test A
-Enter assignment code in Practice test A


^we check only filed because of same fileds are same "
-Enter file title
-Enter description
-Enter assignment code

^To change the data of course dashboard enter new data
-Enter file path
-Enter version
-Enter created on date

^There is more boxes but we write only for one because of all are same"
-Enter copyright  info
-Click on submit

^to set the cover image, version and date
-Enter file path
-Enter version
-Enter created on date

^To set the copy right
-Enter copyright  info
-Click on submit

^Write about dashboard
-Enter about dashboard
-Click on  submit

^Write about video in course
-Enter about video
-Click on  submit

^Write about demo video in course
-Enter about demo video
-Click on  submit

^upload resources for instructor
-Select file to upload
-Enter file name
-Enter file title
-Enter file description
-CLick on submit

^if you want to add another field in instructor resources use + icon
-Click on + icon to add

^Delete newley added filed
-Click on delete icon to delete 

^Use to check details of test history and performance of student
-Select any course from library
-Click on open course
-CLick on Test History & Performance Analytics
-Click on Performance on Practice Tests
-Reports.php page will be open

^use to check correct ans in test
-Click on incorrect to see correct ans

^use to check incorrect ans in test
-Click on correct to see correct ans

@test_data:
-1-Course certificate: testing
-Number of contact hour: 10"
-File title: Testing
-Description: Testing by Rahul
-Assignment code: 76181"
-File title: Testing2
-Description: Testing by Rahul2
-Assignment code: 76182"
-Practice test desc: Practice test  by Rahul
-File title in practice test A: Testing3
-description in Practice test A: testing by Rahul3  
-assignment code in Practice test A: 76183

"-File title: Testing4
-Description: Testing by Rahul4
-Assignment code: 76184"
-path: C:\Users\Rahul Shukla\Pictures\Feedback\{FA37D562-581B-4F9F-B0BF-79E653205028}
-version: v-3
-Created on: 5 july"
-Copyright: copyright content

-About dashboard: dashboard content
-About video: about video content
-About demo video:details of demo video
-Select file to upload
-File name: instructor resource
-Title: Resource title
-Description: instructor resource for better experince "

@result: orderbook report should be added. 
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index' 
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "?func=get_course_list&show=courses");
        })
        cy.get('[data-cy="searchbox"]').type('ICT')
        cy.get('[crn="ICT-web-design-test"]').contains("Manage").click({ force: true });
        cy.get('[data-cy="desk_copy"]')
            .click({ force: true });
        cy.get('[data-cy=analytics]')
            .contains("Analytics")
            .click({ force: true });
    });
    it("use to check correct ans in test", function() {
        cy.get('#module_report')
            .contains("Activity Time Spent Report")
            .click({ force: true });
        cy.get('.icomoon-history').click();
    });
    it("use to check incorrect ans in test", function() {
        cy.get('#module_report')
            .contains("Activity Time Spent Report")
            .click({ force: true });
    });
});