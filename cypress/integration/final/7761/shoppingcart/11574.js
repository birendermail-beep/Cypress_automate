/*
@author:Anirudha Pratap
@master_project_id: 7761
@phase_id: n/a
@story_id:11574
@story_name: shoppingcart
@path: final/7761/shoppingcart
@test_case_name: shoppingcart.js
@description:
@test_steps: 
^open cart index to add or buy products from your cart
-Open https://www.ucertify.com/cart/
-A blank page will be open with message of your cart is empty
-Click on continue shopping to add some product in your cart
-After click on continue shopping , https://www.ucertify.com/courses/ will be open

^Click on add to cart to add product in your cart 
-Click on Add to cart dropdown
-A detail of product with 2 option will be open
-Click on + icon to expand details
-Click on Add to cart to add product in cart
-Product will be save in your cart

^Click on prceed to check
-Click on Add to cart dropdown
-A detail of product modal with 2 option will be open
-Click on + icon to expand details
-Click on Add to cart
-Click on Proceed to checkout

^Click on add to cart to add product in your cart with quantity
-Click on Add to cart dropdown
-A detail of product modal with 2 option will be open
-Click on + icon to expand details
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Inc/dec quantity as you need from cart index page

^use to delete item from cart
-Click on Add to cart dropdown
-A detail of product modal with 2 option will be open
-Click on + icon to expand details
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Click on delete button to delete item
-A confirmation box will be appear click on ok to delete

^apply offer on products 
-Click on Add to cart dropdown
-A detail of product modal with 2 option will be open
-Click on + icon to expand details
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Enter coupon coupan code, gift cards to avail offer

^Select suitable currency to buy products
-Follow above steps
-Click on Change currency

^Click on proceed to checkout to pay the charge and buy products
-Enter user email
-Confirm email
-Click on proceed checkout

^Get price from catalog
-Load provided URL
-Go to course 77-427-complete
-Click add to cart

^Get price from catalog
-Load provided URL to goto cart area

^Change the currency and checkout-visit the website
-login into page
-click on home page
-click on browse titles and click on adobe
-click on add to cart and change the currency

^Add cart then Proceed to Checkout with wrong Email
-login into page
-click on home page

@test_data: open cart index to add or buy products from your cart
@result: home page open
*/

