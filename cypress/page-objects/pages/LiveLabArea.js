import BasePage from "../BasePage"

export default class LiveLabArea extends BasePage {
    static visitCustomArea(url) {
        cy.visit(url + '/custom/docker/vmadmin')
    }

    static visitVmAdmin() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php')
        })
    }

    static loadButton() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?content_guid=03Pd1&func=load_machine&student_email=vivek.singh@ucertify.com')
        })
    }

    static loadButtonContent() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?content_guid=05f9L&func=load_machine&student_email=chetan.singhal@ucertify.com')
        })
    }

    static vmaMemberList() {
        cy.get('.input-group-append > .dropdown-toggle').click({ force: true });
        cy.get('#mng_advance_search').click({ force: true });
        cy.get('#adv_search_button').click({ force: true });
    }

    static vmDatastore() {
        cy.get('[data-cy="catalogue_tab"]').click()
        cy.get('[data-cy="datastores_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
    }

    static vmMachineAction() {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[0])
        })
        cy.get('[data-cy="search_txt_btn"]').click()
        cy.get('[data-cy="action_machine"]').eq(0).click({ force: true })
    }

    static advanceSearch() {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(8000)
    }

    static vmAddDevice() {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="add_new_device"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static vmEditDevice() {
        cy.get('[data-cy="sch_btn_adv"]').click()
        cy.get('[data-cy="mng_adv_srch"]').click()
        cy.wait(5000)
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="search_txt"]').clear().type(data.livelab[10])
        })
        cy.get('[data-cy="action_machine"]').eq(0).click({ force: true })
        cy.get('[data-cy="machine_edit"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static machineAction() {
        cy.get('[data-cy="action_machine"]').eq(2).click({ force: true })
        cy.get('[data-cy="test_autograding"]').eq(0)
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static vmCourseList() {
        cy.get('[data-cy="catalogue_tab"]').click()
        cy.get('[data-cy="course_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static vmContentList() {
        cy.get('[data-cy="catalogue_tab"]').click()
        cy.get('[data-cy="content_opt"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static ConnectingDevice_bs16() {
        cy.get('[data-cy=search_txt]').type('bs16{enter}');
        cy.get('[host="s5.ucertify.com"] > :nth-child(14) > .dropdown > [data-cy=action_machine]').click({ force: true });
        cy.get('[data-cy=test_autograding]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }
}