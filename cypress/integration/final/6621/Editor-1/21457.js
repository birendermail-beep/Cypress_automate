
/*
@author: Rashmi Kumari
@master_project_id: 6621
@phase_id: 11307
@story_id: 21457
@story_name: SvelteShadedGrid
@path: final
@test_case_name: SvelteShadedGrid
@description: SvelteShadedGrid
@test_steps:
^Change the grids size, row and Column
-Change the row count & col count with the required validation (under min and max value)
-Change the width and height of the cell, whatever you write it will be multiple of 40px 
-VALIDATION
-If you select value less than the minimum value (isuppose 0) then, you will get a alert saying you min value should be 1. Same for max value, you can't enter value more than the max value of the input type number. And by this, min and max value will get set as field value 
-Rest for the empty field, you will get a alert of ""Field value can not be emply"". As you can not have rows (0) or width (0)"

^Shade the Author cells
-Shade whatever cell you want to shade to get those cells by default shded on preview side

^Lock the Author shaded cells
-Once you have shaded the cells, you can lock the.cells.
-For locking the cell, the cells needs to be part of the correct Answer
-Also, lock will not work when no cells are shaded.

^Add Correct Ans by Location
-Initially set correct location is selected 
-Shade the grids you want to be the correct answer
-This will be updated in XML

^Add Correct answe by Count
-from the method dropdown change the options to set correct count
-Enter the correct number of count
-This will be updated in XML
@test_data:
-Authroing grids
-XML
-Preview Grids
-Authroing grids
-XML
-Preview Grids
-Authroing grids
-XML
-Preview Grids
-XML
-XML
@result:
*/