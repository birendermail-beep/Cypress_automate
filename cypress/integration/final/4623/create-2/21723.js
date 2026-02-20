/*
@author: Sahab Lal Gautam
@master_project_id: 7761
@phase_id: 12116
@story_id: 12116
@story_name: Automated Epub Convert Issues
@path: final/Create
@test_case_name: Completed Automated Epub Convert
@description: When we convert the book automated epub
@test_steps: 

^Soft and Hard Paragraph
- Go to the Url https://www.ucertify.com/educator/project/epub/index.php.
- Internal Work

^Replace “Chapter” To “Lesson”.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button.
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Toggle The Replace Chapter To Lesson.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where chapter replace the Lesson.

^Replace “book” to “Course”.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Toggle The Replace Book To Course.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where chapter replace to Lesson.

^Search “<a” and sort the url link. Progress
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Toggle The URL Short.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where the URL is Short.

^Remove unnecessary links like chapter link (xhtml) Done
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Toggle The Remove Unnecessary Link.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where remove the unnecessary link.

^Check the panel and apply the Callout are
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Select the Snt option in given dropdown.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the all the panel convert into snt panel.

^Upload the Image and change the image source path.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Enter the Image Folder Name in input text area.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where the image should be displayed properly.

^Aply the semicolon(:) after the bold content in the list
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where the content is bold then add : with the end of <b></b> tag.
- Note: The Semicolon condition is apply on class based and it apply the where found the “none” class and it apply the semicolon


^Search the “<caption>TABLE” and replace the “<caption>Table”.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content the <caption> tag display the lowercase Table.

^Search the “<figcaption>FIGURE” and replace the “<figcaption>Figure”.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content the <figcaption> tag display the lowercase Figure.

^Search the “<h1> to <h6>” to remove the para space issue.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Remove the Extra Spacing from h1 to h6 tag.

^Search the “<ul>” then replace the “<ul class=”arrow-bullet>”.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Select the ul class which is show on the ul tag.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content style with apply the ul class.

^Search the “<code><a>” and replace the “<a>”.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where <code> tag is removed from the anchor tag.

^Resize the Image Size on the portal.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Image is resized automatically and the apply max width is 800px.

^Check the image border if not then apply the border.(figure)
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Border apply on the Image is automatically.

^Apply the under line if the underline is available in the Original epub book.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Select the underline option in the given dropdown option.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where the underline content shows the original content.

^Need to given Quotes(“”) Which is quite time consuming.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose File” Button
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Select the Quotes tag in the given dropdown option.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content where the content is showing in Double Quotes.
- Note: If the Found the Author name and it is inside the “right” class then the author name show on the right side and if not found then it shows the ‘“ ”’ double quotes.

^Merge Chunk Files.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose OPF File” Button.
- Select the OPF FIle.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Select the tag according to the given option in the dropdown.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the content according to the chapterwise content.

^Can we give the show n hide button automatically?
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose OPF File” Button.
- Select the OPF FIle.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Select the show_hide tag in the given option.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content it shows the show hide feature based.

^sub ol list should start with a, or A as given in the original resource, we are doing this manually.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose OPF File” Button.
- Select the OPF FIle.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content it shows the ol tag start with Alphabetic form.
- Note: Sub Ol is working on class based name is “upper-aplpha” where the class is found then the apply “type” attribute.

^Sentences are breaking in the middle while converting through epub.
- Go to url https://www.ucertify.com/educator/project/epub/index.php
- Click the “Choose OPF File” Button.
- Select the OPF FIle.
- Select the Epub Multiple File and Click “Open” Button.
- Click the “Upload” Button
- After Uploading the data is displayed in HTML Tab.
- Click on “Element” Tab.
- Toggle The Remove Sentence Breaking.
- Click the “Convert Tags” button on the top of the right side.
- After Converting the Tag Click the “Preview” Button on the bottom right side corner.
- Check the Content The sentences are not breaking.

@test_data: N/A.
@result: Opening the  content_errors page
*/
