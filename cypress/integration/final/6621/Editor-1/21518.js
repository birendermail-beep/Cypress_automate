
/*
@author: Rashmi Kumari
@master_project_id: 6621
@phase_id: 11278
@story_id: 21518
@story_name: SvelteChooseMultiGrid
@path: 6621/Editor-1/21518.js
@test_case_name: SvelteChooseMultiGrid
@description: SvelteChooseMultiGrid
@test_steps:
^Title
-Click the Title text box
-Enter the title

^Add row
-Click the Add Row button.
-Row will be added

^Add column
-Click the Add Column button.
-Column will be added

^Delete Column
-Click the delete icon given in the column to delete column
-A confirmation dialog appears, Click Yes

^Delete Column
-Click the delete icon given in the column to delete column
-A confirmation dialog appears, Click No

^Delete Column
-Click the delete icon given in the column to delete column
-When only 2 column is left and you click on delete icon, a dialog box will appear prompting "You have reached the minimum number of columns you can delete."
-Click Cancel

^Delete Row
-Click the delete icon given in the row to delete row
-A confirmation dialog appears, Click Yes

^Delete Row
-Click the delete icon given in the row to delete row
-A confirmation dialog appears, Click No

^Delete Row
-Click the delete icon given in the row to delete row.
-When only 2 row is left and you click on delete icon, a dialog box will appear prompting "You have reached the minimum number of rows you can delete."
-Click Cancel

^Fix the cell
-Click on the checkbox given in any of the cell.
-Then the selected option will fixed you will not be able darg the item in the preview section

^edit options
-click on the options field and update the values
-In the preview area, drag and drop the cells in correct sequence

^edit options
-click on the options field and update the values
-In the preview area, drag and drop the cells in incorrect sequence

^add image
-Click on the image icon given in any of the cell.
-A dialog box will open, go the the gallery tab.
-Click on the 3 dots, select option Use Media
-Give the background alt and click Done
-Image will be added in the respective cell

^Remove image
-Click on the cross icon appeared in the cell in which the image is added
-Image should be removed

@test_data:n/a
@result:
*/