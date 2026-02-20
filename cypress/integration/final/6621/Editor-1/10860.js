/*
@author: Vikas Shukla
@master_project_id: 6621
@phase_id: 10860
@story_id: Image Annotation
@area: final/6621
@test_case_name: Image Annotation.js
@description: n/a
@test_steps: 
^Open Image annotation
-login to page
-visit the editor dashboard go to fact 
-Add Image annotation from the block library list.
-Open the Image Annotation module

^Adding Symbol in Image annotation
-Open editor and go to fact 
-Add Image annotation from the block library list.
-Now go to the setting and change the symbol from Mark symbol select list
-Click on the image , respective marker will be added in the image.

^Change Image from gallery
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click Add New
-A dialog box appears
-Click Upload Media
-Go to the Gallery tab
-Select the image and click on 3 dots
-Select Use Media
-Click Save

^Upload image
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click Add New
-A dialog box appears
-Click Upload Media
-Click Upload Files
-Select the image which you want to upload
-Give short description and tags
-Click Upload details
-Click Save

^Figure caption
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click Figure Capture text box
-Give the caption
-Check in preview area, changes should reflect

^Annotation discreption
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-click on right arrow icon

^Delete marker
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click on Delete icon
-Click Yes
-Marker should be deleted

^Marker not deleted 
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click on Delete icon
-Click No
-Marker should not be deleted

^Delete last marker
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click on Delete icon on the last item of marker
-Click Yes
-A warning message should come "There should be at least one element left."

^Edit marker
-login to page
-visit the editor dashboard
-Search Image Annotation
-Open the Image Annotation module
-Click on the marker heading.
-Give title and description
-Select the marker style.
-Go to the preview section, marker should be updated and on click of marker, the maker should be displayed with title and description.

^Image annotation
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.

^Opening the setting modal of the image annotation
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.

^Changing the setting of the image annotation. (image)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.
-To change image click on the browse button media dialog will be open now upload the image or choose from gallery and then click submit.
-On changing image the data will be reset.

^Changing the setting of the image annotation. (width)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.
-change the width of the image (400 to 600).
-On changing image width the data will be reset.

^Changing the setting of the image annotation. (color)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.
-change the color from the select box.
-click submit.

^Changing the setting of the image annotation. (Text Align)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.
-change the text align from the select box. (Left or Bottom)
-click submit.

^Changing the setting of the image annotation. (Mendatory field)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.
-Leave Image Alt and image caption empty.
-click submit.
-A warning wil"

^Changing the setting of the image annotation. (Border)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the image, setting icon will be visible click on it setting modal will be open.
-check/ uncheck the border
-click submit.

^Deleting the mark point (if it has content)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the mark point, and click on delete icon and a warning message will show. 
-Now click yes, a succes msg will be shown and then click ok, mark point will be delete and points will rearrange accordingly.

^Deleting the mark point (if it is copied)
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the mark point, and click on delete icon and a success message will show on deletion
-Now click ok, mark point will be delete and points will rearrange accordingly.

^Copy the mark point
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Hover on the mark point, and click on copy icon 
-A success message will show on copy.
-Now click on image any where to paste the copied point

^Deleting the list
-Go to the editor
-Open fact or any other module.
-Now add the image-annotation from the block library list
-Image annotation will be available in the editor.
-Now add some points and then delete the all the content
-A error msg will be shown and list will be added

^Opening Image annotation in ebook
-Add a guid in the ebook of CRN For eg: Native-2018
-And then check it on the student view.
-Image annotation will be appear in ebook if successfully added

^Adding Symbol in Image annotation
-Open editor and go to fact 
-Add Image annotation from the block library list.
-Now go to the setting and change the symbol from Mark symbol select list
-Click on the image , respective marker will be added in the image.

^Changing view to onclick with proper content format
-Open editor and go to fact 
-Add Image annotation from the block library list.
-Now go to the setting and change the view from Text Align select list by selecting the on click
-Now add the points on the image and add the content in the proper format .
-Format:  First bold word will be treated as heading and then add ':' followed by the content.
-eg: <b>Heading</b> : Sample Content
-Go to preview and click on the point the text will be visible.

^Changing view to onclick with improper content format
-Open editor and go to fact 
-Add Image annotation from the block library list.
-Now go to the setting and change the view from Text Align select list by selecting the on click
-Now add the points on the image and add the content in the improper format .
-Proper Format:  First bold word will be treated as heading and then add ':' followed by the content.
-eg: <b>Heading</b> : Sample Content  OR  <b>Heading :</b> Sample Content
-Go to preview and click on the point the text will not be properly visible if the proper format is not followed for the respective markers.

^Navigating through the points in image annotation onclick view
-Open editor and go to fact 
-Add Image annotation from the block library list.
-Now go to the setting and change the view from Text Align select list by selecting the on click
-Now add the points on the image and add the content in the proper format .
-Format:  First bold word will be treated as heading and then add ':' followed by the content.
-eg: <b>Heading</b> : Sample Content
-Go to preview and click on the point the text will be visible.
-Now a popup will open having two buttons next and prev click on it to navigate throgh next and previous markers.

^Verifying Suggestion issue
-Open all the screenshot with done status in the added in M&A doc.
-Verify that it is solved or not. 

@test_data: n/a
@result: Image Annotation module open 
*/

