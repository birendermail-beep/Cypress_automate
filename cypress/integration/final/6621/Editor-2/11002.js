/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 11002
@story_name: Smart Chat
@path: final/6621
@test_case_name: Smart Chat.js
@test_steps:
^click on seach and type Smart Chat  and click on Smart Chat
-click on search icon
-Type Smart Chat
-click on Smart Chat

^click on Smart Chat
-click on Smart Chat

^click on full screen
-click on full screen

^click on empty
-click on empty

^click on edit character
-click on edit character
-click on save

^click on edit intro screen
-click on edit intro screen
-select image
-click on save

^click on edit avatar select screen
-click on edit avatar select screen
-select image
-click on save

^click on edit score category
-click on edit score category
- add category
-click on save

^click on edit score feedback
-click on edit score feedback
-click on save

^click on Assets
-click on assets
-add assets
-click on save

^click on tabs
-click on assets
-add tabs
-click on save

^click on Default voice
-click on default voice
-click on save

^click on + icon
-click on on + icon

^click on delete icon
-click on delete icon

@test_data: 
-click on Smart Chat
-click on full screen 
-empty the data
-show the edit character
-show the edit intro screen
-show the edit avatar select screen
-show the edit score category
-show the edit score feedback
-show the assets
-show the tabs
-show the default voice
-edit the events,statement
-delete the option

@result: Open Smart Chat Module
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe("Editor Area", function() {
    it('Smart Chat Test Case', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.icomoon-search-2').click({ force: true })
            cy.get('[style="font-size: 20px; padding-left: 16px; height: 51px; background-color: rgb(76, 76, 76); width: 285px;"] > input').type('smart chat', { force: true })
            cy.wait(2000);
            cy.get('.icomoon-arrow-left-4').click()
            cy.get('[data-subtype="32"]').click()
            cy.visit(data.url + '/editor/?action=new&content_subtype=32&content_type=q&content_icon=0&react_content=1')
            cy.wait(2000);
            // Full screen button
            getIframeBody().find('#fullScreenButton').should('have.text', 'Fullscreen').click({ force: true })

            // Empty button
            getIframeBody().find('#empty').should('have.text', 'Empty').click()
            getIframeBody().find('#openconfirmModal .close').click()

            // Edit Charactor
            getIframeBody().find('.characters > a').click({ force: true })
            getIframeBody().find('.characters_footer .getJson').should('have.text', 'Save').click({ force: true })

            // Intro Screen
            getIframeBody().find('.introscreen > a').click({ force: true })
            getIframeBody().find('#0').click()
            getIframeBody().find('.intro_footer .getJson').should('have.text', 'Save').click({ force: true })

            // Avatar Screen
            getIframeBody().find('.avatar > a').click({ force: true })
            getIframeBody().find('.avatar_footer li > img').eq(0).click()
            getIframeBody().find('.avatar_footer .getJson').should('have.text', 'Save').click({ force: true })

            // Score Category
            getIframeBody().find('.scoreCategory > a').click({ force: true })
            getIframeBody().find('#addButton').click()
            getIframeBody().find('.score_footer .getJson').should('have.text', 'Save').click({ force: true })

            // Score Feedback
            getIframeBody().find('.scoreFeedack > a').click({ force: true })
            getIframeBody().find('.scoreFeed_footer .getJson').should('have.text', 'Save').click({ force: true })

            // Add Assets
            getIframeBody().find('.assets > a').click({ force: true })
            getIframeBody().find('.addassets').click()
            getIframeBody().find('.assets_footer .saveAssets').should('have.text', 'Save').click({ force: true })

            // Add Tabs
            getIframeBody().find('.tabs > a').click({ force: true })
            getIframeBody().find('.addtabs').click()
            getIframeBody().find('.tabs_footer .saveTabs').should('have.text', 'Save').click({ force: true })

            // Default Voice
            getIframeBody().find('.defaultVoice > a').click({ force: true })
            getIframeBody().find('#Mark_radio').check()
            getIframeBody().find('.defaultVoice_footer .getJson').should('have.text', 'Save').click({ force: true })

            getIframeBody().find('#inner_content .accordion-section-title span').eq(0).click({ force: true })
            getIframeBody().find('#inner_content .accordion-section-title span').eq(1).click({ force: true })
        })

        // Connect with Iframe container
        const getIframeDocument = () => {
            return cy.get('iframe[id="authoringFrame"]').its('0.contentDocument').should('exist')
        }

        // Wrap Iframe body elements
        const getIframeBody = () => {
            return getIframeDocument().its('body').should('not.be.undefined').then(cy.wrap)
        }
    })
})