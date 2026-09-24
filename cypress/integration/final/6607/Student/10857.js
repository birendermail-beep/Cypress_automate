import { startPracticeLearn } from '../../../../support/student-practice'
/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 10857
@story_name: Action on Test History
@path: final/6607
@test_case_name: Action on Test History.js
@description: n/a
@test_steps:
^Action button
-visit the website
-login into page
-Perform any test.
-click on setting button to open settings 

^See result from action button
-visit the website
-login into page
-Perform any test.
-click on result option to see the result of this test  

^See review from action button
-visit the website
-login into page
-Perform any test.
-click on review option to review the test 

^Retest all from action button
-visit the website
-login into page
-Perform any test.
-click on re-test all to take the all test again 

^Retest wrong from action button
-visit the website
-login into page
-Perform any test.
-click on re-test wrong to take the all wrong test again 

@test_data: n/a
@result: Open test history page
*/


import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
import { visitDemoCourse } from '../../../../support/student-auth'
describe('Test history testing area', function() {
    it('opens the current Test History action menu', function() {
        visitDemoCourse()
        startPracticeLearn()
        StudentPage.endTest()

        cy.get('.icomoon-256px-practice-performance', { timeout: 30000 })
            .click({ force: true })
        cy.contains('a, button, [role="button"]', /Go to test history/i, {
            timeout: 30000,
        })
            .filter(':visible')
            .first()
            .click({ force: true })

        cy.get('table tbody tr:visible, .table-responsive tr:visible', {
            timeout: 30000,
        })
            .first()
            .within(() => {
                cy.get('td:visible')
                    .last()
                    .should('be.visible')
                    .then(($actionCell) => {
                        const $control = $actionCell
                            .find(
                                'button, a, [role="button"], ' +
                                '[data-bs-toggle="dropdown"], [data-toggle="dropdown"], i, span'
                            )
                            .filter(':visible')
                            .last()

                        cy.wrap($control.length ? $control : $actionCell)
                            .click({ force: true })
                    })
            })

        cy.get('body').should($body => {
            expect(
                /Result|Review|Retest\s+All|Retest\s+Wrong/i.test(
                    $body.text()
                ),
                'Test History action options'
            ).to.eq(true)
        })
    })
})
