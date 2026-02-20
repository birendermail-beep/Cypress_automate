/*
@author:Anirudha Pratap
@master_project_id: 6607
@phase_id: 9327
@story_id: 11005
@story_name: studyPlanner
@path: final/6607/Student
@test_case_name: studyPlanner.js
@description: Sidepane of study planner
@test_steps:
^Open Study Planner
-click on study planner from dashboard

^Check tab functionality
-Open dashboard and then click Study Planner
-Click on the given tab and check if it scorlls and highlights the respective tab

^Share with your friends
-Click on share your result with your friend
-A dialog box will open with study planner link
-Copy the study planner link and open it in new tab

^Download as pdf
-Open dashboard and then click Study Planner
-Click on Download as pdf option
-The study planner should get downloaded in the form of pdf

^Are you already registered for the exam?
-Open dashboard and then click Study Planner
-In Step 1: Plan, Click on toggle button of Are you already registered for the exam?, and Click Save
-A message should appear saying Your study planner is updated.

^Start pre-assessment
-Open dashboard and then click Study Planner
-In Step 2: Pre assessment, click on start button of pre-assessment test
-Pre-assessment test should start

^study planner
-you can perform all test which include in each chapter

^Open cards
-Open dashboard and then click Study Planner
-Step 3: Lesson, Flashcards, and Quizzes, click on Cards button of any chapter to start attempting the cards
-Card of the particular chapter should open

^Open quiz
-Open dashboard and then click Study Planner
-Step 3: Lesson, Flashcards, and Quizzes, click on Quiz button of any chapter to start attempting the quiz
-Quiz of the particular chapter should open

^Open Exercise
-Open dashboard and then click Study Planner
-Step 3: Lesson, Flashcards, and Quizzes, click on Exercise button of any chapter to start attempting the exercise
-Exercise  of the particular chapter should open

^Open Labs
-Open dashboard and then click Study Planner
-Step 3: Lesson, Flashcards, and Quizzes, click on Labs button of any chapter to start attempting the Labs 
-Labs of the particular chapter should open

^Open Lesson
-Open dashboard and then click Study Planner
-Step 3: Lesson, Flashcards, and Quizzes, click on lesson name hyperlink of any chapter to start reading the lessons
-Particular chapter should open

^Open Individual Lab
-Open dashboard and then click Study Planner
-In Step 4: Complete each lab item, click on lab name hyperlink of any chapter to start attempting the labs
-Particular lab should open

^study planner
-Open dashboard and then click Study Planner
-In Step 4: Complete each virtual lab item, click on lab name hyperlink of any chapter to start attempting the virtual labs
-Particular virtual lab should open

^Open Practice Test
-Open dashboard and then click Study Planner
-In Step 5: Practice, click on Start button of any practice test to start attempting the practice test
-Test mode selection page should open.

^Open Post Assessment
-Open dashboard and then click Study Planner
-In Step 6: Post-Assessment, click on Start button of post-assessment test to start attempting the post-assessment test
-Test mode selection page should open.

^pe-toc_exercise_body_new -Ai-bigdata
1. go to my library
2. search course AI and Big Data.
3. click on manage
4. open desk copy
5. click on study planner

@test_data:n/a
@result:Study planner page and test area will open 
*/
import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index'
describe('study planner from dashboard in testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            StudentPage.visitLOAplusCompleteCourse(data)
        })
    })

    //Dashboard.study.planner, Dashboard.study.planner2
    it('click on study planner from dashboard', function() {
            cy.scrollTo("50%", "50%")
            cy.get('[data-cy=studyplanner]').click({ force: true })
            cy.get('#planner_share').click({ force: true })
            cy.get('.download_pdf').click({ force: true })
        })
        //Dashboard.study.planner3, Dashboard.study.planner4
    it('click on Are you already registered for the exam? and select yes or no', function() {
        cy.scrollTo("50%", "50%")
        cy.get('[data-cy=studyplanner]').click({ force: true })
        cy.get('#yes').click({ force: true })
        cy.get('#saveOption > .btn').click({ force: true })
        cy.get('[intro-id="pre-assessment"]').click({ force: true })
        cy.get('.progress-bar > .progress-label').click({ force: true })
    })

    //Dashboard.study.planner6
    it('Step 3: Lesson, Flashcards, and Quizzes2', function() {
            cy.scrollTo("50%", "50%")
            cy.get('[data-cy=studyplanner]').click({ force: true })
            cy.get('[intro-id="chapter"]').click({ force: true })
            cy.contains('Operating System Fundamentals').click({ force: true })
        })
        //Dashboard.study.planner7.1
    it('Step 4: Complete each lab item & virtual lab item', function() {
            cy.scrollTo("50%", "50%")
            cy.get('[data-cy=studyplanner]').click({ force: true })
            cy.get('[intro-id="lab"]').click({ force: true })
            cy.contains('Understanding USB versions').click({ force: true })
            cy.get('.close-test').click({ force: true })
            cy.get('[href="index.php?action=cover"] > .font18').click({ force: true })
            cy.get('[data-cy=studyplanner]').click({ force: true })
            cy.get('[intro-id="virtual_lab"]').click({ force: true })
            cy.contains('Understand Computer Virtualization').click({ force: true })
        })
        //Dashboard.study.planner8
    it('Step 5: Practice', function() {
            cy.scrollTo("50%", "50%")
            cy.get('[data-cy=studyplanner]').click({ force: true })
            cy.get('[intro-id="test_prep"]').click({ force: true })
            cy.get('.btn-progress').eq(0).click()
        })
        //Dashboard.study.planner9
    it('Step 6: Post-Assessment', function() {
        cy.scrollTo("50%", "50%")
        cy.get('[data-cy=studyplanner]').click({ force: true })
        cy.get('[intro-id="post_assessment"]').click({ force: true })
        cy.get(':nth-child(25) > tbody > tr > .span2').contains('START').click()
    })

    it('To check if one can view activity time spent report from study planner in comparison with accuracy, activity done, Pages viewd and time spent', function() {
        cy.get('[data-cy=studyplanner]').click();
        cy.get('#btntxt').click();
        cy.get('[data-cy=activity_report]').click();
        cy.get('thead > tr > :nth-child(2)').click();
        cy.wait(200)
        cy.get('thead > tr > :nth-child(3)').click();
        cy.wait(200)
        cy.get('thead > tr > :nth-child(4)').click();
        cy.wait(200)
        cy.get('thead > tr > :nth-child(5)').click();
    })
    it('pe-toc_exercise_body_new-AI-big data', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + '/?func=get_course_list&show=courses')
            cy.get('#search_course').clear({ force: true }).type('big data', { force: true })
            cy.visit(data.url + '/?func=load_course&course=AI-bigdata')
        })
        cy.get('[data-cy=studyplanner]').click({ force: true })
    })
})