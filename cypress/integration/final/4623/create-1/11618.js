/*
@author: Anirudh Pratap
@master_project_id: 4623
@phase_id: 
@story_id: 
@story_name: Add Item
@path: final/Create
@test_case_name: Add Item.js
@description: 
@test_steps: 
^Testing "Item Bank" Options
1. Click on "My Library" after logging in your account
2. Click on "My Projects" tab given in tab bar.
3. Click on "Author" button of specified project.
4. Click On "Item Bank"
5. Click on "Add Item" dropdown.
6. Click on "Add Item" Link

^Testing "Item Bank" Options
1. Follow steps 1 to 6 as given in test case no. 37.
2. Click on multiple choice thumbnail.
3. Click on Stem dark circle plus icon given in authoring section of page.
4. Click on Text link on appeared modal .
5. Click on Paragraph link
6. Then write your desired question on input field which contains value "Place Your Text Here"
7. Click on Optin no. A or B or so on.
8. Check checkbox having right answer for the question.
9. Change option text to your desired text

@test_data: n/a

@result: A page with multiple options thumbnail like multiple choice, label an image etc. should be appear.
*/
import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
	CreateArea,
} from '../../../../page-objects/pages/index'
describe('Create Area', () => {
	const fillEditorField = (selector, text) => {
		cy.get(selector, { timeout: 20000 })
			.filter(':visible')
			.first()
			.should('exist')
			.click({ force: true })
			.then($field => {
				if ($field.is('input, textarea')) {
					cy.wrap($field).clear({ force: true }).type(text, { force: true })
					return
				}

				// The v2 editor throws getRng when Cypress.clear() is used on
				// its contenteditable controls. Remove the placeholder without
				// firing that broken clear event, then enter the value normally.
				$field[0].textContent = ''
				cy.wrap($field).type(text, { force: true })
			})
			.then($field => {
				if ($field.is('input, textarea')) {
					cy.wrap($field).should('have.value', text)
				} else {
					cy.wrap($field).should('contain.text', text)
				}
			})
	}

	it('Item Bank Open', () => {
		cy.fixture('global').then(data => {
			cy.visit(data.url)
			Navbar.clickOnLogin()
			LoginPage.loginPage(login_username, login_password)
			CreateArea.openLibrary()
			CreateArea.myProject()
		})
		cy.get(':nth-child(2) > .dashboard_item > h3').click({ force: true })
		cy.wait(5000)
		cy.get(
			'[onclick="add_part(event); return false;"] > .icomoon-new-24px-add-circle-1'
		).click({ force: true })
		cy.wait(5000)
		cy.get(
			'#add_contents_modal > .modal-dialog > .modal-content > #add_contents_body > :nth-child(2) > .col-md-9 > #content_title'
		).type('test')
		cy.get(
			'#add_contents_modal > .modal-dialog > .modal-content > .modal-footer > .content_log_btn > .save_content'
		).click()
		cy.get('[data-cy=errormsg]').should('exist')
		cy.fixture('global').then(data => {
			cy.visit(
				data.url +
					'/editor/v2/?action=new&in_frame=1&no_header=1&from_educator=1&add_coverage=1&show_add_new_button=1&goback=1&author_area=1&from_myproject=1'
			)
		})

		cy.get('body', { timeout: 20000 }).then($body => {
			if ($body.find('.multiple_choice:visible').length) {
				cy.get('.multiple_choice:visible').first().click({ force: true })
			}
		})

		fillEditorField(
			'#title .ebook_item_text, #title [contenteditable="true"], #title textarea, #title input',
			'uCertify Offices in'
		)
		fillEditorField(
			'#stem .ebook_item_text, #stem [contenteditable="true"], #stem textarea, #stem input',
			'Where is the uCertify office located?'
		)

		cy.get('.answer_container > .option > .float-right > i')
			.eq(0)
			.click()
			.then(() => {
				cy.get(':nth-child(1) > #user_answer')
					.children()
					.its('length')
					.should('eq', 3)
			})
		cy.get('.answer_container > .option > .float-right > i')
			.eq(0)
			.click()
			.then(() => {
				cy.get(':nth-child(1) > #user_answer')
					.children()
					.its('length')
					.should('eq', 2)
			})
		cy.get('#option0').clear().type('Noida')
		cy.get('#option1').clear().type('Allahabad')
		cy.get('#userans-B').click()

		cy.contains('button, a', /^Save$/i, { timeout: 10000 })
			.filter(':visible')
			.first()
			.click({ force: true })

		cy.get('#title').should('contain.text', 'uCertify Offices in')
		cy.get('#stem').should(
			'contain.text',
			'Where is the uCertify office located?'
		)
	})
})