import { Navbar, login_username, login_password, LoginPage, EditorPage } from '../../../../page-objects/pages/index' 
describe('ebook area testing', function() {
    beforeEach('This is login', function() {
        cy.fixture('global').then(data => {
            cy.visit(data.url)
            Navbar.clickOnLogin()
            LoginPage.loginPage(login_username, login_password)
            cy.visit(data.url + "/editor/?action=new");
            cy.get('.grid-item').contains("Multiple Choice").click({ force: true })
            cy.wait(4000);
            cy.get('#stem > .controls_button > .block-controls > .block-controls__container > .block-controls__bar > .block-controls__tools > .block-controls__add > .icomoon-new-24px-add-circle-1').click({ force: true })
            cy.wait(2000);
            cy.get('#image-annotation').click();
            cy.wait(2000);
            cy.get('.item_labelClass').contains('Image Annotation').click();
            cy.get('.an_svg').should('exist');
        })
    })

    it('Adding Symbol in Image annotation', function() {
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').trigger('mouseover')
        cy.get('.an_s > div > .btn > .icomoon-24px-settings-1').click({force:true});
        cy.get('#annotate_symbol').select('Cross Marker');
        cy.contains('Submit').click();
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(117,129);
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(228,135);
        //cy.get('[style="left: 214.85183715820312px; top: 121.93055555224419px;"]').should('exist');
    });

    it('Changing view to onclick with proper content format', function() {
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').trigger('mouseover')
        cy.get('.an_s > div > .btn > .icomoon-24px-settings-1').click({force:true});
        cy.get('#annotate_image_align').select('On Click');
        cy.contains('Submit').click();
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(117,129);
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(228,135);
        cy.wait(2000);
        cy.get('#edi_tabs > :nth-child(2) > a').click();
        cy.wait(10000);
        // cy.get('#stem_show > [sub_type="image-annotation"] > .an_c > .an_p > [style="left: 103.85183715820312px; top: 115.93055555224419px;"]').click();
        // cy.wait(6000);
        // cy.get('#next_btn_1').click();
        cy.get('#stem_show > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').should('exist');
    })

    it('Changing view to onclick with improper content format', function() {
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').trigger('mouseover')
        cy.get('.an_s > div > .btn > .icomoon-24px-settings-1').click({force:true});
        cy.get('#annotate_image_align').select('On Click');
        cy.contains('Submit').click();
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(117,129);
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(228,135);
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').click(300,145);
        cy.get('#mce_15 > .pre-block > .an_li > :nth-child(1) > [a_c="1"] > b').clear();
    })

    //**change image */
    it('16.2 change image ', function() {
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').trigger('mouseover')
        cy.get('.an_s > div > .btn > .icomoon-24px-settings-1').click({force:true});
        cy.wait(2000);
        cy.get('#annotate_upload_image').click();
        cy.wait(2000);
        cy.get('#tab2').click();
        cy.wait(2000);
        cy.get(':nth-child(3) > .relative > .px-2 > .px-0').click();
        cy.get(':nth-child(3) > .relative > .px-2 > .dropdown-menu > .use_media > .dropdown-item').click();
        cy.get('.btn-primary').contains('Submit').click();
        cy.wait(2000);
        cy.get('.sweet-alert').should('exist');
    })

    //** Figure caption */
    it('16.4 figure caption', function() {
        cy.get('#stem > [sub_type="image-annotation"] > .an_c > .an_p > .an_svg').trigger('mouseover')
        cy.get('.an_s > div > .btn > .icomoon-24px-settings-1').click({force:true});
        cy.get('#annotate_image_caption').clear().type('fig 1');
        cy.get('.btn-primary').contains('Submit').click();
    })

    //** Delete annotation */
    it('16.6 Annotation delete', function() {
        //automation not possible
    })

    //** Copy the annotation */
    it('16.9 copy marker', function() {
        //automation not possible
    })
})