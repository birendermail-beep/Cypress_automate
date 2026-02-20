export default class SalesArea {
    static visitSmartSearch() {
        cy.fixture('global').then(data => {
            cy.visit(data.url+'/admin/inside_sales/smart_search.php')
        })
    }

    static kpiReportTab() {
        cy.get('#others_tab').click({force:true});
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({force:true});
        cy.get('[data-cy=kpi_report]').click({force:true});
        cy.get('#groups_list > :nth-child(2) > .dropdown-item').click({force:true})
    }

    static primaryContact() {
        cy.get('#list_dropdown').click({force:true});
        cy.get('.select2-selection__choice__remove').click({force:true});
        cy.get('#primary_contact').select('Ajeet Chauhan',{force:true});
    }
}