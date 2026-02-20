/*
@author: Anirudha Pratap
@master_project_id: 6622
@phase_id: 10858
@story_id: 11516
@story_name: Export Report
@path: final/Focus
@test_case_name: Export Report
@test_steps:
^It will display a list of persons
-1.Click Reports
-2.From given options Select 
- Report type-weekly goal
- subtype-not updated 2w plan
-3.Provide dates
-4.Click Go

^Filter by department
-1. Open given URL
-2. Click on choose
-3. There is the 7th tab Department.
-4. Click Department.
-5. Below all department dropdowns will come

^Open Daily status Report
-1. Click on the reports menu
-2. Click on the choose button.
-3. Report Modal will be opened
-4. Select 'Daily status report' and date range.
-5. Click on Go.

^Open Daily status Report of projects
-1. Click on the reports menu
-2. Click on the choose button.
-3. Report Modal will be opened
-4. Select 'Projects' and date range.
-5. Click on Go.

^Leave module policy and accrued notification
-1. Click on Leave/Event Menu
-2. select any future date.
-3. Click apply for leave
-4. Leave form will open.

^Focus Bug Advance Search
-1. Enter id in bug advance search
-2. Click on search
-3. records with matching criteria will come.

^Daily status form will show different-2 questions based on teams.
-1. Click on Goal/Project-> Fill Daily status (Projects)
-2. It will show fields based on a team of users.

^FAQs question
-1. Click Forms->ucertify Browser downloads page
-2. In the top right there will be the FAqs button.
-3. Clicking that. FAQs will be seen in modal.

^Person wise bug report
-1. In-person-wise bug report, owner names will not show, rather there will be manager names containing owner bugs.

^Open QQ from all in one section
-1. Open QQ from all in one section
-2. Click on any row
-3. There will be a comments section in the LHS area

^Phase Status Report
-1. Open Phase status report from reports options.
-2. In the last column, there is out of status time.

^Bug Analysis Report
-1. Open Reports
-2. Open Bug analysis Report
-3. It will open the report.

^Two types of ratings in dashboard
-1. Project management rating
-2. Project Execution rating

^Attendence Modal and Checking
-1. Open the Dashboard of the focus area.
-2. here is a button "click for attendance".
-3. After clicking it will ask for action.
-4. After clicking the check-in/checkout, It will show various details.
-5. Here is a button submit.
-6. Clicking submits, will record check-in/checkout details.

^If there will be any future ticklers, it will show under separate heading.
-1. Open fill the daily status page
-2. If there will be any future ticklers, it will show under a separate heading.
-3. It will not mandatory to fill these ticklers before the due date.

^Bug form contains Assigned To Comments
-1. Open Bug form.
-2. Then check the assigned comment textbox.

^From this, user can copy red report options of any user
-1. From the more menu, click reports and then click Red report. The report will be displayed. 
-2. Click the view summary option. A modal will be opened.
-3. Click the settings option in any cell and then click copy.
-4. the exceptions will be copied.

^Leave List
-1. Go to Leave a list. 
-2. Here Managers/HR can change status separately.
-3. Leave will be approved if both have approved that leave.

^Weekly goal having EQ and QQ records
-1. Open weekly goal.
-2. below goals, there will be EQ and QQ sections

^Bug Transfer Report
-1. In reports, select bug transfer report.
-2. Select period.
-3. Click Go.
-4. Records with transfer history will come.

^Video Capturing Tool
-1. Open utils index page
-2. click the video capture tool
-3. enter URL and click Go
-4. Video will run.
-5. In place of video, content GUIDs can be given.

@test_data: n/a
@result: file will be downloaded
*/

