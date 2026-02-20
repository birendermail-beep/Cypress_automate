
/*
@author:
@master_project_id:
@phase_id:
@story_id: 21545
@story_name: Web
@path: 6621/Editor-1/21545.js
@test_case_name:
@description:
@test_steps:
^test case of
- Visit to website.
- Login into website.
@test_data:
@result:





^Open Web module
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
@test_data:
@result: Successfully open the Web module.


^Run the html code
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Write html code in html container
-After that click on the "Run" button.
@test_data: <h2>An ordered HTML list</h2><ol><li>Coffee</li><li>Tea</li><li>Milk</li></ol>
@result: Successfully cleated the list and show the output to output container.


^Open the auto graded dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-showing the successfully module
-After that click on the "Autograde" module.
@test_data: 
@result: Successfully showing the auto graded dialog box.

^Open the Disabled or Hide  dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
- Click on the "Disabled/Hide" button
@test_data: 
@result: Successfully open the Disabled/Hide dialog box.


^Disabled Css Container. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Click on the "Disabled/Hide" button
-Go to the css dropdown option and select the "Disabled" option.
-After that click on the "Done" button.
-Click on the preview option in editor.
-After that  try to write something in css container.
@test_data: 
@result: Successfully disabled the css container.


^Disabled Html dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Click on the "Disabled/Hide" button
-Go to the html dropdown option and select the "Disabled" option.
-After that click on the "Done" button.
-Click on the preview option in editor.
-After that  try to write something in html container.
-Unable to write something
@test_data: 
@result: Successfully disabled the html container.

^Disabled Html dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Click on the "Disabled/Hide" button
-Go to the html dropdown option and select the "Disabled" option.
-After that click on the "Done" button.
-Click on the preview option in editor.
-After that  try to write something in html container.
-Unable to write something
@test_data: 
@result: Successfully disabled the html container.


^Disabled JS dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Click on the "Disabled/Hide" button
-Go to the JS dropdown option and select the "Disabled" option.
-After that click on the "Done" button.
-Click on the preview option in editor.
-After that  try to write something in JS container.
-Unable to write something
@test_data: 
@result: Successfully disabled the JS container.


^Hide JS dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Click on the "Disabled/Hide" button
-Go to the JS dropdown option and select the "Hidden" option.
-After that click on the "Done" button.
-Click on the preview option in editor.
-Unable to write something
@test_data: 
@result: Successfully hide the JS container in preview side.

^Hide HTML dialog box. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Click on the "Disabled/Hide" button
-Go to the HTML dropdown option and select the "Hidden" option.
-After that click on the "Done" button.
-Click on the preview option in editor.
-Unable to write something
@test_data: 
@result: Successfully hide the HTML container in preview side.

^Enable the auto graded options. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Successfully show the module
-Click on the "Autograde" button.
-After that click on the Autograde checkbox
@test_data: 
@result: Enable the all test cases option like Testcase, Internal script, External Script

^Enable the dark mode. 
-visit the website
-Login into website
-go to editor area
-Type Web and click on "Web"
-Successfully show the module
-Click on the "Dark Theme" option
@test_data: 
@result: Successfully Dark mode is enabled and dark the three container.


*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Web Module Test Case", function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)

        })
    })

    it('Open Web Module', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url)
            cy.get('[data-cy=item58]').click();
            cy.wait(5000);
        })
    })

    it('Run HTML Code', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            //cy.get('[data-cy=disable_modal]').click({force:true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').click({force:true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('<h2>An ordered HTML list</h2><ol><li>Coffee</li><li>Tea</li><li>Milk</li></ol>');
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > .pull-right > .btn').click({force:true});
        })
    })

    it('open autograde model', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            //cy.get('[data-cy=disable_modal]').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(1) > [data-cy=autograde_modal]').click({force:true});
        })
    })

    it('Disabled or Hide dialog box', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(2) > .btn').click({force: true});
        })
    })

    it('Disabled Css Container', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            //cy.get('[data-cy=disable_modal]').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(2) > [data-cy=disable_modal]').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > :nth-child(2) > [data-cy=css_disable]').select("Disabled",{force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > [data-cy=close_modal]').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > [data-cy=close_modal]').click({force: true});
            cy.get(3000);
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').click({force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('Testing',{force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('<h1>This is html container</h1>');
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').click({force: true});
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').type('Testing',{force: true});
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').type('I am css container',{force: true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force: true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').type('Testing',{force: true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').type('Hi i am js container');
            cy.get('#edi_tabs > :nth-child(2) > a').click({force:true});
        })
    })

    it('Disabled Html dialog box', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(2) > .btn').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > #html_disable').select('Disabled',{force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > .btn').click({force: true});

            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > .btn').click({force:true});
            cy.get('#html > .CodeMirror').type('<h1>Html container is disabled</h1>',{force: true});

        })
    })

    it('Disabled JS Container', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            //cy.get('[data-cy=disable_modal]').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(2) > [data-cy=disable_modal]').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > [data-cy=js_disable]').select("Disabled",{force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > [data-cy=close_modal]').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > [data-cy=close_modal]').click({force: true});
            cy.get(3000);
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').click({force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('Testing',{force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('<h1>I am html container</h1>');
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').click({force:true})
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').click({force:true})
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').type('This is css container');
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force:true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force:true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').type('This is js container');
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force:true});
            cy.wait(5000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').click({force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('Testing',{force: true});
            cy.get('#html > .CodeMirror > .CodeMirror-scroll').type('<h1>change html container</h1>');
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').click({force:true})
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').click({force:true})
            cy.get('#css > .CodeMirror > .CodeMirror-scroll').type('change css container');
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force:true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force:true});
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').type('change js container');
            cy.get('#js > .CodeMirror > .CodeMirror-scroll').click({force:true});

            // cy.get('#edi_tabs > :nth-child(2) > a').click({force:true});
        })
    })

    it('Hide Js Container', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            //cy.get('[data-cy=disable_modal]').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(2) > [data-cy=disable_modal]').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > :nth-child(3) > [data-cy=js_disable]').select("Hidden",{force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > [data-cy=close_modal]').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > [data-cy=close_modal]').click({force: true});
            cy.wait(3000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});
        })
    })

    it('Hide Html container', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(2) > .btn').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > :nth-child(1) > #html_disable').select('Hidden',{force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #disable_modal > .modal-dialog > .modal-content > .modal-body > .float-right > .btn').click({force: true});
            cy.wait(5000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});
        })
    })

    it('Checked autograde', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            //cy.get('[data-cy=disable_modal]').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > :nth-child(1) > [data-cy=autograde_modal]').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #autograde_modal > .modal-dialog > .modal-content > .modal-header > .modal-title > #autograde_cb').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #autograde_modal > .modal-dialog > .modal-content > .modal-body > #grade_accordion > :nth-child(1) > .card-header').click({force: true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #autograde_modal > .modal-dialog > .modal-content > .modal-body > #grade_accordion > :nth-child(2) > .card-header').click({force:true});
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > #autograde_modal > .modal-dialog > .modal-content > .modal-body > #grade_accordion > :nth-child(3) > .card-header').click({force: true});
        })
    })

    it('Dark theme', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            cy.get('[data-cy=my_library]').click();
            cy.get('[data-cy=searchbox]').type('items');
            cy.get('[class_code="05Up2,05pu5"] > [data-cy=manage] > span').click();
            cy.get('.section_05Up2 > .span13 > .btn-outline-primary').click();
            cy.visit(data.url + '?func=load_course&course=items&class_code=05Up2');
            cy.get('[data-cy=practice_tests]').click();
            cy.get('#test2').click({force: true});
            cy.get('#test2').click({force: true});
            cy.get('[data-cy=learn_mode]').click({force: true});
            EditorPage.visitEditor(data.url);
            cy.wait(5000);
            cy.get('[data-cy=item58]').click({force:true});
            cy.wait(5000);
            cy.get('#authoringLoadComponent > main > #webModule > #authoringArea > :nth-child(1) > .container-fluid > .row > #web_toolbar > [data-cy=goDark] > .themeStyle > label > #goDark').click({force:true});
            cy.get(5000);
            cy.get('#edi_tabs > :nth-child(2) > a').click({force: true});
        })
    })

    
});

