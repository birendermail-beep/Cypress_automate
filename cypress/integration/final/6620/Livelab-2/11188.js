/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11188
    @story_name: Test Autograding
    @path: cypress\integration\final\LiveLab
    @test_case_name: Test Autograding
    @description: It will login and test of Autograding.
    @test_steps: 
    ^Go to actions buttons and click on test auto-grading
    - 1) Click on actions button beside the export button 
    - 2) There dropdown options will be shown
    - 3) Click on Test Autograding
    
    ^Check the checkbox present in the first column of each row for which you want to test the auto-grading and click on Test Autograding
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Testing Autograding

    ^Click on the machine below the left corner and then click on "on" to on the machine
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Testing Autograding
    - 5) Click on machine below the left corner and then click on on  to on the machine
    - 6) After poweredon successfully. click on autograding diagnosis icon. in Testing tab result will be shown 
    
    ^To check the exercise tab
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Testing Autograding
    - 5) Click on Exercise tab
    - 6) It will show the machine detail
    
    ^To check the Evidence tab
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Test Autograding and it will load the lab
    - 5) Click on Evidence tab
    - 6) Click on Choose it will open the window to upload the file
    - 7) Select any file click on upload 
    - 8) File will be uploaded
    
    ^To check the uploaded file 
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Test Autograding and it will load the lab
    - 5) Click on Evidence tab
    - 6) It will show the uploaded files
    - 7) Click on the download option to download the files
    
    ^Click on the timer icon to update the expiry time
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Test Autograding and it will load the lab
    - 5) Click on timer icon
    - 6) modal will open where you can select the time to update
    - 7) Click on save button. 
    - 8) It will update the time
    
    ^Click on the submit button it will open the dropdown with two options, Click on Evaluate, Hide Explanation, Click on Evaluate "
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Test Autograding it will load the machine
    - 5) Click on submit button
    - 6) Click on Evaluate. It will shown in green color
    - 7) Nothing will happen.
    
    ^Click on the submit button it will open the dropdown with two options, click on the evidence tab, Go to the submit button right bottom corner. Click on Hide Explanation 
    - 1) Check the checkbox for bs16
    - 2) Click on actions button beside the export button 
    - 3) There dropdown options will be shown
    - 4) Click on Test Autograding and it will load the lab
    - 5) Click on submit button
    - 6) Click on Hide Explanation. 

    @test_data:
    - action = test autograding
    - machine= bs16
    - machine= bs16
    - machine= bs16
    - machine= bs16
    - machine= bs16
    - time = 10
    - machine = bs16
    - machine = bs16

    @result: Testing of Autograding functionality.
 */
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from './../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        LiveLabArea.advanceSearch()
        cy.get('[data-cy="search_btn"]').click()
        cy.wait(10000);
    })
    it('Go to actions buttons and click on test autograding', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        LiveLabArea.machineAction()
        cy.get('[data-cy="full_screen"]').should('be.visible')
        cy.get('[data-cy="full_screen"]').click()
    })

    it('click on machine below the left corner and then click on "on" to on the machine', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        LiveLabArea.machineAction()
        cy.wait(10000);
        cy.get('[data-cy="full_screen"]').should('be.visible')
        cy.get('.switch_device_dropdown').click()
        cy.get('[data-cy="status_machine"]').click()
        cy.get('[data-cy="diagnosis_btn"]').click()
    })

    it('To check the exercise tab', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        LiveLabArea.machineAction()
        cy.get('.lab-excersise > .nav-link').click()
        cy.get('#device_tab_wrapper').should('be.visible')
    })
    it('To check the Evidence Tab', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        LiveLabArea.machineAction()
        cy.get('.evidence_tab_link > .nav-link').click()
        cy.wait(1000)
        cy.get('[data-cy="file_path_text"]').should('be.visible')
    })

    it('To check the Timer functionality', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        //LiveLabArea.machineAction()
        cy.get('[data-cy="action_machine"]').eq(0).click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=load_machine&action=autograding&device=bs16&vcenter_server_id=6');
        })
        cy.wait(10000);
        cy.get('.switch_device_dropdown').click()
        cy.get('[data-cy="status_machine"]').click()
        cy.wait(30000)
        cy.get('[data-cy="timer_modal"]').click()
        cy.wait(30000);
        cy.get('[data-cy="save_btn"]').click()
        cy.get('[data-cy=errormsg]').should('be.visible')
    })

    it('Click on Evaluate. It will shown in green color', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        LiveLabArea.machineAction()
        cy.wait(10000);
        cy.get('.switch_device_dropdown').click()
        cy.get('[data-cy="status_machine"]').click()
        cy.wait(30000)
        cy.get('[data-cy="submit_btn"]').click()
        cy.get('[data-cy="evaluate_btn"]').click()
    })

    it('Click on Hide Explanation.', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        LiveLabArea.machineAction()
        cy.wait(10000);
        cy.get('.switch_device_dropdown').click()
        cy.get('[data-cy="status_machine"]').click()
        cy.wait(30000)
        cy.get('[data-cy="submit_btn"]').click()
        cy.get('[data-cy="show_explanation"]').click()
    })
})