/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: VM Expiry
@path: final/LiveLab
@test_case_name: VM Expiry
@description: Increase the expiry time of child machine from vmadmin area 
@test_steps:

^To increase the expiry time fo child machine for 1 day, 2days from vmadmin area
-Go to machine list page: https://ucertify.com/custom/docker/vmadmin/index.php?func=devices&action=list&vcenter_server_id=-1
-Search bs16 machine
-Go to actions and click on Test Autograding https://www.screencast.com/t/JA11L1SL
-On/Connect the machine  https://www.screencast.com/t/JA11L1SL
-After machine connected successfully. Go to  vm expiry Logs section https://www.screencast.com/t/xALnoaaj46
-Go to Search->Advanced Search. Modal will be opened. Enter child machine name in Machine option https://www.screencast.com/t/Y5ur1emFzN https://www.screencast.com/t/qGLRUC4cg
-Then click Search button of the modal
-Child machine created from your name will be shown
-Go to Actions and click on Increase expiry time. It will open the modal with dropdown of the time.https://www.screencast.com/t/yHt60I1ICp https://www.screencast.com/t/U8GpsfqF
-Time will be updated and page will be refreshed and you can check the expiry time from earlier. https://www.screencast.com/t/qQzB3RQFbbqq https://www.screencast.com/t/kQOOXG6u

@test_data: n/a
@result: machine: Prabh05kmr0bs16 Base machine: bs16
*/



import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index' 
describe('VM Expiry', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/custom/docker/vmadmin/index.php?func=devices&action=list&vcenter_server_id=-1");
        })
    })
    it('expiry time', function() {
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[data-cy=action_btn]').click();
        cy.get('[data-cy=test_autograding]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
        });
        cy.get('.switch_device_dropdown').click();
        cy.get('[data-cy=status_machine]').click();
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/custom/docker/vmadmin/index.php?func=devices&action=list&vcenter_server_id=-1");
        })
        cy.get('#logs_report').click();
        cy.get('#vm_expiry')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
        });
        cy.get('[data-cy=sch_btn_adv]').click();
        cy.get('#mng_advance_search').click();
        cy.wait(4000);
        cy.get('#vmname').type('Prabh05kmr0bs16');
        cy.get('#adv_search_button').click();
        cy.wait(3000);
        cy.get('#table_list > .col-md-12').should('exist');
    })
})