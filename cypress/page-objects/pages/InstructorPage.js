import BasePage from "../BasePage";

export default class InstructorPage extends BasePage {
    static openEducatorDashboard() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('Technical Support Engineer')
        cy.get('[crn="tech-support-2020"]').contains('Manage').click({ force: true })
        cy.get('.span13 > .btn-primary').eq(1).should('have.attr', 'href').then((href) => {
            cy.visit(href)
        })
    }
    static showManage() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('lo-a')
        cy.get('[crn="LO-Aplus-complete"]').contains('Manage').click({ force: true })
    }
    static visitCourse() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=02pzx.05qrv");
        })
    }
    static showTechManage() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('tech')
        cy.get('[crn="tech-support-2020"]').contains('Manage').click({ force: true })
    }
    static visitCourseSupport() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=ins_dashboard&u_course_code=03Hy5.05SOh");
        })
    }
    static visitTechCourse() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=ins_dashboard&u_course_code=03Hy5.05SOh");
            cy.get('[intro-id="design"] > [data-cy=educator_design]').click()
            cy.wait(3000);
        })
    }
    static visitTestingTag() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=04Kst.05LF4");
        })
    }
    static trackRoster() {
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=roster_track_cy]').click()
    }
    static filterAssessment() {
        cy.get('[data-cy=track]').click()
        cy.get('#edu_tab_block [aria-label="Assessments"]').click()
        cy.get('.toggle_assignment').click()
    }
    static trackExport() {
        cy.get('[data-cy=track]').click()
        cy.get('#edu_export_block a[aria-label="Export"]').click()
        cy.get('#download_gradebook').click()
        cy.get('.m-l-n-md > .custom_checkbox_new > .check_mark_custom').click({ force: true })
    }
    static trackResult() {
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Lessons"] > .ml-sm').click()
        cy.get('.peity').eq(1).click({ force: true })
    }
    static prepengineStudentView() {
        cy.get('[data-cy=track]').click()
        cy.get('[data-cy=prepengine_cy]').click()
        cy.get('[data-cy=prepengine_student_view_cy]').click()
    }
    static visitNewTagCourse() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=class_edit&u_course_code=04Kst.05M7h");
        })
    }
    static visitSalesStaff() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/?func=ins_dashboard&u_course_code=02sBw.03yJU");
        })
    }
    static quizHistory() {
        cy.get('[data-cy=track]').click()
        cy.get('[aria-label="Lessons"] > .ml-sm').click()
            // cy.get('.pointer.history_modal.quiz_history').eq(0).click()
            // cy.get('.header_05Vc3 > [chapter_guid="06krs"] > .pointer > .peity').click();
    }
    static advSearch() {
        cy.get('[data-cy=search_btn]')
            .contains("Search")
            .click({ force: true });
        cy.get('[data-cy=adv_search]')
            .contains("Advance Search")
            .click({ force: true });
    }
    static visitShopping() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/cart/index.php");
        })
    }
    static keyValue() {
        cy.get('#key').type("AB_3680");
        cy.get('#secret').type("PERXLYPLZBCJWLLX");
    }
    static showDemoManage() {
        cy.get('[data-cy="mylibrary"]').click({ force: true })
        cy.get('[data-cy="searchbox"]').type('Platform Demo')
        cy.get('[crn="Demo.AA1"]').contains('Manage').click({ force: true })
        cy.get('[data-cy="desk_copy"]').click({ force: true })
    }
    static visitTestingProject(url) {
        cy.get('[href="' + url + '/educator/project/project.php?author_course=1&func=load_course&course=5TXCUHIPAYJ7SYNM"]').click({ force: true })
    }
    static clickonAdmin() {
            cy.get('[data-cy=mylibrary]').click({ force: true })
            cy.get('[data-cy=admin_tab]').click({ force: true })
        }
        //steps is opening the course
    static openEducatorDashboard() {
            cy.get('[data-cy="mylibrary"]').click({ force: true });
            cy.get('[data-cy="searchbox"]').type('Technical Support Engineer - uCertify');
            cy.get('[crn="tech-support-2020"]').contains('Manage').click({ force: true });
        }
        //visit the eduactor dashboard
    static visitEducatorDashboard(url) {
            cy.visit(url + '/educator/?func=roster&u_course_code=02pzx.05qrv');
        }
        //export the data
    static exportButtonEducator() {
        cy.get('[data-cy=export_track_cy]').click({ force: true }).then(() => {
            cy.get('[data-cy=download_gradebook_cy]').click({ force: true })
            cy.get('[data-cy=checkall_cy]').click({ force: true })
            cy.get('[data-cy=convertto_zero_cy]').click({ force: true })
            cy.get('[data-cy=watch_gradebook_cy]').click({ force: true })
            cy.get('[data-cy=download_cy]').click({ force: true })
        })
        cy.get('[data-cy=export_track_cy]').click({ force: true }).then(() => {
            cy.get('[data-cy=export_attendance_modal_cy]').click({ force: true })
            cy.get('[data-cy=att_sdt_cy]').click({ force: true })
            cy.get('.datepicker-days > .table-condensed > tbody > :nth-child(1) > :nth-child(1)').click({ force: true })
            cy.get('[data-cy="att_edt_cy"]').click({ force: true })
            cy.get('.table-condensed > tbody > :nth-child(4) > :nth-child(6)').click({ force: true })
            cy.get('[data-cy=attendance_go_cy]').click({ force: true })
            cy.get('[data-cy=download_attendance_cy]').click({ force: true })
        })
    }
    static visitCourseForQuiz() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/educator/index.php?func=chapterwise_performance&action=&u_course_code=02hhS.05uGp&class_code=05uGp");
        })
    }
}