
/*
@author: Rashmi Kumari
@master_project_id: 6621
@phase_id: 11249 
@story_id: 21436
@story_name: SvelteAlignMatch
@path: final
@test_case_name: Align Match.js
@description: svelte align match
@test_steps:
^Open Align Match Module
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match

    ^Add Category
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the Add Category button
    -It will generate 1 column of category

    ^Delete Category
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the columns
    -It will delete the category.

    ^Minimum limit of categories to be deleted.
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the columns
    -When 2 categories are left then a warning message should appear

    ^Maximum limit of category.
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on Add Category button.
    -When 4 categories are there it should give a warning message

    ^Add Items
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the Add Items button
    -It will generate 1 row of items.

    ^Maximum limit of Items to be added.
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on Add Items button.
    -When 4 items are there it should give a warning message

    ^Delete Items
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the rows
    -It will delete the items.

    ^Minimum limit of Items to be deleted.
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click the delete icon given in the rows
    -When 2 rows are left then a warning message should appear

    ^Upload image
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on the upload image icon.
    -Select the image which you want to upload
    -The image should be uploaded

    ^Checking the answer
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -After creating question
    -Go to the review area
    -Match the correct answer by clicking on the previous and next button
    -Click on match
    -Match all the options accordingly.
    -It should show correct

    ^You need to create new question from editor area
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Click on "Create New Question" button
    -Now add 2 category name for example -(State, Capital)
    -Now add 2 Items and add image/ or write name for example - (In state - uttarpradesh, maharashtra and In capital - lucknow, mumbai)
    -Now perform the task in preview mode and check answer 

    ^Add multiple categories
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Try to add more than 4 categories
    -Try to add more than 4 items
    ^Correctly perform the question
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -match all the items correctly

    ^Try to match 1 item incorrectly
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -try to mismatch one item

    ^You can provide text or can upload image in the item field
    -visit the website(url + "/editor/v2/?action=new")
    -Login into website
    -go to editor area 
    -Search Align Match and click Align Match
    -Add item in the question
    -click on image icon
    -Upload image
@test_data:
@result: Open Align Match Module
*/