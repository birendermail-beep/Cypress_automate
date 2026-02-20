
/*
@author: Shashank Gupta
@master_project_id: 7761
@phase_id: 11319
@story_id: 21497
@story_name: Search Catalog Data With Custom URL
@path: 7761/Admin-1/21497.js
@test_case_name:
@description: Search mapping catalog data on custom url and save
@test_steps:
^Search Catalog Data With Custom URL
- Load catalog mapping
- URL: https://www.ucertify.com/admin/catalog_mapping.php
- Click the Switch to Org Level button
- Select User
- Select Course
- Click the Load button
- Fill a valid URL
- Select orgs by checking checkboxes (If checkbox is enabled)
- Click the Search button
@test_data: N/A
@result: Selected orgs data will be searched on the provided URL and save in API
*/