Hello Sagar Babu,

I have worked on test cases I only come to you when I don't have any idea how to
proceed further. My comments starts with # you could reply with $ in the
beginning of your comments for my comments.

Test Case 30: When the start button is clicked in the Home Route, an HTML
container element with testid attribute value as "loader" should be displayed
while the HTTP GET request is in progress ↳ Error: The element(s) given to
waitForElementToBeRemoved are already removed. waitForElementToBeRemoved
requires that the element(s) exist(s) before waiting for removal.

# Could you please explain why the test case is failing?

Test Case 38: In the Quiz Game Route, When the "Next Question" button is
clicked, then the page should consist of an HTML paragraph element with text
content as the value of the key "question_text" of the next question received
from the response ↳ TestingLibraryElementError: Unable to find an element with
the text: /Which of the following outputs can be achieved if the CSS property
justify-content with value space-between is applied to the flexbox container
with the flex-direction row?/i. This could be because the text is broken up by
multiple elements. In this case, you can provide a function for your text
matcher to make your matcher more flexible.

# I modified my question container and tested but test failed.

# I Modified the question text to justify-content to space-between still test failed.

Test Case 40: In the Quiz Game Route, when the active question "options_type" is
"IMAGE", then the page should consist of the HTML image elements with alt and
src values as the values of the keys "text" and "image_url" respectively in each
option of the corresponding question received from the response ↳
TestingLibraryElementError: Unable to find an accessible element with the role
"img" and name "flex start"

# The requirement is satisfied already but the test is failing.

Test Case 41: In the Quiz Game Route, when the active question "options_type" is
"SINGLE_SELECT", then the page should consist of an HTML input element with type
attribute value as "radio" and label text as the value of the key "text" in each
option of the corresponding question received from the response ↳
TestingLibraryElementError: Unable to find an accessible element with the role
"button" and name "flex center"

# The requirement is satisfied already but the test is failing.

Test Case 46: In the Quiz Game Route, when the HTTP GET request in the page is
successful and the active question "options_type" is "SINGLE_SELECT", then the
page should consist of at least one HTML unordered list element to display the
list of options ↳ TestingLibraryElementError: Unable to find an accessible
element with the role "button" and name "flex center"

# Changed the role of the input element to button but the test is failing.

Test Case 47: In the Quiz Game Route, when the HTTP GET request in the page is
successful and the active question "options_type" is "SINGLE_SELECT", then the
page should consist of HTML list items to display the options ↳
TestingLibraryElementError: Unable to find an accessible element with the role
"button" and name "flex center"

# wrapped the radio input inside a button but test failed.

# The requirement is satisfied already but the test is failing.

Test Case 49: In the Quiz Game Route, when an option in the question is clicked,
then the timer should stop running ↳ TestingLibraryElementError: Unable to find
an element with the text: /15/i. This could be because the text is broken up by
multiple elements. In this case, you can provide a function for your text
matcher to make your matcher more flexible.

# The requirement is satisfied already but the test is failing.

Test Case 51: In the Quiz Game Route, when the "option_type" of the active
question is "DEFAULT" and an incorrect option on the page is clicked, then the
"correct checked circle" and "incorrect close circle" images should be displayed
beside the correct option and selected option respectively ↳
TestingLibraryElementError: Unable to find an element with the alt text:
incorrect close circle

# The requirement is satisfied already but the test is failing. Alt is also updated.

Test Case 52: In the Quiz Game Route, when the "option_type" of the active
question is "IMAGE" and a correct option on the page is clicked, then the
"correct checked circle" image should be displayed beside the selected option ↳
TestingLibraryElementError: Unable to find an accessible element with the role
"button" and name "space between"

# The requirement is satisfied already but the test is failing. Alt is also updated.

Test Case 53: In the Quiz Game Route, when the "option_type" of the active
question is "IMAGE" and an incorrect option on the page is clicked, then the
"correct checked circle" and "Incorrect close Circle" images should be displayed
beside the correct option and selected option respectively ↳
TestingLibraryElementError: Unable to find an accessible element with the role
"button" and name "flex center"

# The requirement is satisfied already but the test is failing. Alt is also updated.

Test Case 54: In the Quiz Game Route, when the "option_type" of the active
question is "SINGLE_SELECT" and a correct option on the page is clicked, then
the "correct checked circle" image should be displayed beside the selected
option ↳ TestingLibraryElementError: Unable to find an accessible element with
the role "button" and name "flex center"

# The requirement is statisfied already but the test is failing.

Test Case 55: In the Quiz Game Route, when the "option_type" of the active
question is "SINGLE_SELECT" and an incorrect option on the page is clicked, then
the "correct checked circle" and "Incorrect close Circle" images should be
displayed beside the correct option and selected option respectively ↳
TestingLibraryElementError: Unable to find an accessible element with the role
"button" and name "flex center"

# The requirement is statisfied already but the test is failing.

Test Case 56: In the Quiz Game Route, when the "Next Question" button is
clicked, then the page should consist of the next question options received from
the response ↳ TestingLibraryElementError: Unable to find an accessible element
with the role "img" and name "flex start"

# The requirement is statisfied already but the test is failing.

Test Case 58: In the Quiz Game Route, when the next question is displayed on the
page and an option in the question is clicked, then the timer should stop
running ↳ TestingLibraryElementError: Unable to find an accessible element with
the role "button" and name "flex start"

# The requirement is statisfied already but the test is failing.

Test Case 59: In the Quiz Game Route, when the last question in the questions
list received from the response is displayed, then the page should not consist
of the "Next Question" button ↳ TestingLibraryElementError: Unable to find an
accessible element with the role "button" and name "flex center"

# The requirement is statisfied already but the test is failing.
