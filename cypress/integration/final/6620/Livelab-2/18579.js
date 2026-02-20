
/*
@author: Prabhat Kumar
@master_project_id: 6620
@phase_id: 11163
@story_id: 18579
@story_name: Snapshot restore
@path: final/6620/Livelab-2
@test_case_name: LB_UA_04
@description: When device attributes is keep vm alive, After machine expiry when comes and connect the machine. Snapshot will be restore rather than creating new child machine.
@test_steps:
^Snapshot restore after expiry
- Below steps will be performed manually
- Load the lab as you did in the previous test case LB_UA_01 after 1,2 hours. Create one folder inside the machine and leave the machine for the 1,2 hours to be expired.
- Come to the same lab again and Connect the machine, you can now see the folder will be deleted.
- Reset the machine you will see the created folder will be deleted now
^Reset the machine
- Below steps will be performed manually
- After machine connected, create one folder inside the machine.
- Reset the machine from machine name dropdown rest option.
- You can observe the created folder will be deleted. Reference video: https://www.screencast.com/t/FsTYAHS3sc
@test_data:
@result:
*/


