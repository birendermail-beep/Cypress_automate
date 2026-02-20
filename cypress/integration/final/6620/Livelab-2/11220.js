/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id:
@story_id: 
@story_name: VM Admin Device Search
@path: final/LiveLab
@test_case_name: VM Admin Device Search
@description: n/a
@test_steps:

^vma-vm_expiry
-Go to ucertify.com 
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/ 
-Search machin bs16 in search bar and click on search icon
-Click on setting button on any bs16 machine
-Click on vm expiry

^vma-machine_list
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Type on search bar bs16 and click on search 

^vma-side_pane_item_review
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/ 
-Search machin bs16 in search bar and click search icon
-Click on setting button on any bs16 machine
-Click on content list
-Click on any content setting button
-Click on test ans click on s0
-Click on dide pane list

^vma-operation
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Type on search bar bs16 and click on search 

^vma-common
-Go to ucertify.com and login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
- Click on search
-Click on advance search
- Click on search 

^vma-manage_actions
-Go to ucertify.com
-Login into website
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/ 
-Search machine bs16 in search bar
-Click search icon
-Click on setting button on any bs16 machine
-Click on vm expiry

^vma-info
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/
-Click on search
-Click on advance search 
-Click on any base VM  name on machine

^vma-passphrase_validation
-Go to ucertify.com 
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/ 
-Search machine bs16 in search bar
-Click search icon
-Click on setting button on any bs16 machine
-Click on backup
-Click on yes button

^vma-logs_content
-Go to ucertify.com
-Login with testbot@ucertify.com
-Go to  URL:https://www.ucertify.com/custom/docker/vmadmin/ 
-Search machine bs16 in search bar
-Click search icon
-Click on setting button on any bs16 machine
-Click on load machine
-Click on blue print

@test_data: n/a
@result: log content will display
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('live_lab area', function () {
    beforeEach('this is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitCustomArea(data.url)
        })
    })
    it('vma-machine_list', function () {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
    })
    it('vma-vm_expiry', function () {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
        cy.wait(6000)
        cy.get(':nth-child(14) > .dropdown > .btn > .icomoon-cog').eq(0).click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=vm_expiry&vmname=bs16&vcenter_server_id=3')
        })
    })

    it('vma-side_pane_item_review', function () {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
        cy.get(':nth-child(14) > .dropdown > .btn > .icomoon-cog').eq(0).click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=catalogue&action=contents&machine=bs16')
            cy.get('.actions > .dropdown > .btn > .icomoon-cog').eq(0).click()
            cy.get('.dropdown-item').contains('Test').click({ force: true })
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?content_guid=05rpN&func=load_machine&action=test&device=bs16&tab_section=test_enable&vcenter_server_id=0')
        })
        cy.get('#btntxt').click()
    })
    it('vma-operation', function () {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
    })
    it('vma-logs_content', function () {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
        cy.wait(6000)
        cy.get(':nth-child(14) > .dropdown > .btn > .icomoon-cog').eq(0).click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=load_machine&action=base_vm&device=bs16&device_name=bs16&vcenter_server_id=3')
        })
    })
    it('vma-passphrase_validation', function () {
        cy.get('[data-cy=search_txt]').clear({ force: true }).type('bs16', { force: true })
        cy.get('[data-cy=search_txt_btn]').click()
        cy.wait(6000)
        cy.get('[data-cy=action_machine]').eq(0).click()
        cy.get('[data-cy=test_menu]').eq(0).click()
        cy.get(':nth-child(1) > #backup_action_bs166').click({ force: true })
        cy.get('#powerstate_proceed_button').click()
    })
    it('vma-info', function () {
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#search_submit').click()
        cy.get(':nth-child(2) > .show_machine_info > span').eq(0).click()
    })
    it('vma-manage_actions', function () {
        cy.get('#search_text').clear({ force: true }).type('bs16', { force: true })
        cy.get('#search_manage_course').click()
        cy.wait(6000)
        cy.get(':nth-child(14) > .dropdown > .btn > .icomoon-cog').eq(0).click()
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=vm_expiry&vmname=bs16&vcenter_server_id=3')
        })
    })
    it('vma-common', function () {
        cy.get('.input-group-append > .dropdown-toggle').click()
        cy.get('#mng_advance_search').click()
        cy.get('#search_submit').click()
    })
})