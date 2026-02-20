
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18603
@story_name: Dashboard error for vm tasks
@path: final/6620/Livelab-2
@test_case_name: LB_Err_1
@description: Reported and saving all the errors of livelab in the module error logs monitoring.
@test_steps:
^Dashboard error for vm tasks
- Go to this url: https://www.ucertify.com/utils/server_log.php?func=module_error .
- Select module error.
- Scroll down and check the error for the livelab.
- Reference video screenshot: https://www.screencast.com/t/js39C2dKeso0 . 
@test_data: Vm tasks error logs and all errors in vmadmin area. 
@result: Error logs are showing in the dashboard
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Autofit disable as default', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url);
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password);
            cy.visit(data.url + '/utils/server_log.php?func=module_error');
            cy.get(':nth-child(4) > h4').scrollIntoView();
        })
    })
})