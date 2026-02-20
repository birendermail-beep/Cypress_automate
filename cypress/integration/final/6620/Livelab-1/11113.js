/*
@author: Anirudha Pratap
@master_project_id: 6620
@phase_id: 10592
@story_id: 
@story_name: Share VM
@path: final/LiveLab
@test_case_name: Share VM.js
@description: There should be option to share vm of child machine
@test_steps:
^Share VM Option only for child machine not for base machine
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=load_machine&action=base_vm&device=bs16&device_name=bs16&vcenter_server_id=0
-On/Connect the machine from left bottom corner
-Go to setting dropdown right bottombar corner.
-Here now there is no any link will be available for share vm

^Share vm option for child machine
-Go to this url: https://ucertify.com/custom/docker/vmadmin/index.php?func=load_machine&action=autograding&device=bs16&vcenter_server_id=0
-On/Connect the machine from left bottom corner
-Go to setting dropdown right bottombar corner.

^Share vm option for child machine
-Go to my library and load the course: MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016
-content: Creating the Nano Server in a Virtual Machine (03kK9)
-On/Connect the machine from left bottom corner
-Go to setting dropdown right bottombar corner.

@test_data:
-Course: MCSA 70-740 Cert Guide: Installation, Storage, and Compute with Windows Server 2016
-Content:Creating the Nano Server in a Virtual Machine (03kK9) 

@result: Share vm link will be visible
*/