import { Navbar, login_username, login_password, LoginPage, FocusArea } from '../../../../page-objects/pages/index' 
describe('Focus Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        FocusArea.myFocus()
    })
    it('It will display list of persons', () => {
        FocusArea.myReport()
        cy.get('[data-cy="show_report_modal"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').select(data.focus.report, { force: true })
            cy.get('[data-cy="report_option_select"]').select(data.focus.subreport, { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(8000)
            cy.get('[data-cy="person_table"]').should('be.visible')
        })
    })
    it('Filter by department', () => {
        FocusArea.myReport()
        cy.get('[data-cy="show_report_modal"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').focus()
            cy.get('[data-cy="report_chosen_select"]').select(data.focus.report, { force: true })
            cy.get('[data-cy="report_option_select"]').select(data.focus.subreport, { force: true })
            cy.get('[data-cy="dept_tab"]').click()
            cy.get('[data-cy="dept_select"]').select("0", { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(2000)
            cy.get('[data-cy="person_table"]').should('be.visible')
        })
    })

    it('Open Daily status Report', () => {
        FocusArea.myReport()
        cy.get('[data-cy="show_report_modal"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').select("17", { force: true })
            cy.get('[data-cy="dept_tab"]').click()
            cy.get('[data-cy="dept_select"]').select("0", { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(3000)
            cy.get('[data-cy="daily_status_tbl"]').should('be.visible')
        })
    })

    it('Open Daily status Report of projects', () => {
        FocusArea.myReport()
        cy.get('[data-cy="show_report_modal"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').select("7", { force: true })
            cy.get('[data-cy="report_option_select"]').select("2", { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(5000)
            cy.get('.table').should('be.visible')
        })
    })

    it('Leave module policy and accured notification', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="leave_event_tab"]').click()
            cy.get(':nth-child(12) > .month > :nth-child(6) > :nth-child(5) > .day-content').click()
            cy.get('[data-cy="apply_leave_btn"]').click()
            cy.get('#reviewer_password').type(data.focus.pass)
            cy.get('#authenticate_me').click()
        })
    })

    it('Focus Bug Advance Search', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="more_tab"]').click()
            cy.get('[data-cy="bug_list_data"]').click()
            cy.wait(30000)
            cy.get('[data-cy="advance_srch_btn"]').click()
            cy.get('#bug_id').type(data.focus.bug)
            cy.get('.modal-footer > .btn-primary').click()
        })
    })

    it('Daily status form will show different-2 questions based on teams.', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="goal_tab"]').click()
            cy.get('[data-cy="fill_status_pro"]').click()
        })
    })

    it('FAQs question', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="form_tab"]').click()
            cy.get(':nth-child(16) > .dropdown-item')
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('#faq_btn').click()
            cy.get('#browser_faq_modal').should('be.visible')
        })
    })

    it('Person wise bug report', () => {
        FocusArea.myRollReport()
        cy.get('[data-cy="bug_person_tbl"]').should('be.visible')
    })

    it('Open QQ from all in one section', () => {
        FocusArea.myQqReport()
        cy.get('[data-cy="row_data"]').eq(0).click()
        cy.get('[data-cy="container_qq"]').should('be.visible')
    })

    it('Phase Status Report', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="phase_status_report"]').click()
        cy.wait(8000)
        cy.get('[data-cy="phase_status_table"]').should('be.visible')
    })

    it('Bug Analysis Report', () => {
        FocusArea.myReport()
        cy.get('[data-cy="show_report_modal"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').select("26", { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(3000)
            cy.get('[data-cy="bug_analysis"]').should('be.visible')
        })
    })

    it('Two types of ratings in dashboard', () => {
        cy.get('[data-cy="demo_exe"]').should('be.visible')
        cy.get('[data-cy="pe_exe"]').should('be.visible')
    })

    it('Attendence Modal and Checking', () => {
        cy.get('[data-cy="attendence_btn"]').click()
        cy.wait(3000)
        cy.get('[data-cy="atten_modal"]').should('be.visible')
    })

    it('If there will be any future ticklers, it will show under separate heading.', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="goal_tab"]').click()
            cy.get('[data-cy="fill_status_pro"]').click()
            cy.get('[data-cy="ticker_box"]').should('be.visible')
        })
    })

    it("Bug form contains Assigned To Comments", () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="bug_form"]').click()
        cy.wait(8000)
        cy.get('[data-cy="assigned_comment"]').should('be.visible')
    })

    it('From this, user can copy red report options of any user.', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="report_opt_more"]').click()
        cy.get('[data-cy="red_report"]').click()
        cy.wait(2000)
        cy.get('[data-cy="view_summary"]').click()
        cy.get('[data-cy="setting_icon"]').eq(0).click()
        cy.get('[data-cy="copy_opt"]').eq(0).click()
    })

    it('Leave List', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="leave_list"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="leave_list_select"]').select(data.user_guid.two, { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(2000)
            cy.get('[data-cy="focus_leave_table"]').should('be.visible')
        })
    })

    it('Weekly goal having EQ and QQ records', () => {
        cy.get('[data-cy="goal_tab"]').click()
        cy.get('[data-cy="weekly_goal"]').click()
        cy.wait(10000)
        cy.get('[data-cy="eta_tbl"]').should('be.visible')
    })

    it('Bug Transfer Report', () => {
        FocusArea.myReport()
        cy.get('[data-cy="show_report_modal"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="start_dt"]').focus().type(data.focus.start)
            cy.get('[data-cy="end_dt"]').focus().type(data.focus.end)
            cy.get('[data-cy="report_chosen_select"]').select("21", { force: true })
            cy.get('[data-cy="go_btn"]').click()
            cy.wait(3000)
            cy.get('[data-cy="bug_transfer_tbl"]').should('be.visible')
        })
    })
    
    it('Video Capturing Tool', () => {
        cy.get('[data-cy="more_tab"]').click()
        cy.get('[data-cy="capture_tool"]').click()
        cy.get('[data-cy="video_tool"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    })
})