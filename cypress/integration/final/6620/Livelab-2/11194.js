/*
    @author: Ankit Kumar
    @master_project_id: 6620
    @phase_id: NA
    @story_id: 11194
    @story_name: Course List
    @path: final\LiveLab
    @test_case_name: Course List
    @description: It will login and check the course table coming in catalogue.
    @test_steps: 
    
    ^To load the course list for "Ucertify Virtual Lab".
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Select the componet as Ucertify Virtual Lab.
    - 7) Click on search button of the modal.

    ^To load the course list for Ucertify Practice IT.
    - 1) Click to catalog tab of the main page.
    - 2) Click on courses.
    - 3) It will load the URL for the course list.
    - 4) Click on search -> Advanced search.
    - 5) The modal will be opened.
    - 6) Select the component as "Ucertify Practice IT".
    - 7) Click on the search button of the modal.

    ^To load the course for course code.
    - 1) Click to catalog tab of the main page.
    - 2) Click on courses.
    - 3) It will load the URL for the course list.
    - 4) Click on search -> Advanced search.
    - 5) The modal will be opened.
    - 6) Enter the course code in the search input field
    - 6) Select the component as "All Virtual Lab"
    - 7) Click on the search button of the modal.

    ^Make sure you have entered the crn. You can enter only one crn at a time.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the URL for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the crn in crn textarea field to search the course
    - 7) Click on the search button of the modal.

    ^Make sure you have entered the correct course code.  Make sure you have entered the one-course code.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the course code in code text field to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have entered the ISBN course code.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the ISBN in ISBN text field to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have selected the visibility.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the crn in crn textarea field to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have selected the status.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the status.
    - 7) Click on the search button of the modal.
    
    ^Make sure you have entered the correct created on the date.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the created on date
    - 7) Click on the search button of the modal.
    
    ^Make sure you have entered the correct release on the date.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the released on date to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have entered the correct update on the date.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the updated on date to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have selected the category.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Selec the category to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have selected the sub-category.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Select categoy Information technologies
    - 7) Select the sub category as Database to search the course
    - 8) Click on the search button of the modal.
    
    ^Make sure you have selected the subject.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Enter the Subject to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have selected the order by.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Select the order by to search the course
    - 7) Click on the search button of the modal.
    
    ^Make sure you have selected the limit condition.
    - 1) Click to catalogue tab of the main page.
    - 2) Click on courses.
    - 3) It will load the url for the course list.
    - 4) Click on search -> Advanced search.
    - 5) Modal will be opened.
    - 6) Select the Limit
    - 7) Click on the search button of the modal.
    
    ^Export the course list as Xls.
    - 1) Click on the first checkbox present in header of the table at the starting of the table
    - 2) Go to export button.
    - 3) Click on it. It will show the two options: Export as XLS, Export As CSV.
    - 4) Click on export as XLS.
    
    ^Export the course list as CSV.
    - 1) Click on the first checkbox present in header of the table at the starting of the table
    - 2) Go to export button.
    - 3) Click on it. It will show the two options: Export as XLS, Export As CSV.
    - 4) Click on export as CSV.

    @test_data:
    - component = "Ucertify Virtual Lab"
    - component = "Ucertify Practice IT"
    - search = 00u84 
    - License = Assessment
    - crn = 0JQJWUBPC4UYKQWE
    - courese code = 01uwr
    - ISBN = 9781616911546
    - Visibility = hidden
    - Visibility = Planned
    - Status = Retired
    - created on = 21-Nov-14
    - released on date = 12-Feb-15
    - updated on date = 21-Mar-19
    - Category = Information Technologies
    - Category = Information Technologies
    - Sub Category = Database
    - Order By = CRN
    - Limit= 100
    - Export type= xls
    - Export type= csv

    @result: It will test whole course area in catalog
 */
