/* EXERCISE 1
  Write a function for changing the title of the document in something else.
  */


const changeTitle = function () {
    document.getElementById('GFG').innerHTML
        = 'I am a new title now';
}

// const changeTitle = function (newTitle) {
//     let title = document.getElementsByTagName('h1')
//     title[0].innerHTML = 'I am a new title now'
// };

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/

const addClassToTitle = function (eventData) {
    let title = document.getElementsByTagName('h1')
    title[0].classList.toggle('myHeading')

    title[0].onclick = makeItClickable
};

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/

const changePcontent = function () {
    let allP = document.querySelectorAll('div p')
    allP[0].innerHTML = 'This is inside the div tag';

};

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/

const changeUrls = function () {
    let webAddress = document.querySelectorAll('a')

    for (let i = 0; i < webAddress.length; i++) {
        webAddress[i].innerText = 'https://www.google.com'
    }

};

/* EXERCISE 5
 Write a function for adding a new item in the second list.
 */

const addToTheSecond = function (content) {
    let list = document.createElement('li')
    list.innerText = 'new list item'
    exList.insertBefore(list, exList[2])
};

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/

const addParagraph = function (content) {
    // creating a new eliment
    let secondPtag = document.createElement('p')

    let textSecondP = document.createTextNode("second paragraph added")
    secondPtag.appendChild(textSecondP)

    // First im selecting the tag (<div> === followed by a ==> <p> tag)
    document.querySelector("div > p").parentElement.appendChild(secondPtag)
};

/* EXERCISE 7
Write a function for making the first UL disappear.
*/

const firstUlDisappear = function () {
    let firstUl = document.getElementById("firstList")
    firstUl.remove()
};

/* EXERCISE 8
Write a function for making the background of every UL green.
*/

const paintItGreen = function () {
    let ulItems = document.querySelectorAll('ul')

    for (let ul of ulItems) {
        ul.classList.toggle("colorGreen")
    }

};


/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/

const makeItClickable = function (eventData) {

    let changeColor = eventData.target
    changeColor.classList.toggle("colorGreen")

};

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/

const changeFooterText = function () {
    //
};

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
// ...

/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {

};

/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/