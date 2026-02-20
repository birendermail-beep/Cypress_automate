export default class FocusArea {
    static myFocus() { //open my project tab in my library
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/focus/index.php')
        })
    }

    static myReport() { //open my project tab in my library
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/focus/index.php?func=reports')
        })
    }

    static myRollReport() { //open my project tab in my library
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/focus/index.php?func=reports&search_type=0&action=advance_search&subaction=bug_person_wise&rollup=1')
        })
    }

    static myQqReport() { //open my project tab in my library
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/focus/focus_main.php?func=qq')
        })
    }
}