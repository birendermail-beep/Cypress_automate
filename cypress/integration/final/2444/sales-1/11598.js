/*
@author: Ankit Kumar
@master_project_id: 2444
@phase_id: 10603
@story_id: 11598
@story_name: TPL Data Dump
@path: final/Admin
@test_case_name: TPL Data Dump.js
@description: 
@test_steps: 
^Dumped Data should be shown in excel
-go to : https://www.jigyaasa.info/utils/unittest/tpl_unit_test.php?action=search_file&folder=admin
-Click on select stream 
-click on Donload dumped data report
-note : it will take time as around 5k data is being downloaded

^Script in all TPL Files
-Search in vs code <{if $IS_DATA_DUMP}>
-You will see a list of files with script added, which when runs dumps data

@test_data: None

@result: Email Details from Gmail, Comments will be shown in table.
*/

import { Navbar, login_username, login_password, LoginPage, AdminArea } from '../../../../page-objects/pages/index' 
describe('Download Dumped Data Report', function() {
    it('Download Dumped Data Report', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/utils/unittest/tpl_unit_test.php?action=search_file&folder=admin')
            cy.get('#list_dropdown').click()
            cy.get('#list_dropdown + ul > li > a').contains('Download Dumped Data Report').click()
        })
    })
});