/*
@author: Anirudha Pratap
@master_project_id: 6621
@phase_id: 10231
@story_id: 11006
@story_name: Text Highlight
@path: final/6621
@test_case_name: Text Highlight.js
@test_steps:
^Check correct answer for word
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon : https://www.screencast.com/t/AuRhFUncPZ
-Enter the text related to the question.
-Click on Highlight token button.
-Click Word
-Select the token to be highlighted.
-In preview tab, select the right token and then click on remediation.

^Check incorrect answer for word
-Go to the URL :https://www.ucertify.com/editor/?action=new
-Click on the icon :https://www.screencast.com/t/AuRhFUncPZ
-Enter the text related to the question.
-Click on Highlight token butto-
-Click Word
-Select the token to be highlighted.
-In preview tab, select the wrong token and then click on remediation.

^Check correct answer for sentence
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon : https://www.screencast.com/t/AuRhFUncPZ
-Enter the text related to the question.
-Click on Highlight token button
-Click Sentence
-Select the token to be highlighted.
-In preview tab, select the right token and then click on remediation.

^Check incorrect answer for sentence
Go to the URL : https://www.ucertify.com/editor/?action=new
Click on the icon : https://www.screencast.com/t/AuRhFUncPZ
Enter the text related to the question.
Click on Highlight token button
Click Sentence
Select the token to be highlighted.
In preview tab, select the wrong token and then click on remediation.

^Check correct answer for paragraph
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon :https://www.screencast.com/t/AuRhFUncPZ
-Enter the text related to the question.
-Click on Highlight token button
-Click Paragraph
-Select the token to be highlighted.
-In preview tab, select the right token and then click on remediation

^Check incorrect answer for paragraph
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon :https://www.screencast.com/t/AuRhFUncPZ
-Enter the text related to the question.
-Click on Highlight token button
-Click Paragraph
-Select the token to be highlighted.
-In preview tab, select the right token and then click on remediation


^Clear token for word
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon : https://www.screencast.com/t/AuRhFUncPZ
-Give the title of the question
-Enter the question to be asked
-Enter the text related to the question.
-Click on Highlight token button
-Click on word button.
-Select the token to be highlighted.
-Click clear button to make token 0.

^Clear token for sentence
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon : https://www.screencast.com/t/AuRhFUncPZ
-Give the title of the question
-Enter the question to be asked
-Enter the text related to the question.
-Click on Highlight token button.
-Click on sentence button.
-Select the token to be highlighted.
-Click clear button to make token 0.

^Clear token for paragraph
-Go to the URL : https://www.ucertify.com/editor/?action=new
-Click on the icon : https://www.screencast.com/t/AuRhFUncPZ
-Give the title of the question
-Enter the question to be asked
-Enter the text related to the question.
-Click on Highlight token button
-Click on Paragraph button.
-Select the token to be highlighted.
-Click clear button to make token 0.

@test_data: 
-Enter Text
-Highlight Correct Token
-Clear Button.

@result: Open Text Highlight Module
*/
import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Text Highlight").click({ force: true })
        })
    })

    it('Correct', function() {
        // for correct answer.
        cy.get('.text_area').clear().type("The leader as well as his brother belongs to the same tribe.")
        cy.get('button').contains('Highlight correct token').click()
        cy.get("div[data-id='ID7']").click()
        cy.get("span[data-id='ID7']").click({ force: true })
        cy.get('#edi_tabs > :nth-child(2) > a').click()
        cy.wait(2000);
        cy.get(':nth-child(8)>.pointer').dblclick();
        cy.get('.jss218').click();
        // cy.get('.MuiSnackbar-root-132').should('contain', 'Correct')

        // for incorrect answer.
        //cy.get(':nth-child(8) > .token').click()

    })

    //** Checking the Token clear button on Word. */
    it('Checking the Token Value', function() {
        // Token Will not be zero.
        cy.wait(2000);
        cy.get('.text_area').clear().type("The leader as well as his brother belongs to the same tribe.")
        cy.get('button').contains('Highlight correct token').click()
        cy.get("div[data-id='ID1']").click()
        cy.get("div[data-id='ID3']").click()
        cy.get("div[data-id='ID5']").click()
        cy.get("div[data-id='ID7']").click()
        cy.get(':nth-child(4) > .pl-2').should("have.text", "4 Selected")

        // Token Will be zero.
        cy.get('.btn-outline-primary').click().then(() => {
            cy.get(':nth-child(4) > .pl-2').should("have.text", "0 Selected")
        })
    })

    //**Checking the Token clear button on Sentence. */
    it('Token Will be zero', function() {
        cy.get('.text_area').clear().type("The leader as well as his brother belongs to the same tribe.")
        cy.get('button').contains('Highlight correct token').click()
        cy.get('.btn-group').contains('Sentence').click()
        cy.get("div[data-id='ID0']").click()
        cy.get(':nth-child(4) > .pl-2').should("have.text", "1 Selected")
        cy.get('.btn-outline-primary').click().then(() => {
            cy.get(':nth-child(4) > .pl-2').should("have.text", "0 Selected")
        })
    })

    //**Checking the Token clear button on Paragraph. */
    it('Token Will be zero', function() {
        cy.get('.text_area').clear().type("The leader as well as his brother belongs to the same tribe.")
        cy.get('button').contains('Highlight correct token').click()
        cy.get('.btn-group').contains('Paragraph').click()
        cy.get("div[data-id='ID0']").click()
        cy.get(':nth-child(4) > .pl-2').should("have.text", "1 Selected")
        cy.get('.btn-outline-primary').click().then(() => {
            cy.get(':nth-child(4) > .pl-2').should("have.text", "0 Selected")
        })
    })
    // it.only('Correct', function() {
    //     //cy.get('.grid-item').contains("Text Highlight").click()
    //     cy.get('.text_area').clear().type("The leader as well as his brother belongs to the same tribe.")
    //     cy.get('button').contains('Highlight correct token').click()
    //     cy.get("div[data-id='ID7']").click()
    //     cy.get("span[data-id='ID7']").click({force:true});
    //     cy.get("span").contains("Remediation").click().then(() => {
    //         cy.get("span[data-id='ID7'] + span>span").should("have.class", "icomoon-new-24px-checkmark-circle-1")
    //         cy.wait(2000)
    //         cy.get(".jss188 > .jss97").should("contain", "Correct")
    //     })
    // })
    // it('Incorrect', function() {
    //     // cy.get('.grid-item').contains("Text Highlight").click()
    //     cy.get('.text_area').clear().type("The leader as well as his brother belongs to the same tribe.")
    //     cy.get('button').contains('Highlight correct token').click()
    //     cy.get("div[data-id='ID7']").click()
    //     cy.get("span[data-id='ID7']").click()
    //     cy.get("span[data-id='ID6']").click()
    //     cy.get("span").contains("Remediation").click().then(() => {
    //         cy.get("span[data-id='ID6'] + span>span").should("have.class", "icomoon-new-24px-cancel-circle-1")
    //         cy.wait(2000)
    //         cy.get(".jss188 > .jss97").should("contain", "Incorrect")
    //     })
    // })
});