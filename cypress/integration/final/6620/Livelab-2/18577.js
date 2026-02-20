
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18577
@story_name: User Abstraction
@path: final/6620/Livelab-2
@test_case_name: LB_UA_02
@description: If the User abstraction selected from device attributes then child machine name will be in the format of lbuser_ + (three digit number) + machine name (lbuser_001_bs16) and after expiry it will be deleted automatically.
@test_steps:
^User Abstraction
- Go to the machine list page and load the machine. search the machine name as bs16.
- Edit the machine and change the Device attributes option as user abstraction. reference video screenshot: https://www.screencast.com/t/bPqbCQIjd
- Open the crn cw81-testing and guid 06ayY (prabhat testing guid) from your library.
- On/Connect the machine from left bottom corner
- After machine connected successfully, go to device activity and check the machine name as shown in the video screenshot. https://www.screencast.com/t/fDaTekIVD
- After 1,2 hours you can check the machine's reset log from device activity.
@test_data: device= bs16
@result: child machine name is lbuser_001_bs16
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('User Abstraction', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        LiveLabArea.visitVmAdmin()
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.wait(7000);
        cy.get('[host="s5.ucertify.com"] > :nth-child(14) > .dropdown > [data-cy=action_machine]').click();
        cy.get('[data-cy=machine_edit]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('#select2-device_attributes-container > .select2-selection__clear').click();
        // cy.get('.device_attributes-group > .col-md-7 > .select2-container > .selection > .select2-selection').click();
        cy.wait(1000);
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('User abstraction{enter}')
        // cy.contains('User abstraction').click({ force: true })
        // cy.get('[data-cy=submit_device_btn]').click();
        // cy.fixture('global').then(data => {
        //     cy.visit(data.url + '/?func=get_course_list&show=courses');
        //     cy.get('[data-cy=searchbox]').type('cw81-testing');
        //     cy.visit(data.url + '/?func=load_course&course=cw81-testing');
        //     cy.get('[data-cy=labs]').click();
        //     cy.wait(8000);
        //     cy.get('#adv_search').type('prabhat2 testing guid');
        //     cy.visit(data.url + '/?func=navigate_items&item_sequence=82');
        // })
        // cy.get('.switch_device_dropdown').click();
        // cy.get('[data-cy=status_machine]').click();

        // LiveLabArea.visitVmAdmin();
        // cy.get('#logs_report').click()
        // cy.get('#device_activity')
        //     .should('have.attr', 'href')
        //     .then((href) => {
        //         cy.visit(href)
        //     })
        // cy.get('[data-cy="sch_btn_adv"]').click()
        // cy.get('[data-cy="mng_adv_srch"]').click()
        // cy.wait(5000)
        // cy.get('#user_guid').type('testbot@ucertify.com{enter}');
        // cy.contains('Autom06OEg0bs16').should('exist');
    })
})