/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 
@story_id: 14956
@story_name: ciw course
@path: final/6607/Student
@test_case_name: ciw course
@description: N/A   
@test_steps:

^pe-course-list-horizontal
-go to ucertify.com?host=ciw.ucertify.com
-top title section scroll down

@test_data: n/a
@result: top courses list down
*/
describe('Student Area', function() {
    it('pe-course-list-horizontal', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.website[3])
        })
        cy.get('#recently_updated_courses > .container > :nth-child(1) > .text-center').scrollIntoView()
    })

})