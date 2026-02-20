/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11196
    @story_name: Content List
    @path: final/LiveLab
    @test_case_name: Content List
    @description: It will login and check the content table coming in catalogue.
    @test_steps: 
    
    ^Redirect to content list page.
    - 1) Click on catalogue tab. It will show the dropdown options
    - 2) Click on contents
    
    ^Search the content for created on date.
    - 1) Click on search button it will show the advanced search. 
    - 2) Click on advanced search. it will open the modal with filter conditions.
    - 3) Selected the created on start and end date
    - 4) Click on search button

    ^Search the content for updated on date.
    - 1) Click on search button it will show the advanced search. 
    - 2) Click on advanced search. it will open the modal with filter conditions.
    - 3) Select the updated on date. If there is no record then try another date
    - 4) Click on search button

    ^Search the content with content guid.
    - 1) Click on search button it will show the advanced search. 
    - 2) Click on advanced search. it will open the modal with filter conditions.
    - 3) Enter the content guid(s) 
    - 4) Click on the search button

    ^Search the content with snippet.
    - 1) Click on search button it will show the advanced search. 
    - 2) Click on advanced search. it will open the modal with filter conditions.
    - 3) Enter the Snippet
    - 4) Click on the search button

    ^Search the content with course.
    - 1) Click on search button it will show the advanced search. 
    - 2) Click on advanced search. it will open the modal with filter conditions.
    - 3) Select the course
    - 4) Click on the search button

    ^Search the content with machine.
    - 1) Click on search button it will show the advanced search. 
    - 2) Click on advanced search. it will open the modal with filter conditions.
    - 3) Select the machine
    - 4) Click on the search button

    ^Edit the content.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on Edit.
    - 3) It will redirect to a new window.

    ^Preview of the content.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on Preview.
    - 3) It will redirect to a new window.

    ^Get Diff of the content.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on Get Diff.
    - 3) It will redirect to a new window.

    ^To test the content on any assigned machine.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on Test
    - 3) Select s0 and d0 one at a time
    - 4) It will redirect to a new window.

    ^To show the machine that is assigned to content.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on Machine list
    - 3) It will redirect to a new window.

    ^To load the content activity logs for the content.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on the content activity
    - 3) It will redirect to a new window.

    ^To load the content activity report for the content.
    - 1) Click on setting icon present in each row of content list of actions column
    - 2) Click on the content activity report
    - 3) It will redirect to a new window.

    ^To export the content list.
    - 1) Click on the first checkbox present in the header of the table at the starting of the table
    - 2) Go to the export button.
    - 3) Click on it. It will show the two options: Export as XLS, Export As CSV.
    - 4) Click on export as CSV. 

    @test_data:
    - action = contents.
    - start date = 28-May-19, end date = 28-May-19.
    - start date = 28-Nov-19, end date = 28-Nov-19.
    - content guid = 04tVh,04tVd.
    - Snippet = Using Windows Event Viewer.
    - course = A Practical Guide to Computer Forensics Investigations [comp-forensic].
    - machine = lnxj.
    - content guid= 05pnf.
    - content guid= 05pnf.
    - content guid= 05pnf.
    - content guid= 05pnf machine = gwf2 test = s0 or d0.
    - content guid= 05pnf.
    - content guid = 05pnf.
    - content guid = 05pnf.
    - export type= xlx and csv.

    @result: It will test whole content area in catalog tab.
 */
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        LiveLabArea.vmContentList()
        LiveLabArea.advanceSearch()
    })
    it('Search content based on created on date', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="created_start_dt"]').focus().type(data.content_lab.start)
            cy.get('[data-cy="created_end_dt"]').focus().type(data.content_lab.end)
        })
        cy.get('[data-cy="content_guid_txt"]').focus()
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy=content_tbl]').should('be.visible')
    })
    it('Search content based on updated on date', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="updated_start_dt"]').focus().type(data.content_lab.start)
            cy.get('[data-cy="updated_end_dt"]').focus().type(data.content_lab.end)
        })
        cy.get('[data-cy="content_guid_txt"]').focus()
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy=content_tbl]').should('be.visible')
    })
    it('Search the content with content guid', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.guid)
        })
    })
    it('Search content based on snippet', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="snippet_txt"]').type(data.content_lab.snippet)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="snippet_txt"]').should('contain', data.content_lab.snippet)
        })
    })
    it('Search content based on course', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="course_select"]').select(data.content_lab.course, { force: true })
        })
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy=content_tbl]').should('be.visible')
    })
    it('Search content based on machine', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="machine_select"]').select(data.content_lab.machine, { force: true })
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="machine_txt"]').should('contain', data.content_lab.machine + ' ' + '(' + data.content_lab.machine + ')')
        })
    })
    it('Edit the content', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.get('[data-cy="edit_content"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('#show_guid').should('contain', data.content_lab.edit_guid)
        })
    })
    it('To see the preview of content', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.get('[data-cy="preview_content"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            // Use in future
            //cy.get('#show_guid').should('contain',data.content_lab.edit_guid)
        })
    })
    it('To see the difference of content updated', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.get('[data-cy="diff_content"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('u').should('contain', data.content_lab.diff)
        })
    })
    it('To test the content on any assigned machine', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="machine_select"]').select(data.content_lab.machine_1, { force: true })
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.get('[data-cy="test_menu"]').eq(0).click()
            cy.get('[data-cy=c0_menu]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy=submit_btn]').should('be.visible')
        })
    })
    it('To show the machine that is assigned to content', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.wait(20000);
            cy.get('[data-cy="machine_list_act"]').click()
        })
    })
    it('To load the content activity logs for the content', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.get('[data-cy="activity_content"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy=content_activity_tbl]').should('be.visible')
        })
    })
    it('To load the content activity report for the content', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=content_guid_txt]').type(data.content_lab.edit_guid)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con"]').should('contain', data.content_lab.edit_guid)
            cy.get('[data-cy="action_content"]').eq(0).click()
            cy.get('[data-cy="activity_content_report"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('#tablen').should('be.visible')
        })
    })
    it('To export the content list', () => {
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy="checkbox_all_mark"]').eq(0).click({ force: true })
        cy.get('[data-cy=export_btn]').click()
        cy.get('[data-cy="csv_export"]').click()
    })
})