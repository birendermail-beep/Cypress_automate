
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18575
@story_name: Not user abstraction
@path: final/6620/Livelab-2
@test_case_name: LB_UA_01
@description: If this option selected then child machine name will be with old format: Prabh05kmr0bs16
@test_steps:
^Not user abstraction
- Go to machine list page and search the all list.
- Search the bs16 machine from machine list page.
- Click to setting icon dropdown and select edit machine.
- Change the device attributes to Not User Abstraction.
- Go to the my library and open the crn: cw81-testing.
- Load the content prabhat testing guid.
- On the machine.
- Go to the device activity page and see the logs from advanced search modal by entering your email in user input box.
- You will observer the machine name in the format of 5 char (User first_name + last_name) + device_id + 0 + machine name.
@test_data: device= bs16
@result: child machine name: Prabh05krm0bs16
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Not user abstraction', () => {
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
        cy.get('.device_attributes-group > .col-md-7 > .select2-container > .selection > .select2-selection').click();
        cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Not user abstraction{enter}')
        cy.get('[data-cy=submit_device_btn]').click();
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=get_course_list&show=courses');
            cy.get('[data-cy=searchbox]').type('cw81-testing');
            cy.visit(data.url + '/?func=load_course&course=cw81-testing');
            cy.get('[data-cy=labs]').click();
            cy.wait(8000);
            cy.get('#adv_search').type('prabhat2 testing guid');
            cy.visit(data.url + '/?func=navigate_items&item_sequence=82');
        })
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();

        LiveLabArea.visitVmAdmin();
        cy.get('#logs_report').click()
        cy.get('#device_activity')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('#user_guid').type('testbot@ucertify.com{enter}');
        cy.contains('lbuser_001_bs16').should('exist');
    })
})