/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 12299
@story_name: Knowledge Check
@path: final/6607/Student
@test_case_name: Knowledge Check.js
@description: We will open knowledge check (quiz_player.php) in a new tab with just player_id
@test_steps:
^Open knowledge check in a new tab, without any arguments
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=05d8E&title=&player_setting

^Open knowledge check in a new tab, with valid arguments
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=05d8E

^Open knowledge check in a new tab, with only player_id
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=05d8E

^Open knowledge check in a new tab, with player_id, and group_guid
-Open https://www.ucertify.com//quiz_player.php?group_guid=05d8E

^Open knowledge check in a new tab, with only group_guid
-Open https://www.ucertify.com//quiz_player.php?group_guid=05d8E

^Open knowledge check in a new tab, with player_id, and group_guid, and title
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=05d8E&title=Testing

^Open knowledge check in a new tab, with only title
-Open https://www.ucertify.com//quiz_player.php?title=Testing

^Open Knowledge check with an invalid guid
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=Abcde&title=&player_setting

^Check Submit button working currectly in knowledge check or not
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=01wBh&title=&player_setting
-Select Correct Answer
-Click on submit button

^Check Reset Button
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=01wBh&title=&player_setting
-Select Correct Answer
-Click on reset button
-Click on Yes

^Open Quiz player with multiple guids
-open https://www.ucertify.com//quiz_player.php?player_id=undefined_4&group_guid=031uj,031uk,031ul&title=&player_setting

^Check Functionality of next and previous buttons
-open https://www.ucertify.com//quiz_player.php?player_id=undefined_4&group_guid=031uj,031uk,031ul&title=&player_setting
-Check priviousbutton is disabled or not
-Click on next button
-Click on privious button

^Check Retry button is working or not
-Open https://www.ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=031uj&title=&player_setting
-Select Correct Answer
-Click on submit button
-Click on retry button

^Annotation feature in knowledge check
-Open https://ucertify.com//quiz_player.php?player_id=undefined_0&group_guid=031uj&title=&player_setting
-Double click to select some text of quiz
-Now a popup will come with three options Annotate, wikipedia search, google search.
-Click on annotate to then a popup box will open
-With highlight color, comment, link, Media title if any, file selection section, and one add tags section, and with cancel and save button.
-Write comment, link, insert media, and select highlight color and click on save button.

@test_data:
-player_id
-group_guid
-title
-player_setting"
-player_id
-player_id
-group_guid"
-group_guid
-player_id
-group_guid
-title"
-title
-player_id
-title
-player_setting"
-player_id
-group_guid
-title
-player_setting"
"-player_id
-group_guid
-title
-player_setting"
-player_id
-more than one guid as group_guid
-title
-player setting"
-player_id
-more than one guid as group_guid
-title
-player setting"
-player_id
-group_guid
-title
-player_setting"

@result: Knowledge check should open with some control, "full screen", "Reset", "Submit"
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('Student area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.visitLOAplusCompleteCourse(data)
            })
        })
        //knowledge-check-6,knowledge-check-8,knowledge-check-10,knowledge-check-11
    it('We will open knowledge check (quiz_player.php) in a new tab with valid arguments, player_id, group_guid, title', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[0] + '&title=&player_setting')
                cy.get('#lab_section0').should('be.visible')
                cy.wait(2000)
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[0])
                cy.get('#lab_section0').should('be.visible')
                cy.wait(2000)
                cy.visit(data.url + '/quiz_player.php?group_guid=' + data.group_guid[0])
                cy.get('#lab_section0').should('be.visible')
                cy.wait(2000)
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[0] + '&title=Testing')
                cy.get('#lab_section0').should('be.visible')
            })
        })
        //knowledge-check-12
    it('We will open knowledge check (quiz_player.php) in a new tab with valid arguments, player_id, group_guid, title, But given guid will be invalid guid', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=Abcde&title=&player_setting')
                cy.contains('Connect the Idea').should('be.visible')
                cy.wait(2000)
            })
        })
        //knowledge-check-13
    it('We will open knowledge check (quiz_player.php) in a new tab with valid arguments, player_id, group_guid, title, And will check that submit button is working or not', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[1] + '&title=&player_setting')
                cy.get('.simID0').select('Internet Explorer 8 and below', { force: true })
                cy.get('#learn').click({ force: true })
                cy.wait(2000)
                cy.contains('Connect the Idea').should('be.visible')
            })
        })
        //knowledge-check-14
    it('We will open knowledge check (quiz_player.php) in a new tab with valid arguments, player_id, group_guid, title, And will check that Resetbutton is working or not', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[1] + '&title=&player_setting')
                cy.get('.simID0').select('Internet Explorer 8 and below', { force: true })
                cy.get('.reset_button').click({ force: true })
                cy.get('#reset_yes').click({ force: true })
                cy.wait(12000)
                cy.contains('Connect the Idea').should('be.visible')
            })
        })
        //knowledge-check-15, knowledge-check-16
    it('We will open this quiz player by providing more than one guids and We will open this quiz player by providing more than one guids And will check that next and privious buttons are working or not', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[2] + ',' + data.group_guid[3] + ',' + data.group_guid[4] + '&title=&player_setting')
                cy.questionNavigation()
                cy.contains('Connect the Idea').should('be.visible')
            })
        })
        //knowledge-check-17
    it('After submiting the answer we will click on Retry button to re attempt the question', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[2] + '&title=&player_setting')
                cy.get('#userans-A').click({ force: true })
                cy.get('#learn').contains('Submit').click({ force: true })
                cy.wait(2000)
                cy.get('#learn').contains('Retry').click({ force: true })
                cy.contains('Connect the Idea').should('be.visible')
            })
        })
        //knowledge-check-18
    it('after selecting some text in knowledge check you can set annotation over that text', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/quiz_player.php?player_id=undefined_0&group_guid=' + data.group_guid[2] + '&title=&player_setting')
            cy.contains('Connect the Idea').should('be.visible')
        })
    })
})