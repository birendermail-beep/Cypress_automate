
/*
@author: Rashmi Kumari
@master_project_id: 6621
@phase_id: 11307
@story_id: 21451
@story_name: SvelteSlider
@path: final
@test_case_name: SvelteSlider
@description: Slider in svelte
@test_steps:
^Title of the Slider.
-Go to the URL : http://demo-a.ucertify.com:8013/editor/v2/?action=new
-Search Slider and click slider
-Click on Title textbox.
-Enter the title in the box.

^Add sliders
-Click on the add icon.
-Slider should be added.

^Add sliders until the warning comes.
-Click on the add icon..
-Warning message should come after adding 10 sliders

^Delete sliders
-Click on the delete icon of the slider.
-A dialog box appears, Click Yes

^Delete sliders
-Click on the delete icon of the slider.
-A dialog box appears, Click No

^Delete sliders until the warning comes.
-Click on the delete icon of the last slider.
-A warning message should appear

^Increase Min value from Max value.
-Click on Min textbox.
-Type number greater than Max value.
-Blur from that field.

^Decrease Max value from Min value.
-Click on Max textbox.
-Type number less than Min value.
-Blur from that field.

^Default min and max value 
-Type 10 in Min and Type 100 in Max
-Type number less than 10 or greater than 100 in Default text box.
-Blur from that field.

^Correct answer
-Drag the slider for the correct answer, eg-0.
-Go to the preview set the slider to 50 i-hould show correct

^Define Step
-Define the value of step field in which interval value will increase when dragged, eg-.
-Go to the preview scroll the the slider then you will see that slider will increase- decrease in given step value

^Change the value of title
-Go to editor area using given url: http://demo-a.ucertify.com:8013/editor/v2/?action=new
-Search the slider in search bar then click on slider item.
-In open module enter the text in title field and add some text in middle of the added text, you will see that cursor is not going to end of the last content of the title field.

@test_data:
-Title
-Min Textbox
-What is your name
@result:
*/