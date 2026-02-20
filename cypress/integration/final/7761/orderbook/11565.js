/*
@author: Anirudha Pratap
@master_project_id: 7761
@phase_id: 
@story_id: 11565
@story_name: Orderbook Catalog
@path: final/7761/orderbook
@test_case_name: Orderbook Catalog.js
@description: 
@test_steps:
^search course catalog 
-Go to the url: https://www.ucertify.com/admin/catalog.php
-Enter data on which basis you want to search(I use correct crn)
-Click on search icon

^Use CRN, course name ,price etc to search catalog
-Go to the url: https://www.ucertify.com/admin/catalog.php
-Enter data on which basis you want to search(I use: incorrect crn)
-Click on search icon

^Advance search is based on CRn, isbn, code etc.
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use search box 
-Search by vendor name
-Enter vendor name and click on search

^search button Advance search
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use search box 
-Search by vendor name
-Enter vendor name and click on search

^Advance search is based on CRn, isbn, code etc. 2
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use crn box 
-Enter correct crn and click on search

^Advance search is based on CRn, isbn, code etc. 3
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use ISBN box 
-Enter correct ISBN and click on search

^Advance search is based on CRn, isbn, code etc. 4
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use ISBN box 
-Enter incorrect ISBN and click on search

^Advance search is based on CRn, isbn, code etc. 5
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use code box 
-Enter corect code and click on search

^Advance search is based on CRn, isbn, code etc. 6
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use code box 
-Enter incorrect code and click on search

^Advance search is based on CRn, isbn, code etc. 7
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use visibility 

^Advance search is based on CRn, isbn, code etc. 8
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use status

^Advance search is based on CRn, isbn, code etc. 9
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use License

^Advance search is based on CRn, isbn, code etc. 10
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use priority

^Advance search is based on CRn, isbn, code etc. 11
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use Field of Experties
-Select sub category
-Select subject

^Advance search is based on CRn, isbn, code etc. 12
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use Difficulty Level
-Select intermediate
-Click on search

^Advance search is based on CRn, isbn, code etc. 13
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use Product Search
-Select  Bundle
-Click on search

^Advance search is based on CRn, isbn, code etc. 14
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use Vendor
-Select  comptia
-From uCertify
-Click on search

^Advance search is based on CRn, isbn, code etc. 15
-Click on search button
-Select advance search
-Enter data on which basis you want to search
-Use order by
-Select crn
- Use limit
-Select 10

^sort data based on given options 1
-open https://www.ucertify.com/admin/catalog.php
-click on sort by button
-Select all

^sort data based on given options 2
-open https://www.ucertify.com/admin/catalog.php
-click on sort by button
-Select created on

^sort data based on given options 3
-open https://www.ucertify.com/admin/catalog.php
-click on sort by button
-Select updated on

^Add course on catalog
-Select hidden
-Provide release date
-Enter course code
-Select priority
-Enter crn
-Enter name of course
-Enter about course
-Select category
-Select sub category
-Select subject
-Select  Difficulty Level
-Select Vendor
-Enter exam code
-Select Content From
-In product license select: lab, live lab, testprep
-Select planned
-Enter none picture
-Color: 1
-Enter isbn
-Enter price
-Enter discount

^it display all check data in catalog 1
-We have to check if there is no any checked item
-Click on 1st column and select show cheked
-Click on ok

^it display all check data in catalog 2
-Click on 1st column and select show cheked
-Click on ok

^it display all uncheck data in catalog 3
-Check some item to test
-Click on 1st column and select show uncheked
-Click on ok

^it display all  data in catalog 
-Click on 1st column and select show uncheked
-Click on ok

^it display data based on priority 
-Click on 2nd column of 1st row and select priority
-CLick on clear all to clear all priority
-Click on ok 

^it display data based on selected vendor
-Click on 3rd column of 1st row and select vendor
-CLick on clear all to clear all selected vendor
-Click on ok 

^it display data based on selected org
-Click on 4th column of 1st row and select from
-CLick on clear all to clear all selected org
-Click on ok

^it display data based on selected crn
-Click on 5th column of 1st row and select crn
-CLick on clear all to clear all selected crn
-Click on ok 

^it display data based on selected course
-Click on 6th column of 1st row and select course
-CLick on clear all to clear all selected course
-Click on ok 

^it display data based on selected price
-Click on 7th column of 1st row and select price
-Click on clear all to clear all selected price
-Click on ok 

^it display data based on selected created date
-Click on 8th column of 1st row and select created on
-Click on clear all to clear all selected created date
-Click on ok 

^it display data based on selected status
-Click on 9th column of 1st row and select status
-Click on clear all to clear all selected status
-Click on ok 

^It opens Course edit/add page
-Click on action menu
-Select edit course details
-In edit page change data you want to do
-Click on save

^Open course in student view where student able to read 
-Click on action menu
-Select student view
-Click on save


@test_data: n/a

@result: orderbook area will open.
*/
import { Navbar, login_username, login_password, LoginPage, InstructorPage, OrderbookPage, AdminArea } from '../../../../page-objects/pages/index'
describe("orderbook page testing", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/admin/catalog.php");
        })
    });
    it("Use CRN, course name ,price etc to search catalog", function() {
        cy.get('[data-cy=search_text]').type("70-742", { force: true });
        cy.get('[data-cy=searchbtn]').click({ force: true });
    });
    it("Use wrong CRN, course name ,price etc to search catalog", function() {
        cy.get('[data-cy=search_text]').type("10-621", { force: true });
        cy.get('[data-cy=searchbtn]').click({ force: true });
    });
    it("Advance search is based on CRn, isbn, code etc.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="vendor_cy"]').select("Microsoft", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on CRn", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy=crn_code_cy]').type("70-742", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on isbn", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy=isbn_cy]').type("9781616911515", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on code box", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy=course_code_cy]').type("00u84", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on incorrect code box", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy=course_code_cy]').type("00u81", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on visibilty project.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="visiblity_cy"]').select("Project", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on status.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="status_cy"]').select("Planned", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("all record of testprep and lab should be display", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="lic_type_arr_cy"]').eq(3).click({ force: true })
        cy.get('[data-cy="lic_type_arr_cy"]').eq(4).click({ force: true })
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on priority.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="priority_cy"]').select("Low", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on category.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="category_cy"]').select("Art and Design", { force: true });
        cy.get('[data-cy="sub_category_cy"]').select("Select sub-category", { force: true });
        cy.get('[data-cy="subject_cy"]').select("Other", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on difficulty_level.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="difficulty_level_cy"]').select("Intermediate", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on product search.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="limit_on_cy"]').select("Bundle", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on vendor.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="vendor_cy"]').select("CompTIA", { force: true });
        cy.get('[data-cy="content_org_id_cy"]').select("uCertify", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("Advance search is based on order by.", function() {
        InstructorPage.advSearch()
        cy.get('[data-cy="order_by_cy"]').select("CRN", { force: true });
        cy.get('[data-cy="limit_cy"]').select("10", { force: true });
        cy.get('[data-cy=search_cy]').contains("Search").click({ force: true });
    });
    it("sort data based on given options All.", function() {
        cy.get('[data-cy="filter_sort_by"]')
            .contains("Sort By")
            .click({ force: true });
        cy.get('[data-cy="all_sort"]')
            .contains("All")
            .click({ force: true });
    });
    it("sort data based on given options Created On.", function() {
        cy.get('[data-cy="filter_sort_by"]')
            .contains("Sort By")
            .click({ force: true });
        cy.get('[data-cy="created_on"]')
            .contains("Created On")
            .click({ force: true });
    });
    it("sort data based on given options Updated On.", function() {
        cy.get('[data-cy="filter_sort_by"]')
            .contains("Sort By")
            .click({ force: true });
        cy.get('[data-cy="updated_on"]')
            .contains("Updated On")
            .click({ force: true });
    });
    it("Add button", function() {
        cy.get('[data-cy=add_catalog]').click({ force: true })
    })
    it("Add course on catalog", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/catalog.php?func=course_new&author_chk=1");
        })
        cy.get('[data-cy="priority_cy"]').select("Low", { force: true });
        cy.get('[data-cy="prep_code_cy"]').type("12-363", { force: true });
        cy.get('[data-cy="c_name_cy"]').type("testing course created by Rahul Shukla", { force: true });
        cy.get('[data-cy="internal_desc_cy"]').type("testing", { force: true });
        cy.get('[data-cy="vendor_cy"]').select('CompTIA', { force: true })
        cy.get('[data-cy="exam_code_cy"]').type("2923723", { force: true });
        cy.get('[data-cy="content_from_org_id_cy"]').select("uCertify", { force: true });
        cy.get('[data-cy="isbn_cy"]').type("9781616911511", { force: true });
        cy.get('[data-cy="price_cy"]').clear().type("150", { force: true });
        cy.get('[data-cy="discount_cy"]').clear().type("20", { force: true });
        cy.get('[data-cy="start_date_cy"]').click({ force: true });
        cy.get('tbody > :nth-child(2) > :nth-child(4)').click({ force: true });
        cy.get('.btn-group > [data-cy=save_cy]').click({ force: true });
    });
    it("it display all check data in catalog", function() {
        cy.get("#checkall").check({ force: true });
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(1) > .filter > .btn"
        ).click({ force: true });
        cy.get("ul > :nth-child(1) > a")
            .contains("Show Checked")
            .click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display all checked data in catalog", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(1) > .filter > .btn"
        ).click({ force: true });
        cy.get("ul > :nth-child(1) > a")
            .contains("Show Checked")
            .click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display all unchecked data in catalog", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(1) > .filter > .btn"
        ).click({ force: true });
        cy.get("ul > :nth-child(2) > a")
            .contains("Show UnChecked")
            .click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display all uncheck data in catalog", function() {
        cy.get("#checkall").check({ force: true });
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(1) > .filter > .btn"
        ).click({ force: true });
        cy.get("ul > :nth-child(2) > a")
            .contains("Show UnChecked")
            .click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on priority", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(2) > .filter > .btn"
        ).click({ force: true });
        cy.get('.p-0 > :nth-child(3) > a').click({ force: true })
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected vendor", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(3) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt.p-0.mr-md").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected vendor", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(3) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected org", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(4) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected org", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(4) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected crn", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(5) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected crn", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(5) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected course", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(9) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected course", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(9) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected price", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(10) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected price", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(10) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected created date", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(11) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected created date", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(11) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on selected status", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(12) > .filter > .btn"
        ).click({ force: true });
        cy.get(".slt").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("it display data based on unselected status", function() {
        cy.get(
            "#allcourse > thead > .always_show > :nth-child(12) > .filter > .btn"
        ).click({ force: true });
        cy.get(".clr").click({ force: true });
        cy.get("#df").click({ force: true });
    });
    it("click on Edit Course detail", function() {
        cy.get('[data-cy=settings_menu]').eq(0).click({ force: true })
        cy.get('[data-cy=course_details_cy]').eq(0).click({ force: true })
    });
    it("It opens Course edit page", function() {
        cy.get('[data-cy=settings_menu]').eq(0).click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/admin/catalog.php?func=course_edit&author_chk=1&course_code=00YYC");
        })
    });
    it("click on student view", function() {
        cy.get('[data-cy=settings_menu]').eq(0).click({ force: true })
        cy.get('[data-cy=student_view_cy]').eq(0).click({ force: true })
    });
    it("Open course in student view where student able to read", function() {
        cy.get('[data-cy=settings_menu]').eq(0).click({ force: true })
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/?func=load_course&course=312-49-v8");
        })
    });
});