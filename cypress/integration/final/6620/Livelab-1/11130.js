/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10531
@story_id: 
@story_name: Connect the device
@path: final/LiveLab
@test_case_name: Connect the device.js
@decription: username, password from db only
@test_steps:
^Multiple Autograding Server Support
-For now this can be done on
-This need to be change in db https://www.screencast.com/t/dBUpqi14JBIi
-Load the course: MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016
-and content guid: 03LD7 (configure NLB operations)
-I have also generated the autograding unreachable issue for more than 4 times  https://www.screencast.com/t/4dLt0WqBiC
-After loading the lab click on submit button https://www.screencast.com/t/cJwUYRll
-Go to content Activity section and Search ->Advanced Search , Enter your email address in User and search the https://www.screencast.com/t/h5SUM2Qjt https://www.screencast.com/t/uLsKBOMBeCQ
-We can verify the second server ip from content activity logs https://www.screencast.com/t/S57wCESi

@test_data: 
-course: MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016 and content guid: 03LD7 (configure NLB operations)

@result: Autograding success message will be shown
*/


import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=pearson-70-740-lab');
        })
    })
    it('Multiple Autograding Server Support', () => {
        cy.get('[data-cy=labs]').click();
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=navigate_items&item_sequence=52');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.wait(7000);
        cy.get('[data-cy=submit_btn] > .toolbar-label').click();
        LiveLabArea.visitVmAdmin();
        cy.get('#logs_report').click()
        cy.get('[data-cy=content_activity_opt]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('#user_guid').type('prabhat.kumar@ucertify.com')
        cy.get('#adv_search_button').click();
        cy.get('[data-cy=content_activity_tbl]').should('exist');
    })
})