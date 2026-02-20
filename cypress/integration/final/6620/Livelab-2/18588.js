
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18588
@story_name: QR Code for the mobile
@path: final/6620/Livelab-2
@test_case_name: LB_QR_01
@description: New feature implemented, now user can scan the QR code from setting option and load the same content in mobile view
@test_steps:
^QR Code for the mobile
- Load the course: Microsoft Office 2016, crn (Microsoft ITC-CS1010).
- Go to the setting icon from the right bottom bar.
- Click on Scan QR code option. QR code modal will be shown.
- Open the QR code scanner app from your mobile phone.
- Load the url in any browser and observe the content the same as shown in the webview.
- Refrence video sc: https://www.screencast.com/t/ta9BVxqvf, https://www.screencast.com/t/xsy9jBrf
@test_data: crn= Microsoft ITC-CS1010, Item=9 .
@result: QR code showing and working on mobile.
*/

import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    it('Container Instance', () => {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + '/?func=load_course&course=ITC-CS1010&desk_copy=1');
            cy.get('.android > img').click();
            cy.get('.qrcode').should('exist');
            // rest of the steps must be performed manually
        })
    })
})