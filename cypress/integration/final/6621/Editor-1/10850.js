/*
@author: irfan ahmad
@master_project_id: 6621
@phase_id: 10868
@story_id: 10850
@story_name: Genetating Playlist
@path: final\6621
@test_case_name: Genetating Playlist.js
@description:n/a
@test_steps:
^Generating Playlist(Full Procedure)
-Go to My projects and and go to author area and load the course.
-Now go to (url + /utils/generate_video_image.php)
-To generate the array click Generate Video Playlist button.
-If there is any video which don't have thumbnail, will show in the tabular form.
-If there is any guid which is of vimeo , youtube then there is option to open the guid in editor as in case of vimeo, if vimeo thumbanail is not correct then this error will occur and in case of youtube , there will be issue with youtube URL.
-In case of ucertify, generate thumbnail by playing the video and the click generate (A thumbail will be generated in right side) and then click upload thumbnail.
-After solving thumbnail error or if there is no thumbnail error duration updation progress is start automatically.
-if anyone want to skip the thumbnail generation , click the update duration button and then in a pop up message click yes.
-After getting the duration (which will take some time according to the no of ucertify videos) if there is no error in getting duration automatically, then the playlist generation start automatically else the error will be shown in tabular form.
-To solve the errors Make sure asset url is correct and then click the action btn and play the video. 
-When all the errors will solve playlist generation start automatically. If anyone wants to skip the error click Generate playlist and then in pop up click yes button.
-If all the errors will solve and playlist generated a message will show that Playlist is generated.

^Generating Playlist (if there is only thumbnail issue)
-Go to My projects and and go to author area and load the course.
-Now go to (url + /utils/generate_video_image.php)
-To generate the array click Generate Video Playlist button.
-If there is any video which does't have thumbnail,  or have thumbnail issue it will show in the tabular form.
-If there is any guid which is of vimeo , youtube then there is option to open the guid in editor (as in case of vimeo, if vimeo thumbanail is not correct/given then this error will occur and in case of youtube , there will be issue with youtube URL.)
-In case of ucertify videos, there is button for generating thumbnail. After clicking on it, a modal will open.
-To Generate thumbnail, first play the video and then click generate (A thumbail will be generated in right side) and then click upload thumbnail.
-After solving thumbnail error , duration updation progress is start automatically.
-After getting the duration (which will take some time according to the no of ucertify videos) if there is no error in getting duration automatically, then the playlist generation start automatically 
-If all the errors will solve and playlist generated a message will show that Playlist is generated.

^Generating Playlist (skipping thumbnail issue)
-Go to My projects and and go to author area and load the course.
-Now go to (url +/utils/generate_video_image.php)
-To generate the array click Generate Video Playlist button.
-If there is any video which does't have thumbnail,  or have thumbnail issue it will show in the tabular form.
-To skip the thumbnail issue click the update duration button.
-After clicking, A pop up with warning msg will appear, now click yes to skip. The update duration step will start automatically.
-After getting the duration (which will take some time according to the no of ucertify videos) if there is no error in getting duration automatically, then the playlist generation start automatically 
-If all the steps will complete and playlist generated a message will show that Playlist is generated.

^Generating Playlist (if there is only duration issue)
-Go to My projects and and go to author area and load the course.
-Now go to (url +/utils/generate_video_image.php)
-To generate the array click Generate Video Playlist button.
-As there is no thumbnail issue, duration step will be started immediately and will take time according to the no of ucertify videos.
-If there is any video in which duration is not get automatically a table will show containing all the details. 
-There will be the get duration button on clicking a modal will open. Now to generate/get duration play the video. If video url is correct then duration will be get.
-If all the errors will solve then playlist generation will start automatically and array will be generated.

^Generating Playlist (skipping duration issue)
-Go to My projects and and go to author area and load the course.
-Now go to (url +/utils/generate_video_image.php)
-To generate the array click Generate Video Playlist button.
-As there is no thumbnail issue, duration step will be started immediately and will take time according to the no of ucertify videos.
-If there is any video in which duration is not get automatically a table will show containing all the details. 
-Now to skip the duration issue click the generate playlist button.
-A pop up will appear containg warning message, Now click yes to skip.
-Now playlist generation will start automatically and array will be generated.
    
@test_data: n/a
@result: Video playlist generated successfully.
 */

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index'
describe("Video playlist generate", function() {
    it('Generate Video playlist', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            EditorPage.visitNative(data.url)
            cy.get('[course_code="03yAA"] [data-cy="open_course"]').click({ force: true })
            cy.wait(10000)
            EditorPage.visitNative(data.url)
            cy.get('[course_code="03yAA"] [data-cy="author"]').click({ force: true })
            cy.visit(data.url + '/utils/generate_video_image.php')
            cy.get('[data-original-title="Generate Video Playlist"]').click({ force: true })
        })
    })
})