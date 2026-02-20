/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11169
    @story_name: Action on Machine
    @path: final/LiveLab
    @test_case_name: Action on Machine
    @description: It will login and check the whole action items in Vmadmin.
    @test_steps:

    ^First check the checkbox for those machines which you want to power off & Make sure you have selected the powered-on machine
    - 1) Check the checkbox for any three machines
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Power State -> Off
    
    ^To enable the maintenance mode --> Manual
    - 1) Check the checkbox for any two machines
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Maintainence Mode
    - 5) Click on Enable
    
    ^To disable the maintenance mode --> Manual
    - 1) Check the checkbox for any three machines
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Maintainence Mode
    - 5) Click on Disable
    
    ^To load the course for the selected machines
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. it will show the many options in dropdown.  Click on course list 
    - 3) It will  open the new window with the course assigned to that machine
    
    ^To load the course for the selected machines
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. it will show the many options in dropdown.  Click on content list 
    - 3) It will  open the new window with content runnning on that machine
    
    ^To load the course for the selected machines
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. it will show the many options in dropdown.  Click on student list 
    - 3) It will  open the new window with students those who are using that machine
    
    ^To load the content activity logs for that machine
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. It will show the many options in dropdown.  Click on content activity
    - 3) It will  open the new window with content activity report for that machine
    
    ^To load the content activity report for that machine
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. It will show the many options in dropdown.  Click on content activity report
    - 3) It will  open the new window with content activity report for that machine
    
    ^To load the device activity report for that machine
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. It will show the many options in dropdown.  Click on device activity report
    - 3) It will  open the new window with device activity report for that machine
    
    ^To load the device activity report for that machine
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. It will show the many options in dropdown.  Click on device activity
    - 3) It will  open the new window with device activity for that machine
    
    ^To load the VM expiry logs for that machine
    - 1) Go to actions columns of any row of machine list page
    - 2) Click on actions button. It will show the many options in dropdown. Click on vm expiry
    - 3) It will  open the new window with vm expiry logs for that machine (lnxj)

    @test_data:
    - Power off
    - device = bs16
    - device = bs16
    - device =  lnxj
    - device =  lnxj, bs16
    - device =  lnxj, bs16
    - device =  lnxj
    - device =  lnxj
    - device =  lnxj
    - device =  lnxj
    - device =  lnxj

    @result: It will test whole action items in Vmadmin.
 */
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        LiveLabArea.vmMachineAction()
    })

    it('To load the courses that is assigned to that particular machine', () => {
        cy.get('[data-cy="course_list_action"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To load the content that is assigned to that particular machine', () => {
        cy.get('[data-cy="content_list_action"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="content_tbl"]').should('be.visible')
    })

    it('It will open the new window with students those who are using that machine', () => {
        cy.get('[data-cy="student_list_action"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    })

    it('To load the content activity logs', () => {
        cy.wait(5000)
        cy.get('[data-cy="content_activity_action"]').eq(0)
            .should('have.attr', 'href')
            // cy.get('[data-cy=data-cy=action_machine]').click()
            // cy.get('[data-cy=content_activity_action]').click()
            cy.fixture('global').then(data => {
                cy.visit(data.url+'/custom/docker/vmadmin/index.php?func=logs&action=content_activity&vmname=bs16&vcenter_server_id=3');
            })
    })

    it('To load the content activity report', () => {
        cy.wait(10000)
        cy.get('[data-cy="activity_rpt_action"]').eq(0)
            .should('have.attr', 'href');
            // cy.get('[data-cy=data-cy=action_machine]').click()
            // cy.get('[data-cy=activity_rpt_action]').click()
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/custom/docker/vmadmin/index.php?func=logs&action=content_activity_report&vmname=bs16&vcenter_server_id=3');
        })
    })

    it('To load the device activity for that machine', () => {
        cy.get('[data-cy="device_activity_report"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('#tablen').should('be.visible')
    })

    it('To load the device activity report for that machine', () => {
        cy.get('[data-cy="device_activity_rpt"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('#table_list').should('be.visible')
    })

    it('To load the vm expiry logs for that machine', () => {
        cy.get('[data-cy="vma_expiry"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('#table_list').should('be.visible')
    })
})