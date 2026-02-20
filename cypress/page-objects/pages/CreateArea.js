export default class CreateArea {
    static myProject() { //open my project tab in my library
        // cy.get('[data-cy="project"]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/?author_course=1&func=load_course&course=tech-support-2020')
        })
    }
    static myProjectPHP() { //open specific course PHP.
        cy.get('[data-cy="project"]').click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/index.php?author_course=1&func=load_course&course=VTVYOZURJ1JDNE1O')
        })
    }
    static myProjectOnly() { //Open my project tab only
        cy.get('[data-cy="project"]').click({ force: true })
    }
    static lessonPreview() { //Lesson Preview from KD.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/project.php?func=view_full_asset&from_myproject=1&course_code=05GHl&chapter_guid=05Y1I')
        })
    }
    static chapterPreview() { //Chapter Preview from KD.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/edit/index.php?action=get_raw_data')
        })
    }
    static contentDiagnostic() { //Content Diagnostic Image.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=id&course_code=05hhb&no_header=1')
        })
    }
    static contentDiagnosticVideo() { //Content Diagnostic Video.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=*&course_code=05hhb')
        })
    }
    static contentDiagnosticXML() { //Content Diagnostic XML.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=xd&course_code=05Gfk')
        })
    }
    static contentDiagnosticHTML() { //Content Diagnostic HTML.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=hd&course_code=05Gfk')
        })
    }
    static contentDiagnosticMD() { //Content Diagnostic MD.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=md&course_code=05Gfk')
        })
    }
    static contentDiagnosticUD() { //Content Diagnostic UD.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=ud&course_code=05Gfk')
        })
    }
    static contentDiagnosticOD() { //Content Diagnostic OD.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=od&course_code=05Gfk')
        })
    }
    static contentDiagnosticSD() { //Content Diagnostic SD.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/ext/content_diagnostic/?action=report&report=sd&course_code=05Gfk')
        })
    }
    static itembankEditor() { //Open the item in the Editor.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/editor/?action=edit&content_guid=05Ypn&in_frame=1&react_content=1&from_ebook=1&from_myproject=1&from_educator=1&no_header=1&add_coverage=1&e=0&d=0&p1=05Y1I&p2=05Y1i&from_myproject=1&group_type=q,u,f&is_flashcard=1&isPublished=1')
        })
    }
    static knowledgeFuctionality() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/editor/?action=edit&content_guid=05j99&in_frame=1&react_content=1&from_ebook=1&from_educator=1&no_header=1&add_coverage=1&e=0&d=0&p1=05Jnw&p2=&from_myproject=1&group_type=q,u,f&is_flashcard=1&course_code=05Jnw&new_title=%20Lession_1&from_myproject=1')
        })
    }
    static knowledgeFuctionalitySetting() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/educator/project/project.php?func=view_full_asset&from_myproject=1&course_code=05Jnw&chapter_guid=05j99')
        })
    }
    static itemVisit() { //Visit editor thorugh itembank.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/editor/?action=new&no_header=1&in_frame=1&from_temp_id=-01bB&from_myproject=1&react_content=1&from_coverage=1&from_educator=1&add_coverage=1&course_code=05GHl&content_type=q&content_subtype=1&content_icon=3&p1=05gaD&p2=05QQw&e=-1&task_obj=&new_title=&from_coverage_edit=1&todo_table=1&from_myproject=1')
        })
    }
    static todoVisit() { //Visit editor thorugh TODO.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/editor/?action=edit&no_header=1&content_guid=062Ob&in_frame=1&from_myproject=1&react_content=1&from_educator=1&from_coverage=1&add_coverage=1&course_code=05GHl&from_myproject=1')
        })
    }
    static openTodo() { //Opening TODO
        cy.get('[data-cy="todo"]').click()
    }
    static openComment() { //Open comment in modal todo.
        cy.get('[data-cy="comments"]').click()
    }
    static openLibrary() { //Click on my library on welcome page.
        cy.get('[data-cy="mylibrary"]').click()
    }
    static courseComponent() { //Assertion for knowledge check page.
        cy.contains('[data-cy="coursestruct"]', 'Course Structure', true)
    }
    static projectSetup() { //Opening Project Setup
        cy.get('.settingup > .dashboard_item > p').click()
    }
    static knowledgeDomainMain() { //Knowledge check click on lesson
        cy.get('[data-cy="main_part"]').dblclick({ force: true })
    }
    static knowledgeDomainMouseover() { //Knowledge check mouseover event
        cy.get('[data-cy="right_side"]').eq(0).trigger('mouseover')
    }
    static itemBank() { //Opening item bank.
        cy.get(':nth-child(2) > .dashboard_item > h3').click({force:true})
        cy.wait(5000);
    }
    static studentView() { //Opening Student View.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course_code=05GHl&reload=1')
        })
    }
    static studentVisit() { //Opening Student View in specific course.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=load_course&course_code=05GHl&reload=1')
        })
    }
    static examObjective() { //Opening Exam Objective.
        cy.get(':nth-child(2) > .dashboard_item > h3').click({force:true})
        cy.wait(5000);
    }
    static design() { //Opening Design.
        cy.get(':nth-child(3) > .dashboard_item > h3').click({force:true})
    }
    static chapterButton() { //Click on chapter button.
        cy.get('[data-cy="chapters"]').click({ force: true })
    }
    static resources() { // Opening Resources.
        // cy.get('[data-cy="resources"]').click()
        this.itemBank();
        cy.get('.resources_accordian > .card > .card-header').click({force:true});
    }
    static goBack() { //Go back button.
        cy.go('back')
    }
    static assignment() { //Opening Assignment.
        cy.get('[data-cy="assignment"]').click()
    }
    static contentDiagnosticOpen() { //Opening Content Diagnostic Feature in Dashboard
        cy.get('.icomoon-grid').click();
        cy.get(':nth-child(6) > .outline1')
            .should('have.attr', 'href')
            .then((href) => {
                cy.visit(href)
        })
    }
    static addTask() { //Add new task.
        cy.get('[data-cy="addtask"]').click()
    }
    static epubOpen() { //Open epub.
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/author/epub/index.php?func=view_full_asset&is_overlay=1&course_code=05GHl&chapter_guid=05gaD')
        })
    }
    static additem() { //Add item in item bank.
        cy.get('[data-original-title="Add"]').eq(0).click()
        cy.wait(3000);
        cy.get('.brtopryt').contains('Lesson').click()
        cy.get('#content_title').type('Testing')
        cy.get('.save_content').contains('Save').click()
        cy.wait(30000);
        cy.get('[data-cy=right_side] > .circle_items').eq(0).click()
    }
}