import { Navbar, login_username, login_password, LoginPage, LiveLabArea } from '../../../../page-objects/pages/index'
describe('Live Area', () => {
    beforeEach('This is login', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            LiveLabArea.visitVmAdmin()
            LiveLabArea.vmCourseList()
            LiveLabArea.advanceSearch()
        })
    })
    it('To load the course list for "Ucertify Virtual Lab".', () => {
        cy.get('[data-cy="components_select"]').select("1", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To load the courses of "Ucertify Practice IT"', () => {
        cy.get('[data-cy="components_select"]').select("2", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To load the courses of "All Virtual Lab"', () => {
        cy.get('[data-cy="components_select"]').select("3", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To search the courses for selected license', () => {
        cy.get('[data-cy="icon_lic"]').eq(1).click()
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To search course based on crn', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="crn_txt"]').clear().type(data.crn[0])
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To search course based on course code', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="course_code_txt"]').clear().type(data.course_code[3])
        })
        cy.get('[data-cy="search_btn"]').click()
        //cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To search course based on ISBN', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="isbn_txt"]').clear().type(data.isbn)
        })
        cy.get('[data-cy="search_btn"]').click()
        // use in future currently record not found
        //cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To search course based on Visibility', () => {
        cy.get('[data-cy="visiblity_select"]').select("0", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="course_list_tbl"]').should('be.visible')
    })

    it('To search course based on Status', () => {
        cy.get('[data-cy="status_select"]').select("x", { force: true })
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="status_txt"]').should("contain", data.status[0])
        })
    })

    it('To search course based on Created On Date', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="created_on"]').focus().type(data.status[1])
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="created_date"]').should("contain", data.status[2])
        })
    })
    it('To search course based on Released On Date', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="released_dt"]').focus().type(data.status[1])
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="released_on_dt"]')
        })
    })
    it('To search course based on Updated On Date', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="updated_on"]').focus().type(data.status[1])
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="updated_on_dt"]').should("contain", data.status[3])
        })
    })
    it('To search course based on Category', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_div"]').should("contain", data.category[0])
        })
    })
    it('To search course based on Sub Category', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
            cy.get('[data-cy="sub_category_select"]').select(data.category[1], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.fixture('global').then(data => {
            cy.get('[data-cy="sub_category_div"]').should("contain", data.category[1])
        })
    })
    it('To search course based on Subject', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
            cy.get('[data-cy="sub_category_select"]').select(data.category[1], { force: true })
            cy.get('[data-cy="subject_select"]').select(data.category[2], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
    })
    it('To Search based on limit condition', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
            cy.get('[data-cy="limit_select"]').select('100', { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="row_val"]').should('have.length', 100)
    })
    it('Export the couse list as xls', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="main_checkbox"]').eq(0).click({ force: true })
        cy.get('[data-cy=export_btn]').click()
        cy.get('[data-cy="xls_export"]').click()
    })
    it('Export the couse list as csv', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
        })
        cy.get('[data-cy="search_btn"]').click()
        cy.get('[data-cy="main_checkbox"]').eq(0).click({ force: true })
        cy.get('[data-cy=export_btn]').click()
        cy.get('[data-cy="csv_export"]').click()
    })
    it('Load the content activity for the course', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })

            cy.get('[data-cy=search_btn]').click({ force: true })
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=content_activity&ref_course_code=04Kst&vcenter_server_id=-1')

        })
        cy.get('[data-cy=content_activity_tbl]').should('be.visible')
    })
    it('Load the devices for that course', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
            cy.get('[data-cy="search_btn"]').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=content_activity&ref_course_code=04Kst&vcenter_server_id=-1')
        })
    })
    it('Load the student for that course is assigned', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
            cy.get('[data-cy="search_btn"]').click()
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=content_activity&ref_course_code=04Kst&vcenter_server_id=-1')
        })
    })
    it('Load the content for that course', () => {
        cy.fixture('global').then(data => {
            cy.get('[data-cy="category_select"]').select(data.category[0], { force: true })
            cy.visit(data.url + '/custom/docker/vmadmin/index.php?func=logs&action=content_activity&ref_course_code=04Kst&vcenter_server_id=-1')
        })
    })
})