import { Navbar, login_username, login_password, LoginPage, InstructorPage } from '../../../../page-objects/pages/index'
describe("shopping cart area", function() {
    beforeEach("This will run before each", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
        })
        Navbar.clickOnLogin()
        LoginPage.loginPage(login_username, login_password)
    })
    it("open cart index to add or buy products from your cart", function() {
        InstructorPage.visitShopping()
        cy.get('[data-cy="continue_shop_cy"]')
            .contains("Continue Shopping")
            .click({ force: true });
    });
    it("Click on add to cart to add product in your cart with quantity", function() {
        InstructorPage.visitShopping()
        cy.get('[data-cy="continue_shop_cy"]')
            .contains("Continue Shopping")
            .click({ force: true });
        cy.contains("1Z0-063").click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/cart/?buy=1Z0-063");
        })
        cy.get('[data-cy=price_cy]').should('have.attr', 'value').then((val) => {
            cy.get('[data-cy=quantity_cy]').clear().type("2", { force: true }).blur()
            cy.get('#amount_021DR_0').should('value', val * 2)
        })
    });
    it("use to delete item from cart", function() {
        InstructorPage.visitShopping()
        cy.get('[data-cy="continue_shop_cy"]')
            .contains("Continue Shopping")
            .click();
        cy.contains("1Z0-063").click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/cart/?buy=1Z0-063");
        })
        cy.get('[data-cy="delete_cy"]').click({ force: true })
        cy.get('#btn-confirmed').click({ force: true });
    });
    it("apply offer on products", function() {
        InstructorPage.visitShopping()
        cy.get('[data-cy="continue_shop_cy"]')
            .contains("Continue Shopping")
            .click();
        cy.contains("1Z0-063").click({ force: true });
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/cart/?buy=1Z0-063");
        })
        cy.get("#coupon_code").type("ID25(current offer)");
        cy.get('[data-cy=email_cy]').type(login_username, { force: true })
        cy.get('[data-cy=confirm_email_cy]').type(login_username, { force: true })
        cy.get('#currency').click({ force: true })
        cy.get('.mr-md > .dropdown-menu > :nth-child(4) > .dropdown-item').click({ force: true })
        cy.get("#proceed").click({ force: true });
    });
    // it("open cart index to add or buy products from your cart", function() {
    //     InstructorPage.visitShopping()
    //     cy.get('[data-cy="continue_shop_cy"]')
    //         .contains("Continue Shopping")
    //         .click({ force: true });
    // });
    // it.only("Click on add to cart to add product in your cart with quantity", function() {
    //     InstructorPage.visitShopping()
    //     cy.get('[data-cy="continue_shop_cy"]')
    //         .contains("Continue Shopping")
    //         .click({ force: true });
    //     cy.contains("1Z0-063").click({ force: true });
    //     cy.fixture('global').then(data => {
    //         cy.visit(data.url + "/cart/?buy=1Z0-063");
    //     })
    //     cy.get('[data-cy=price_cy]').should('have.attr', 'value').then((val) => {
    //         cy.get('[data-cy=quantity_cy]').clear().type("2", { force: true }).blur()
    //         cy.get('#amount_01uwr_0').should('value', val * 2)
    //     })
    // });
    // it("use to delete item from cart", function() {
    //     InstructorPage.visitShopping()
    //     cy.get('[data-cy="continue_shop_cy"]')
    //         .contains("Continue Shopping")
    //         .click();
    //     cy.contains("1Z0-063").click({ force: true });
    //     cy.fixture('global').then(data => {
    //         cy.visit(data.url + "/cart/?buy=1Z0-063");
    //     })
    //     cy.get('[data-cy="delete_cy"]').click({ force: true })
    //     cy.get('#btn-confirmed').click({ force: true });
    // });
    // it("apply offer on products", function() {
    //     InstructorPage.visitShopping()
    //     cy.get('[data-cy="continue_shop_cy"]')
    //         .contains("Continue Shopping")
    //         .click();
    //     cy.contains("1Z0-063").click({ force: true });
    //     cy.fixture('global').then(data => {
    //         cy.visit(data.url + "/cart/?buy=1Z0-063");
    //     })
    //     cy.get("#coupon_code").type("ID25(current offer)");
    //     cy.get('[data-cy=email_cy]').type(login_username, { force: true })
    //     cy.get('[data-cy=confirm_email_cy]').type(login_username, { force: true })
    //     cy.get('#currency').click({ force: true })
    //     cy.get('.mr-md > .dropdown-menu > :nth-child(4) > .dropdown-item').click({ force: true })
    //     cy.get("#proceed").click({ force: true });
    // });

    it("Click on proceed to your cart", function() {
        InstructorPage.visitShopping()
        cy.get('[data-cy="continue_shop_cy"]')
            .contains("Continue Shopping")
            .click({ force: true });
        cy.contains("1Z0-063").click();
        cy.wait(5000)
        cy.get('#buy_btn').click();
        cy.wait(5000);
        cy.get("#proceed_checkout").click({ force: true });
    });

    it("Go to the mentiond url and click on continue to shopping and add courses", function() {
        InstructorPage.visitShopping()
        cy.get('[data-cy="continue_shop_cy"]')
            .contains("Continue Shopping")
            .click({ force: true });
        cy.wait(2000)
        cy.contains("1Z0-063").click();
        cy.wait(5000)
        cy.get('#buy_btn').click();
        cy.wait(5000);
        cy.get('#continue').click({ force: true });
        cy.get("#total_cart_item").should("be.visible")
    });
    it("Cart view and Delete item from cart", function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url + "/cart/?buy=312-49-v8");
        })
        cy.get('[data-cy="delete_cy"]').click({ force: true })
        cy.get('#btn-confirmed').click({ force: true });
    });
    it('Change the currency and checkout', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=previous_page]').click({ force: true })
            cy.visit(data.url + '/exams/Adobe/indesign-2017.html')
        })
        cy.wait(1500)
        cy.get('.btn-group > .btn-primary').click({ force: true })
        cy.wait(1500)
        cy.get('#continue').contains('Add to Cart').click()
        cy.contains('View Cart').click({ force: true })
        cy.wait(3000)
        cy.fixture('global').then(data => {
            cy.get('#email').clear().type(data.auditor_email[0], { force: true })
        })
        cy.wait(1000)
        cy.fixture('global').then(data => {
            cy.get('#confirm_email').clear().type(data.auditor_email[0], { force: true })
        })
        cy.get('#currency').click()
        cy.get('li > a').contains('Indian Rupees').click()
        cy.get('#colNet > .currency').contains('INR')
        cy.get('#proceed').click()
        cy.wait(3000)
        cy.log('It always show amount in USD')
        cy.get('#colNet').contains('Net Amount (INR)')
    })
    it('Add cart then Proceed to Checkout with wrong Email', function() {
        cy.fixture('global').then(data => {
            cy.get('[data-cy=previous_page]').click({ force: true })
            cy.wait(2000)
            cy.get('#shop_by_ucertify').click()
            cy.wait(3000)
            cy.visit(data.url + '/exams/Adobe/indesign-2017.html')
        })
        cy.wait(1500)
        cy.get('.btn-group > .btn-primary').click({ force: true })
        cy.wait(1500)
        cy.get('#continue').contains('Add to Cart').click()
        cy.contains('View Cart').click({ force: true })
        cy.wait(3000)
        cy.fixture('global').then(data => {
            cy.get('#email').clear().type(data.auditor_email[0], { force: true })
        })
        cy.get('#email').next().should('be.hidden')
        cy.wait(1000)
        cy.get('#confirm_email').clear().type('ankit.yadav@gmail.com', { force: true })
        cy.get('#confirm_email').next().should('be.hidden')
        cy.get('#proceed').click()
        cy.get('#confirm_email').next().should('be.visible')
    })
});