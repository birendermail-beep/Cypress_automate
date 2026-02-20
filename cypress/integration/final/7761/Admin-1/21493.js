
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11319
@story_id: 21493
@story_name: Search Catalog Data With Custom URL
@path: 7761/Admin-1/21493.js
@test_case_name:
@description: Search catalog data on custom url and save
@test_steps:
^Search Catalog Data With Custom URL
- Load catalog mapping
- URL: https://www.ucertify.com/admin/catalog_mapping.php
- Select Org
- Select Course
- Click the Load button
- Fill a valid URL
- Select course keyword by checking checkboxes (If checkbox is enabled)
- Click the Search button
@test_data: N/A
@result: Selected course's keyword data will be searched on the provided URL and save in API
*/