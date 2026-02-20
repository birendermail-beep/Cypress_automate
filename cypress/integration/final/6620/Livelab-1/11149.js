/*
@author: Avinash Pandey
@master_project_id: 6620
@phase_id:
@story_id:
@story_name: Machine List
@path: final/LiveLab
@test_case_name: Machine List.js
@description:
@test_steps:
^Removed the machine. If the machine is in removing state then for the next aws health check machine will not come
-First we need to create the two child machines and leave it for expired.
-To create the child machine .
-from machine list page. search w740 machine and Open as Test Autograding
-On the machine and leave it (close the browse)for 2 hours to be expired.
-First take container id (machine) which is expired and open the two window tab with same url and load both one after another."

@test_data:
-device to be deleted from vm expiry area. (logs => vm_expiry with status expired)

@result: Deleted machine will not be shown in new tab.
*/

//requires manual testing