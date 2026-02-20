import BasePage from "../BasePage";
export default class EditorPage extends BasePage {
    //visit to editor area
    static visitEditor(url) {
        cy.visit(url + "/editor/?action=new");
    }
    static clickOnLeftSide() {
            //click on multiple choice icon
            cy.get('.icomoon-multiple-choice-sm').click({ force: true })
            cy.wait(2000)
                //click on all icon
            cy.get('.icomoon-stack-3').click({ force: true })
            cy.wait(2000)
                //click on fill in the blank icon
            cy.get('#fill_in_the_blanks').click({ force: true })
            cy.wait(2000)
                //click on classify match order
            cy.get('#classify_match_order').click({ force: true })
            cy.wait(2000)
                //click on highlight
            cy.get('#highlight').click({ force: true })
            cy.wait(2000)
                //click on graph
            cy.get('#graph').click({ force: true })
            cy.wait(2000)
                //click on chart 
            cy.get('#chart').click({ force: true })
            cy.wait(2000)
                //click on terminal
            cy.get('#terminal').click({ force: true })
            cy.wait(2000)
                //click on evaluator
            cy.get('#programming_lang_evaluator').click({ force: true })
            cy.wait(2000)
                //click on 9 dot button
            cy.get('.icomoon-grid-2').click({ force: true })
            cy.wait(2000)
        }
        //add new 
    static addNewwithChanges() {
            cy.get('#stage_comment').type('add new ', { force: true })
            cy.get('#approve').click({ force: true })
        }
        //write Title and stem
    static writeTitle() {
            cy.get('#title').click().type('Title', { force: true })
            cy.wait(5000)
            cy.get('#stem > .ebook_item_text').click().type('Testing', { force: true })
            cy.wait(5000)
            cy.get('#remediation').type('Testing Remedeation')
        }
        //preview the item in editor area
    static editorPreview() {
            cy.get('#edi_tabs > :nth-child(2) > a').click({ force: true })
            cy.get('#desktop_btn').click({ force: true })
            cy.wait(5000)
            cy.get('#tab_btn').click({ force: true })
            cy.wait(5000)
            cy.get('#mobile_btn').click({ force: true })
            cy.get('#desktop_btn').click({ force: true })
        }
        //Review the answer
    static viewReview() {
            cy.contains('Review').click({ force: true })
            cy.get(':nth-child(1)').contains('Correct Answer').should('be.visible')
            cy.get(':nth-child(2)').contains('Your Answer').should('be.visible')
        }
        //order review answe 
    static viewOrderReview() {
        cy.contains('Review').click({ force: true })
        cy.get('.correct-ans').contains('Correct Answer').click({ force: true })
        cy.get('.correct-ans').should("have.class", "focus")
        cy.get('.your-ans').click({ force: true })
        cy.get('.your-ans').should("have.class", "focus")
    }
    static plotReview() {
            cy.contains('Review').click({ force: true })
            cy.wait(7000);
            cy.get('.correct-ans').contains('Correct Answer').click({ force: true })
            cy.get('.correct-ans').should("have.class", "bg-primary")
            cy.get('.your-ans').click({ force: true })
            cy.get('.your-ans').should("have.class", "bg-primary")
        }
        //help in editor
    static editorHelp() {
            cy.get('#helpButton').click({ force: true })
        }
        //tools in editor
    static editorTools() {
            cy.get('#icon_menu').click({ force: true })
        }
        //response in editor
    static editorAddResponse() {
            cy.get('#fillAuthor').rightclick()
            cy.wait(3000);
            cy.get('#addToken').click({ force: true })
        }
        //delete option in editor
    static delOptions() {
            cy.get(':nth-child(3) > .icomoon-24px-delete-1').click({ force: true })
            cy.get(':nth-child(3) > .icomoon-24px-delete-1').click({ force: true })
        }
        //drag and drop in editor 
    static editorDragDrop(userid1, userid2) {
        cy.get(userid1).trigger('mousedown', { force: true })
            .trigger('mouseup', { force: true })
        cy.get(userid1).trigger('mousemove', { force: true })
        cy.get(userid2).trigger('mouseleave', { force: true })
        cy.get(userid1).trigger("mousedown", {
            which: 1
        });
        cy.get(userid1).trigger("mousemove");
        cy.get(userid2)
            .trigger("mousemove")
            .trigger("mouseup");
        cy.get(userid2).should("be.visible");
    }
    static settingCaseSensitive() {
        cy.get('.icomoon-new-24px-gear-1').click()
        cy.get(':nth-child(1) > .jss204 > .jss105 > .jss122 > .jss216').click({ force: true })
        cy.get('.text-white > span').contains('OK').click({ force: true })
    }
    static settingIgnoreSpecial() {
        cy.get('.icomoon-new-24px-gear-1').click()
        cy.get(':nth-child(2) > .jss204 > .jss105 > .jss122 > .jss216').click({ force: true })
        cy.get('.text-white > span').contains('OK').click({ force: true })
    }
    static settingMultipleCheck() {
        cy.get('.icomoon-new-24px-gear-1').click()
        cy.get(':nth-child(3) > .jss204 > .jss105 > .jss122 > .jss216').click({ force: true })
        cy.get('.text-white > span').contains('OK').click({ force: true })
    }

    static addingDraggable() {
        cy.get('#dndmain').click()
        cy.get('#dndmain').rightclick({ force: true })
        cy.get('ul li span').contains('Draggable').click({ force: true })
        cy.wait(2000);
        cy.get('#drag-top').type('{selectall}{backspace}10')
        cy.get('#drag-value').type('drag')
        cy.get('#drag-name').type('my_drag')
        cy.get('#drag-multi_drag').click()
        cy.get('button').contains('OK').click()
    }

    static visitNative(url) {
        cy.visit(url + "/educator/project/?func=get_my_projects&show=courses");
        cy.get('[data-cy="searchbox"]').type('Native-2018')
    }
}