/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id:
@story_id:15003
@story_name: Resend Activetion
@path: final/6607/Student
@test_case_name: Resend Activetion
@description:
@test_steps:
^pe-resend_activation
-go to url https://www.ucertify.com/login.php?func=resetpassword&email=surya.mani@ucertify.com&code=ntvtws6cdh
-click on resend button

@test_data: n/a
@result: password resend successfully
*/
describe('Student Area', function() {
    it('pe-resend_activation', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/login.php?func=resetpassword&email=' + data.author_email[1] + '&code=ntvtws6cdh')
        })
        cy.get('.clearfix > .btn-light').click()
    })

})