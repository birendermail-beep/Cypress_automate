/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id: 15454
@story_name: itp ucertify page
@path: final/6618/Website
@test_case_name: itp ucertify page
@description:N/A
@test_steps: 

^itp ucertify page
-Visit to https://itp.ucertify.com
-Login to website
-click on homepage

@test_data: n/a
@result: home page footer open
*/

import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('itp ucertify page', function() {
    it('Opening the itp ucertify page', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[12])
        })
        cy.get('.icomoon-help-new-1').trigger('mouseover', { force: true })
        cy.contains('For support return to your Pearson course and select support from there.')
    })
})