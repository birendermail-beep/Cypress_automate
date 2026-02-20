/*
@author: Anirudh Pratap
@master_project_id: 6621
@phase_id: 
@story_id: 
@story_name: Video Player Annotation
@path: final/6621
@test_case_name: Video Player Annotation.js
@description: 
@test_steps:
^Adding Notes
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and then click on the videos tab.
-Now Click on any video and after loading the video click on the notes btn showing in the video player controller.
-Now Click on the Add Notes button and then type the notes and then click add notes icon.
-Notes will be added and a msg will appear having Notes added message. 

^Discarding added notes
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and then click on the videos tab.
-Now Click on any video and after loading the video click on the notes btn showing in the video player controller.
-Now Click on the Add Notes button and then type the notes and then click cancel icon 
-Notes will be canceled and will not save


^Moving to the timeframe for added notes
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and then click on the videos tab.
-Now Click on any video and after loading the video click on the notes btn showing in the video player controller.
-Now to move to any particular frame click on the timestamp of the added notes. 
-Video timestamp will move accordingly.


^Editing the added notes
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and then click on the videos tab.
-Now Click on any video and after loading the video click on the notes btn showing in the video player controller.
-Now click on the edit button icon of the comment/notes which you want to edit.
-After editing the content click on save button to save.
-A msg will show on clicking the save button having message Notes saved!

^Deleting the added notes
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and then click on the videos tab.
-Now Click on any video and after loading the video click on the add notes btn showing in the video player controller.
-Now click on the delete button icon of the comment which you want to delete.
-Comment will be deleted and a message will appear notes deleted

^Hiding the btn from the video controller when video is in fullscreen mode
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and then click on the videos tab.
-Now Click on any video and after loading the video click on the full screen icon in the video controller.
-On full screen add notes btn will not be visible.

^Adding Notes
-Open the course in which there is video which is opening in jwplayer.
-Go to the chapter and lessons and open the chapter in which there is video added.
-Now Click on any video and after loading the video click on the notes btn showing in the video player controller.
-Now Click on the add Notes button and then type the notes and then click add notes icon.
-Notes will be added and a msg will appear having Notes added message. 

@test_data: n/a
@result: Video Annotation will open.
*/

import { Navbar, login_username, login_password, LoginPage, StudentPage } from '../../../../page-objects/pages/index' 
describe("embed (knowledge check) testing", function() {
    beforeEach('This is login', function() {
            cy.fixture('global').then(data => {
                cy.visit(data.url)
                Navbar.clickOnLogin()
                LoginPage.loginPage(login_username, login_password)
                StudentPage.studentDashboard('[class_code="06aLh"] > [data-cy=manage]');
            })
        })
        it('Adding notes',function(){
            cy.get('[data-cy=view_course]').click();
            cy.get('[intro-id="chapters"]').click();
            cy.get('[intro-id="videos"]').click();
            cy.wait(5000);
            cy.get('#cardItem02Srv > .row > .col-md-8 > .card-body').click();
            cy.wait(3000);
            // elem not accessible
        })
})