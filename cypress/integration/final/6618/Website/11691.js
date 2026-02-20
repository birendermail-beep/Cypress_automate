/*
@author:Anirudha Pratap
@master_project_id: 6618
@phase_id: n/a
@story_id:11691
@story_name: browse_titles
@path: final/6607/Student
@test_case_name: browse_titles
@description:
@Test Steps: 
^test case of Browse Title
- Visit to website.
- Login to ucertify.com.
- Click the Previous Page icon.
- Click Browse Titles.
- Go to the each option one by one to open the pages.

^test case of course categories
- Visit to website.
- Login to ucertify.com.
- Click the Previous Page icon.
- Click course categories
- Go to the each option one by one to open the pages. 

@test_data: n/a
@result: Course page of each option will open.
*/
import { Navbar, login_username, login_password, LoginPage } from '../../../../page-objects/pages/index'
describe('Home Page', function () {
    it('Testing of browse title page', function () {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
        Navbar.clickContinueOnWelcomePage();
        cy.wait(2000)
        //click on adobe
        Navbar.clickonBrowseTitle()
        cy.wait(5000)
        cy.get('[data-cy="browsetitles_cy"]').contains('Adobe').click({ force: true })
        cy.contains('About').click({ force: true })
        cy.contains('Certifications').click({ force: true })
        cy.get('#ace-indesign').click({ force: true })
        cy.get('#ace-photoshop').click({ force: true })
        cy.contains('Requirements').click({ force: true })
        cy.contains('Titles').click({ force: true })
        cy.wait(2000)
        //click on Amazon
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Amazon').click({ force: true })
        cy.wait(2000)
        // click on Axelos
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Axelos').click({ force: true })
        cy.contains('ITIL 4 Certifications').click({ force: true })
        cy.contains('PRINCE2 Certification').click({ force: true })
        cy.wait(2000)
        //click on CIW
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('CIW').click({ force: true })
        // click on CWNP
        cy.wait(2000)
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('CWNP').click({ force: true })
        //click on CertNexus this remove form list for future use
        // cy.wait(2000)
        // Navbar.clickonBrowseTitle()
        // cy.get('[data-cy="browsetitles_cy"]').contains('CertNexus').click({ force: true })
        cy.wait(2000)
        // click on CertiPort
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Certiport').click({ force: true })
        cy.wait(2000)
        // click on Cisco
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Cisco').click({ force: true })
        cy.wait(2000)
        //click on CompTIA
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('CompTIA').click({ force: true })
        cy.wait(2000)
        // click on EC-Coucil
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('EC-Council').click({ force: true })
        cy.wait(2000)
        // click on Google
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Google').click({ force: true })
        cy.wait(2000)
        // click on HRCI
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('HRCI').click({ force: true })
        cy.wait(2000)
        // click on IIBA
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('IIBA').click({ force: true })
        cy.wait(2000)
        // click on ISACA
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('ISACA').click({ force: true })
        cy.wait(2000)
        // click on (ISC)²
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('(ISC)²').click({ force: true })
        cy.wait(2000)
        // click on LPI
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('LPI').click({ force: true })
        cy.wait(2000)
        // click on Microsoft
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Microsoft').click({ force: true })
        cy.wait(2000)
        // click on Oracle
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Oracle').click({ force: true })
        cy.wait(2000)
        // click on PMI
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('PMI').click({ force: true })
        cy.wait(2000)
        // click on RedHat
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('RedHat').click({ force: true })
        cy.wait(2000)
        // click on VMware
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('VMware').click({ force: true })
        cy.wait(2000)
        // click on Zend
        Navbar.clickonBrowseTitle()
        cy.get('[data-cy="browsetitles_cy"]').contains('Zend').click({ force: true })
    })
})