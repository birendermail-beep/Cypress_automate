/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 11199
@story_name: Content Activity Report
@path: final/LiveLab
@test_case_name: Content Activity Report.js
@decription: 
@test_steps:
^To search the data based on advanced search condition
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Click on Search button without selecting any option rather than group by
-Warning message will be shown at the top of the page to select the some options. 

^based on advanced search condition as Period
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select the period as custom date but don't  select any other options
-Click on search button of the modal

^advanced search condition as Period and Start Date
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select the period as custom date and Start Date = 03-Dec-2109
-Click on search button of the modal

^advanced search condition. Period and End Date
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select the period as custom date and End Date = 03-Dec-2109
-Click on search button of the modal


^advanced search condition as Period, Start Date and End Date
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select the period as custom date and Start Date = 03- Dec-2019 End Date = 03-Dec-2109
-Click on search button of the modal

^advanced search condition as nachine
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select the Status = Autograding engine unreachable and Connection to machine for autograding failed.
-Click on search button of the modal

^advanced search condition as status
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select the Status = Autograding engine unreachable and Connection to machine for autograding failed.
-Click on search button of the modal

^advanced search condition as user
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Fill the User = 05kmr or prabhat.kumar@ucertify.com or any email id 
-Click on search button of the modal

^advanced search condition as content guid
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Fill the Content guid =0567y
-Click on search button of the modal

^advanced search condition as course code
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Fill the course code= 04KjS
-Click on search button of the modal

^advanced search condition as group by
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select group by Machine and there must be any other option must be selected. In this case i have selected the custom period as Today
-Click on search button of the modal

^To open the bugs for selected content guid
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select group by content and custom period as Today
-Click on search button of the modal
-After that Select any records 
-Click on open bugs

^To open the bugs for selected machine
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select group by Machine and there must be any other option must be selected. In this case i have selected the custom period as Today
-Click on search button of the modal
-After that Select any records 
-Click on open bugs

^Export p2 Issue
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Select group by Machine and there must be any other option must be selected. In this case i have selected the custom period as Today
-Click on search button of the modal
-After that Select any records 
-Click on open bugs

^Export as csv
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Search the record first and 
-Select the record to export 
-Click on export dropdown and select as Export as csv

^Export as xls
-First go to this url: https://www.ucertify.com/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vcenter_server_id=-1
-Click on search button dropdown. It will show the advanced search option. Click advanced search. It will open the modal.  
-Search the record first and 
-Select the record to export 
-Click on export dropdown and select as Export as xls

@test_data: 
-advanced search group by = content 
-Period = Custom Date
-Period = Custom Date,
-Start Date = 03-Dec-2019"
-Period = Custom Date,
-End Date = 03-Dec-2019"
-Period = Custom Date,
-Start Date = 03-Dec-2019
-End Date = 03-Dec-2019"
-Machine = pent
-Status = Autograding engine unreachable and Connection to machine for autograding failed.
-User = 05kmr
-User = prabhat.kumar@ucertify.com"
-Conteng guid = 0567y
-course code = 04KjS
-Period = Today
-Group by = Machine"
-Open bugs
-Open bugs
-p2 Issue
-Export as csv
-Export as xls

@result: Modal will be shown as it is.
*/
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Lab Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
    })
    it('Load the content activity logs page', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.get('[data-cy="srch_btn"]').click()
        cy.get('[data-cy=content_activity_tbl]').should('be.visible')
    })
    it('Select the period custom date and select on time date in start and end date field.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="select_auto_date"]').select("0", { force: true })
            cy.wait(2000)
            cy.get('[data-cy="updated_start_dt"]').focus().type('01-04-2021')
            cy.wait(2000)
            cy.get('[data-cy="updated_end_dt"]').focus().type('03-04-2021')
            cy.get('#content_activity_advance_search').focus()
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="updated_on"]').should('contain', data.content_lab.updated)
        })
    })
    it('Enter the machine to search the content activity for that machine.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy=vmname_txt]').type(data.content_lab.machine)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="machine_txt"]').should('contain', data.content_lab.machine)
        })
    })
    it('Select the multiple status to search the content activity.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="status_select"]').select("-2", { force: true })
            cy.get('[data-cy="status_select"]').select("-1", { force: true })
            cy.get('[data-cy="srch_btn"]').click()
        })
    })
    it('Enter the multiple user guid or email to search the record.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="user_id_txt"]').type(data.user_guid.two)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="user_de_txt"]').should('contain', data.author_email[6] + " " + "(" + data.user_guid.two + ")")
        })
    })
    it('Enter the content guid.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="content_guid_txt"]').type(data.user_guid.three)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con_txt"]').should('contain', data.user_guid.three)
        })
    })
    it('Enter the course code.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="ref_course_code_txt"]').type(data.content_lab.course_code)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="code_course_txt"]').should('contain', data.content_lab.course_code)
        })
    })
    it('Select the limit', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="limit_select"]').select("50", { force: true })
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="row_value"]').should('have.length', "50")
        })
    })
    it('Export the templates vm list as xls', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="main_check_mark"]').eq(0).click({ force: true })
            cy.get('[data-cy=export_btn]').click()
            cy.get('[data-cy="xls_export"]').click()
        })
    })
    it('Export the templates vm list as csv', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="main_check_mark"]').eq(0).click({ force: true })
            cy.get('[data-cy=export_btn]').click()
            cy.get('[data-cy="csv_export"]').click()
        })
    })
    it('Loading the content list page for the particular content.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="content_guid_txt"]').type(data.datastore.content_guid)
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con_txt"]').should('contain', data.datastore.content_guid)
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="con_list"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy=content_tbl]').should('have.value', '');
        })
    })
    it('Loading the content list page for the particular content.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="content_guid_txt"]').type(data.datastore.content_guid)
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con_txt"]').should('contain', data.datastore.content_guid)
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="con_act_list"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('#tablen').should('be.visible');
        })
    })
    it('Loading the device activity for the particular machine.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="dev_list"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('#tablen').should('be.visible');
        })
    })
    it('Loading the device activity report for the machine present in machine columns.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="dev_act_list"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('.table').should('be.visible');
        })
    })
    it('Loading the base vm to perform operation (on, off, backup, optimize, freeze, maintainence enable/disable) on that machine.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="load_machine"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy="alert_div"]').should('be.visible');
        })
    })
    it('Load the course (crn) for student.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="stu_view"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy=studyplanner]').should('be.visible');
        })
    })
    it('Load the particular content on machine to perform task.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="content_guid_txt"]').type(data.datastore.content_guid)
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con_txt"]').should('contain', data.datastore.content_guid)
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="test_cont"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy=submit_btn]').should('be.visible');
        })
    })
    it('Load the machine to test the autograding in base vm.', () => {
        cy.get('[data-cy="log_tab"]').click()
        cy.get('[data-cy="content_activity_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.fixture('global').then(data => {
            cy.wait(2000)
            cy.get('[data-cy="content_guid_txt"]').type(data.datastore.content_guid)
            cy.wait(2000)
            cy.get('[data-cy="srch_btn"]').click()
            cy.get('[data-cy="guid_con_txt"]').should('contain', data.datastore.content_guid)
            cy.get('[data-cy="action_con"]').eq(0).click()
            cy.get('[data-cy="test_auto"]').eq(0)
                .should('have.attr', 'href')
                .then((href) => {
                    cy.visit(href)
                })
            cy.get('[data-cy=submit_btn]').should('be.visible');
        })
    })
})