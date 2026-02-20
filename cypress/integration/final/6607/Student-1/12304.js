/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10269
@story_id: 12304
@story_name: Knowledge Check Diagnosis
@path: final/6607/Student
@test_case_name: Knowledge Check Diagnosis.js
@description: N/A
@test_steps:
^Open Knowledge Check Diagnosis
-open url + /admin/knowledge_check_diagnosis.phpAC

^In first select we need to select course, by clicking on that a drop-down will open with search bar.
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course

^By clicking on Diagnosis button you can diagnosis knowledge checks of particular chapter
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID

^If we will hover over the on the header of the table you will find a tool to sort the table, here we are going to sort the table according the quiz snippet.
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on sort symbol given in the snippet column, to sort the table according the snippet

^Sort diagnostis table according to content type
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on sort symbol given in the content type column, to sort the table according the content type

^Sort diagnostis table according to chapter should be in
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on sort symbol given in the chapter should be in column, to sort the table aaccording the chapter should be in

^Sort diagnostis table according to diagnose result
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on sort symbol given in the content type column, to sort the table aaccording the diagnose result

^Sort diagnostis table according to sequesce no
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on sort symbol given in the # column, to sort the table aaccording the sequence no

^Sort diagnostis table according to current chapter
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on sort symbol given in the content type column, to sort the table aaccording the current chapter

^Click on select button
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on select all checkbox

^click on perticular checkbox to select that row
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on row 3rd's check box to select that row

^Second select box is to select diagnose result type
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on 2nd select box
-select inplayer tag not in coverage

^Display only those guids which are not in coverage but in player tag
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on 2nd select box
-select inplayer tag not in coverage

^Display only those guids which are not in same chapter
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on 2nd select box
-select not in same chapter

^Display only those guids which are not in knowledge check but in player tag
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on 2nd select box
-select not in knowledge check but in player tag

^Display only those guids which are in knowledge check but not in player tag
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on 2nd select box
-select in knowledge check but not in player tag

^By clicking on setting buttons in each row, we can preview and we can edit perticular guid
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on settings button of row 3rd

^By selecting preview we can open this in knowledge check and can perform it over there.
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on settings button of row 3rd
-click on preview button 

^In preview mode we can perform the quises also 
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on settings button of row 3rd
-click on preview button
-Perform the quiz
-Click on submit button

^Click on go back to go back to the diagnosis list
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on settings button of row 3rd
-click on preview button
-Perform the quiz
-Click on submit button
-Click on Go Back 

^Save button is disabled defauld
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-hover on show button

^Setting button beside Save button is disabled
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-hover on settings button

^after selecting rows settings buton will be enable
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd

^By clicking on setting buttons situated beside Save button, a dropdown will open with 4 options (Edit, Add in knowledge check, Remove from knowledge check, Preview)
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button

^By clicking on preview button question will be open in a modal as knowledge check
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button
-click on preview

^If we select more than one question and will click on preview button as knowledge check with next and previous button and with progress bar
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button
-click on preview

^By clicking on remove from knowledge check guid will be removed from knowledge check
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button
-click on Remove from knowledge check
-click on save button
-click on ok button
1-Click on diagnose btton for new result

^By clicking on add in knowledge check guid will add in knowledge check
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button
-click on add in knowledge check
-click on save button 
-click on ok button
1-Click on diagnose btton for new result

^After performing some task like remove from knowledge check or adding in knowledge check, save button will be enable and it's work is to save all the changes we have done
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button
-click on add in knowledge check
-hover on save button

^By clicking edit button quiz will open in editor environment where we can edit the guid content (Edit button option of settiing button situated beside save button)
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select row 2nd and 3rd
-click on settings button
-click on edit button

^By clicking edit button quiz will open in editor environment where we can edit the guid content (Edit button option of settiing button situated in each row)
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select 1 row
-click on setting buttion of perticular row
-click on edit

^After opening guid en editor environment click on go back button to go back to the diagnosis list
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on setting buttion of perticular row
-click on edit
-click on go back

^After selecting more than one row, By clicking edit button all guids will open in editor environment where we can edit the guid content (Edit button option of settiing button situated in each row)
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-select more than one row
-click on setting buttion of perticular row
-click on edit

^By clicking on select all check box all the rows will be selected
-open url + /admin/knowledge_check_diagnosis.php
-Click on 1st Select box
-Type course snippet or guid to search course 
-I have input 027gb course GUID
-click on check box in table header to select all trow

^We can track knowledge check result from educator area (track>lession)
-open jigyaasa.info
-login with your ucertify account
-goto my labrary
-click on course in which you have instructor permission
-click on instructor tool
-click on track
-click on Lession

^We can track knowledge check result from educator area (track>more>study plan)
-open jigyaasa.info
-login with your ucertify account
-goto my labrary
-click on course in which you have instructor permission
-click on instructor tool
-click on track
-click on Analutics
-click on study plan

^we can download knowledge chexck report from instructor portal
-open jigyaasa.info
-login with your ucertify account
-goto my labrary
-click on course in which you have instructor permission
-click on instructor tool
-click on track
-click on Export
-click on Track Report
-check knowledge check
-click on download

^check knowledge check deta is downloading or not
-open jigyaasa.info
-login with your ucertify account
-goto my labrary
-click on course in which you have instructor permission
-click on instructor tool
-click on track
-click on Export
-click on Track Report
-check knowledge check
-click on download
-open downloaded report

@test_data: 
-diagnosis table should be sorted by quiz snippet
-knowledge check deta should be there in report

@result: Knowledge check should have it's previous answer, given by you.
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe('Student area', function() {
    beforeEach('this is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                cy.get('[data-cy="mylibrary"]').click({ force: true })
                cy.get('[data-cy="searchbox"]').type('CISSP')
                cy.get('[crn="CISSP-2015"]').contains('Manage').click({ force: true })
                cy.visit(data.url + '/?func=load_course&course=CISSP-2015&class_code=' + data.class_code[7])
            })
        })
        // knowledge_check_diagnosis_9,knowledge_check_diagnosis_10,knowledge_check_diagnosis_11,knowledge_check_diagnosis_12
    it('knowledge_check_diagnosis', function() {
            cy.get('.btn_section > [intro-id="manage_as_instructor"]').click({ force: true })
            cy.get('[aria-label="Track"]').click({ force: true })
            cy.get('[aria-label="Lessons"]').click({ force: true })
                //knowledge_check_diagnosis_10
            cy.get('[aria-label="Track"]').click({ force: true })
            cy.get('[aria-label="Analytics"]').contains('Analytics').click({ force: true })
            cy.get('[data-cy=analytics_track_cy]').click()
            cy.get('[data-cy=study_plan_analytics_cy]').click()
                //knowledge_check_diagnosis_11, knowledge_check_diagnosis_12
            cy.get('[aria-label="Track"]').click({ force: true })
            cy.get('[aria-label="Export"]').click({ force: true })
            cy.get('#download_gradebook').click({ force: true })
            cy.get('#knowledge_test_session').click({ force: true })
            cy.get('#download').click({ force: true })
        })
        //knowledge-check-25,knowledge-check-26
    it('knowledge-check-diagnosis 1', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/knowledge_check_diagnosis.php")
        })
        cy.get('#course_list').select('312-49-v8 CHFI v8 - Computer Hacking Forensic Investigator', { force: true })
        cy.get('#diagnose').click({ force: true })
    })
})