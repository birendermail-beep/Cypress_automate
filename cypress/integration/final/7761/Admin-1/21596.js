
/*
@author: Raj Maurya
@master_project_id: 7761
@phase_id: 11697
@story_id: 21596
@story_name: Bookstore Improvement
@path: 7761/Admin-1/21596.js
@test_case_name: Bookstore Improvement
@description: Bookstore Improvement page.
@test_steps:
^Bookstore Improvement
- https://www.ucertify.com/admin/inside_sales/bookstore.php
- goto www.ucertify.com/admin
- than click on others tab
- than click Inside Sales
- than click bookstore tab
- select the team type
- than select the primary contact
- select the type all data or bookstore data
- click on show button
- visible the complete data 

^Find org wise 
- goto the org drop down
- than select any org autometic scrolled page than show the data

^Find Instructor wise
- goto the Instructor drop down
- select any Instructor than autometic scolled page

^Action button in instructor table
- goto the instructor table 
- click on action button 
- show dropdown
- click on edit or research or add about

^Exception page
- https://www.ucertify.com/admin/inside_sales/exception.php
- goto www.ucertify.com/admin
- than click on others tab
- than click Inside Sales
- than click Exception tab
- show the all exception list
- 1.Org in database but no bookstore found  
- 2.Instructor in bookstore but not in org
- 3.Instructor in table but instructor detail is incomplete like linked in link or email address
- 4.instructor but there is no book mapped
- 5.Instructor is from different bookstore org but in our org mapping its different
- 6.Bookstore found but no books
- 7. None of the bookstore book mapped to course
- click on any page than show heading wise detail


^Section Analytics Report
- https://www.ucertify.com/admin/inside_sales/section_analytics_report.php
- goto www.ucertify.com/admin
- than click on others tab
- than click Inside Sales
- than click kpi report
- than click section analytics report
- select the team type
- than select the team memeber
- tha select the type instructor wise or Org wise
- click on show button
- show the data on selected type
- Data is cetralize queter wise q1[jan,feb,mer],q2[apr,may,jun],q3[jul,aug,sep],q1[oct,nov,dec]
- show the total student,total section with student,total section


^Lab Analytics Report
- http://www.ucertify.com/custom/docker/vmadmin/lab_analytics_report.php
- this report show 24hr machine report
- Filter the date wise 
- show total vm,total cpu, total ram,total storage
- and calulate data show per one hour report show column
- click on export button export the complete table
@test_data:
@result:
*/