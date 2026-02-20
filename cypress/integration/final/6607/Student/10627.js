/*
@author: Anirudha Pratap
@master_project_id: 6607
@phase_id: 10150
@story_id: 10627
@story_name: Table of Content
@path: final/6607/Student
@test_case_name: Table of Content.js
@test_steps:

^Opening Toc Area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons

^Opening Any Chapter From TOC
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on chapter you want to open

^Opening any Topic of ebook from TOC
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on topics of any chapter you want to open

^Opening TOC from ebook area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on chapter you want to open
-Now click on that slider button available at the left side of the screen

^Open Another Tab in TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on other tab to open content of that tab

^Check "Start where you left off" button
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Start where you left off"

^Check "Enable bite-size learning" button
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Enable bite-size learning"

^Open Pre assessment from the TOC panel of any chapter
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Pre" circle in-front of that chapter

^Open card from TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Card" circle in-front of that chapter

^Open Quizes from TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Quizes" circle in-front of that chapter"

^Open Exercise from TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Exercise" circle in-front of that chapter"

^Open Labs from TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Labs" circle in-front of that chapter"

^Open Post-assessment from TOC area
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Post-assessment" circle in-front of that chapter"

^Test txt to speech button
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Click on "Play button" 

^Check Back to top button
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook
-Now Click on Chapters and Lessons
-Scroll little bit
-Click on Back to top button

^Check Some Ebooks Dont Have Dashboard are working or not (Bookonly Prepkit)
-visit the website
-Login into website
-Click on My Library
-Select Any of your ebook that doesn't have dashboard (Bookonly Prepkit)

^Check TOC
-Need to test numbering

@test_data: n/a
@result: Chapters and lesson of Student Area
*/

import {
	Navbar,
	login_username,
	login_password,
	LoginPage,
	StudentPage,
} from '../../../../page-objects/pages/index'
describe('ebook area testing', function () {
	beforeEach('This is login', function () {
		cy.fixture('global').then(data => {
			cy.visit(data.url)
			Navbar.clickOnLogin()
			LoginPage.loginPage(login_username, login_password)
			StudentPage.visitLOAplusCompleteCourse(data)
		})
	})

	//ebook-toc-1, ebook-toc-2, ebook-toc-4
	it('Opening Toc Area, Opening Any Chapter From TOC', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.contains('Operating System Fundamentals').click({ force: true })
		cy.get('#btntxt').click({ force: true })
	})

	//ebook-toc-3
	it('Opening any Topic of ebook from TOC', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.contains('TOPIC A: Network Types').click({ force: true })
	})
	//ebook-toc-13
	it('Start where you left off', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.contains('Pick up where you left off').click({ force: true })
	})
	//ebook-toc-15
	it('Enable bite-size learning', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		//Pankaj:ucauto
		// if (cy.contains('Disable bite-size learning')) {
		if (cy.get('#enable_bite')) {
			//Pankaj:ucauto
			// cy.contains('Disable bite-size learning').click({ force: true })
			cy.get('#enable_bite').click({ force: true })
		}
		//Pankaj:ucauto
		// cy.contains('Enable bite-size learning').click({ force: true })
		cy.get('#enable_bite').click({ force: true })
	})
	//ebook-toc-16 ebook-toc-20
	it('Open Pre assment from the TOC pannel of any chapter', function () {
		cy.fixture('global').then(data => {
			cy.visit(data.url)
			cy.visit(
				data.url +
					'/?func=load_course&course=app-training&class_code=' +
					data.class_code[1]
			)
			cy.get('[intro-id="chapters"]').click()
			cy.get('[data-cy="pre_assessment"]').eq(0).click({ force: true })
		})
	})

	it('Open Post assment from the TOC pannel of any chapter', function () {
		cy.fixture('global').then(data => {
			cy.visit(data.url)
			cy.visit(
				data.url +
					'/?func=load_course&course=app-training&class_code=' +
					data.class_code[1]
			)
			cy.get('[intro-id="chapters"]').click()
			cy.get('[data-cy="post_assessment"]').eq(0).click({ force: true })
		})
	})
	//ebook-toc-17
	it('Open card from TOC area', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="cards"]').eq(0).click({ force: true })
	})
	//ebook-toc-18
	it('Open Quizes from TOS area', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="quizzes"]').eq(0).click({ force: true })
	})
	//ebook-toc-19
	it('Open Exercise from TOC area', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="exercises"]').eq(0).click({ force: true })
	})
	//ebook-toc-19.1
	it('Open labs from TOC area', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="labs"]').eq(0).click({ force: true })
	})
	//ebook-toc-21 ebook-toc-22
	it('Test txt to speech button', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('#toc_search').click({ force: true })
		cy.scrollTo('50%', '50%')
		cy.get('.icomoon-arrow-up-16').click({ force: true })
	})
	//ebook-toc-29
	it('Check Some Ebooks Dont Have Dashboard are working or not (Bookonly Prepkit)', function () {
		cy.fixture('global').then(data => {
			cy.visit(
				data.url + '/?func=load_course&course_code=03Hy5&class_code=05SOh'
			)
		})
		cy.get('[data-cy="chapters"]').click({ force: true })
	})
	//lesson.chapter1, lesson.chapter1.1
	it('click on chapter and lesson in dahsboard &click on chapter and lesson to open TOC page', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('#e_toc').should('be.visible')
	})
	//lesson.chapter2, lesson.chapter2.1
	it('there are 2 option to search TOC and lesson ', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('#toc_search').clear().type('Suppoting')
		cy.get('#e_toc').should('be.visible')
	})
	//lesson.chapter2.2, lesson.chapter2.3
	it('select the search lesson and type text then hit enter and get the result', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		//        cy.get('#search_content').click({ force: true })
		cy.contains('Search lessons').click({ force: true })
		cy.get('#toc_search').clear().type('topic{enter}', { force: true })
		cy.get('#e_toc').should('be.visible')
	})
	//lesson.chapter3
	it('click on start where you left off this continue the chapter where you left last time', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="start_left"]').click({ force: true })
	})
	//lesson.chapter5
	it('click on enable bit size learning this is devide lesson in to bit size', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy=bit_size]').click({ force: true })
	})
	//lesson.chapter6, lesson.chapter6.1
	it('you can start the test of each lesson and chapter & click on card icon to read the flash card of particular lesson', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="cards"]').eq(0).click({ force: true })
		cy.contains('Study Card').should('be.visible')
	})
	//lesson.chapter6.2
	it('click on quiz icon to take the quiz of particular lesson', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="quizzes"]').eq(0).click({ force: true })
		cy.contains('Quiz').should('be.visible')
	})
	//lesson.chapter6.3
	it('click on quiz icon to take the quiz of particular lesson', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="exercises"]').eq(0).click({ force: true })
		// cy.contains('Exercise').should('be.visible')
	})
	//lesson.chapter6.4
	it('click on quiz icon to take the quiz of particular lesson', function () {
		cy.get('[data-cy="chapters"]').click({ force: true })
		cy.get('[data-cy="labs"]').eq(0).click({ force: true })
		cy.get('[intro-id="activities"]').should('be.visible')
	})
})
