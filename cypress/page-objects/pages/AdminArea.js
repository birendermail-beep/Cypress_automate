export default class AdminArea {
    static visitOrderbook() {
        cy.get('[data-cy="start_button"]').eq(1).click()
    }

    static visitMyLibrary() {
        cy.get('[data-cy=mylibrary]').click()
    }

    static visitOrderbookOtherTab() {
        cy.get('[data-cy="other_tab"]').click()
    }

    static visitInsideSalesReport() {
        cy.get('[data-cy="other_start"]').eq(1).click()
    }

    static visitInsideSales() {
        cy.get('[data-cy="other_start"]').eq(0).click()
    }

    static emailRoster() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
        })
        cy.get('[data-cy=custom_btn]').click()
    }

    static emailRosterAction() {
        cy.fixture('global').then(data => {
            cy.wait(3000);
            cy.get('[data-cy=roster_email]').clear().type(data.auditor_email[2]);
        })
        cy.get('[data-cy=custom_btn]').click()
        cy.wait(5000);
        cy.get('[data-cy="roster_table"]').should('be.visible')
        cy.get('[data-cy="admin_track_modal"]').eq(0).click();
    }

    static administratorAS() {
        cy.get('[data-cy="administrators_sub"]').click()
        cy.get('[data-cy=advance_srch]').click()
        cy.get('[data-cy=custom_btn]').click()
    }

    static setOrg() {
        cy.get('#org_id').select('00WwL', { force: true })
    }

    static administratorInsAS() {
        cy.get('[data-cy=track_link]').click()
        cy.get('[data-cy=advance_srch]').click({force: true})
        cy.get('#status').select('Available', { force: true })
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="course_action"]').eq(0).click()
    }

    static visitAdmin() {
        cy.get('.icomoon-incorrect').click();
        cy.get('[data-cy=admin_tab]').contains('Admin').click()
    }
    static visitAdminPanel() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin')
        })
    }
    static visitEducatorRoster() {
        cy.get('[data-cy=roster_link]').click()
    }

    static visitEducatorManage() {
        cy.get('[data-cy="manage_link"]').click()
    }

    static visitEducatorReport() {
        cy.get('[data-cy=report_link]').click()
    }
    static visitAdminArea(url) {
        cy.visit(url + "/admin");
    }

    static administratorIns() {
        cy.get('[data-cy=track_link]').click()
        cy.get('[data-cy=advance_srch]').click()
        cy.get('#status').select('Available', { force: true })
        cy.get('[data-cy=custom_btn]').click()
    }

    static administratorSection() {
        cy.get('[data-cy=section_link]').click()
        cy.get('[data-cy=advance_srch]').click()
        cy.get('#status').select('Active', { force: true })
        cy.get('[data-cy=custom_btn]').click()
    }

    static administratorInsLink() {
        cy.get('[data-cy=ins_link]').click()
        cy.get('[data-cy=advance_srch]').click()
        cy.get('#status').select('Active', { force: true })
        cy.get('[data-cy=custom_btn]').click()
        cy.get('[data-cy="manage_admin_action"]').eq(0).click()
    }

    static salesActivityReport() {
        cy.get('[data-cy="kpi_report"]').click()
        cy.get('[data-cy="account_manager_act_report"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static salesAccountManager() {
        cy.get('[data-cy="kpi_report"]').click()
        cy.get('[data-cy="account_manager_board"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static salesLeaderboard() {
        cy.get('[data-cy="kpi_report"]').click()
        cy.wait(10000);
        cy.get('[data-cy="leader_board"]')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
        cy.wait(7000);
    }

    static salesInsPortal() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="text_area_sales"]').type(data.author_email[5])
        })
        cy.get('[data-cy="search_btn_append"]').click()
        cy.get('[data-cy="action_sales"]').eq(0).click()
        cy.get('[data-cy="edit_opt"]').
            should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
            })
    }

    static leaderboardDash() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/admin/inside_sales/instructor_portal.php')
            cy.wait(7000);
            cy.get('[data-cy="kpi_report"]').click()
            cy.wait(7000);
            cy.get('[data-cy=leader_board]').should('have.attr', 'href').then((href) => { cy.visit(href) });
            // cy.visit(data.url + '/admin/inside_sales/account_managers_leaderboard.php')
        })
    }

    static visitProductArea() {
        cy.get('[data-cy=other_tab]').click({ force: true });
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({ force: true });
        cy.get('[data-cy=text_area_sales]').type('testbot@ucertify.com', { force: true });
        cy.get('[data-cy=search_btn_append]').click({ force: true });
        cy.get('[data-cy=action_sales]').click({ force: true });
    }

    static visitProductArea2() {
        cy.get('#others_tab').click({ force: true });
        cy.get('.marker > :nth-child(3) > [data-cy=other_start]').click({ force: true });
        cy.get('[data-cy=text_area_sales]').type('testbot@ucertify.com', { force: true });
        cy.get('[data-cy=search_btn_append]').click({ force: true });
    }
}