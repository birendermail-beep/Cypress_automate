
/*
@author: Asif Ansari
@master_project_id: 
@phase_id: 11630
@story_id: 21611
@story_name: Cart
@path: 6618/Website/21611.js
@test_case_name: shoppingcart
@description:
@test_steps:

^open cart index to add or buy products from your cart
-Open https://appbeta.ucertify.com/cart
-A blank page will be open with message of your cart is empty
-Click on continue shopping to add some product in your cart
-After click on continue shopping , https://appbeta.ucertify.com/cart/ will be open

^Click on add to cart to add product in your cart 
-Open modal box for selecting licence
-Click on Add to cart button
-A detail of product with 2 option will be open
-First one is core component and second one is add-on component
-Click on plus icon to expand details
-Click on Add to cart to add product in cart
-Product will be save in your cart

^Click on prceed to checkout
-Click on prceed to checkout button
-Product will be save in your cart with core components

^Click on add to cart to add product in your cart with quantity
-Click on Add to cart button
-A detail of product modal with 2 option will be open
-Click on icon to expand details
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Inc/dec quantity as you need from cart index page

^use to edit licence which product is already added in cart
-Click on Add to cart button
-A detail of product modal with 2 option will be open
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Click on pencil icon to update
-A detail of product with 2 option will be open
-First one is core component and second one is add-on component
-Edit/Select licence then click on update

^use to delete item from cart
-Click on Add to cart button
-A detail of product modal with 2 option will be open
-Click on icon to expand details
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Click on delete button to delete item
-A confirmation box will be appear click on ok to delete

^apply offer on products 
-Click on Add to cart button
-A detail of product modal with 2 option will be open
-Click on icon to expand details
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

^user detail 
-Click on Add to cart button
-A detail of product modal with 2 option will be open
-Click on icon to expand details
-Click on Add to cart
-Click on Proceed to checkout
-Cart index page with add product will be open
-Enter coupon coupan code, gift cards to avail offer
-Enter email/login
-Click on proceed to checkout button
-User detail form open
-Fill all required details
-Select delivery option wich is mentioned on red color below product detail
-Click on pay now button/select paypal option

@test_data: open cart index to add or buy products from your cart
@result: home page open
*/