
/*
@author: Raj Maurya
@master_project_id: 7761
@phase_id: 11638
@story_id: 21589
@story_name: Bookstore Data
@path: 7761/Admin-1/21589.js
@test_case_name: bookstore data 
@description: show all bookstore data
@test_steps: 
^Show all bookstore data
-got to : https://www.ucertify.com/admin/bookstore.php
- already show complete data 

^Use Search button
-goto : https://www.ucertify.com/admin/bookstore.php
-click the search box fill the text
-click the search button logo or press the the enter button 
-after click show the searching data

^Use Advance Search button
-goto : https://www.ucertify.com/admin/bookstore.php
-click the search button and show the drop down
-then click the advance search button 
-show the popup box in advance search
-filter the store wise,department wise,publisher wise and title,isbn 
-click the search button
-show the all filter data 

^Export the data in localfile
-goto : https://www.ucertify.com/admin/bookstore.php
-click the export button 
-show the drop down
-click the export as csv or export as xls 
-then downloaded the csv or xls file 

^show more 100 row
-got to : https://www.ucertify.com/admin/bookstore.php
-click Load More button in bottom side

@test_data: none
@result: none
*/