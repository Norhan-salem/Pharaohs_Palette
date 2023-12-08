
// Get the forms and the login link
var signupForm = document.getElementById('signup');
var loginForm = document.getElementById('login');
var loginLink = document.querySelector('#signup .signup-am a');

// Initially hide the login form
loginForm.style.display = 'none';

// Add a click event listener to the login link
loginLink.addEventListener('click', function(e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Hide the signup form and show the login form
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Do the same for the signup link in the login form
var signupLink = document.querySelector('#login .signup-am a');
signupLink.addEventListener('click', function(e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Hide the login form and show the signup form
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

//fuction to validate that the login form has been filled
function validateForm() {
    var email = document.forms.myForm.email.value;
    var pwd = document.forms.myForm.pwd.value;
    if (email === "" || pwd === "") {
        alert("Please fill all the fields!");
        return false;
    }
}

//Change attribute and get the element in the same line
document.getElementById('fname').setAttribute('placeholder', 'Type your first name');

//Get the element
var myElement = document.getElementById('lname');

//Change the content of the element
myElement.innerHTML = 'Manipulation using JS';

//Change the style of the element
myElement.style.color = 'blue';

//Remove an attribute from the element
myElement.removeAttribute('placeholder');

//Get the element
var myElement = document.getElementById('signup-button');

//Change the class of the element
myElement.className = 'js-button';

//Add a new CSS class to the element
myElement.classList.add('js-button');

//Change the font size of the element
myElement.style.fontSize = '20px';

//Change the background color of the element
myElement.style.backgroundColor = '#8f2400';

//Prompt the user for a new content for the element
var newContent = prompt('Enter new content for this element(JS was here :/):');
myElement.innerHTML = newContent;

//Alert that the signup form was manipulated by js
window.onload = function() {
    if (window.location.href.indexOf('signup') > -1) {
        alert("This form has been manipulated by JS");
    }
}








