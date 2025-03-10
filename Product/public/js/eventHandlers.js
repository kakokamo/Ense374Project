

// constants
const TITLE_MAX = 100;
const CONTENT_MAX = 2000;
const COMMENT_MAX = 1000;
const TEXT_MIN = 1;

// validate email
function validateEmail(email){
    let emailRegEx = /^[a-z0-9]+[.]?[!$#%'*+/=?^_`{|}~-]*[a-z0-9]+@[a-z]+[.]?[!$%&'*+/=?^_`{|}~-]*[a-z]+\.[a-z]{2,3}$/;
    
    if(emailRegEx.test(email))
        return true;
    else
        return false;
}

// validate username
function validateUsername(username){
    let unameRegEx = /^[a-zA-Z0-9]+$/;

    if(unameRegEx.test(username))
        return true;
    else   
        return false;
}

// validate password
function validatePassword(pword){
    let pwordRegEx = /^[a-zA-Z]*[^a-zA-Z][a-zA-Z0-9`~!@#$%^&*()_+=<,>./?;:'"[{\]}|\\-]*$/;

    if(pwordRegEx.test(pword) && pword.length >= 6)
        return true;
    else
        return false;
}

//validate confirm password
function validateCPassword(cpword){
    let pword = document.getElementById("p-word");

    if(cpword === pword.value)
        return true;
    else   
        return false;
}

// validate avatar
function validateAvatar(avatar){
    let avatarRegEx = /^[^\n]+\.[a-zA-Z]{3,4}$/;

    if(avatarRegEx.test(avatar))
        return true;
    else
        return false;
}

// validate post title
function validatePostTitle(title){
    if(title.length >= TEXT_MIN && title.length <= TITLE_MAX)
        return true;
    else    
        return false;
}

// validate post content
function validatePostContent(content){
    if(content.length >= TEXT_MIN && content.length <= CONTENT_MAX)
        return true;
    else
        return false;
}

function validateComment(comment){
    if(comment.length >= TEXT_MIN && comment.length <= COMMENT_MAX)
        return true;
    else
        return false;
}

// validation of characters count and limit for text of the input
function charCounter(event, limit) {
    const textarea = event.target;
    let counterElement = textarea.nextElementSibling;
  
    if (!counterElement || !counterElement.classList.contains("char-counter")) {
      counterElement = document.createElement("div");
      counterElement.classList.add("char-counter");
      counterElement.style.marginTop = "5px";
      textarea.parentNode.insertBefore(counterElement, textarea.nextSibling);
    }
  
    const charCount = textarea.value.trim().length;
    const charsLeft = limit - charCount;
  
    if (charCount <= limit) {
      counterElement.innerHTML = `${charCount} / ${limit} characters used. (${charsLeft} characters left)`;
      counterElement.style.color = "black";
    } else {
      counterElement.innerHTML = `Character limit exceeded by ${charCount - limit} characters.`;
      counterElement.style.color = "red";
    }
  }

function validateSignup(event){
    // email
    let email = document.getElementById("email");
    // username
    let uname = document.getElementById("u-name");
    // password
    let pword = document.getElementById("p-word");
    // confirm password
    let cpword = document.getElementById("confirm-pword");
    // avatar
    let avatar = document.getElementById("upload-photo-button");

    let formIsValid = true;

    if(!validateEmail(email.value)){
        email.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-email");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        email.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-email");
        errorMessage.classList.add("hidden");
    } 

    if(!validateUsername(username.value)){
        username.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-uname");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        username.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-uname");
        errorMessage.classList.add("hidden");
    }  

    if(!validatePassword(password.value)){
        password.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-pword");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        password.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-pword");
        errorMessage.classList.add("hidden");
    }  

    if(!validateCPassword(cpword.value)){
        cpword.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-cpword");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        cpword.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-cpword");
        errorMessage.classList.add("hidden");
    }  

    if(!validateAvatar(avatar.value)){
        avatar.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-avatar");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        avatar.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-avatar");
        errorMessage.classList.add("hidden");
    }

    if(!formIsValid)
        event.preventDefault();
}


function validateLogin(event){
    // email
    let email = document.getElementById("email");
    // password
    let pword = document.getElementById("p-word");

    let formIsValid = true;

    if(!validateEmail(email.value)){
        email.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-email");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        email.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-email");
        errorMessage.classList.add("hidden");
    } 

    if(!validatePassword(password.value)){
        password.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-pword");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        password.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-pword");
        errorMessage.classList.add("hidden");
    }  

    if(!formIsValid)
        event.preventDefault();
}

// validate create post
function validatePost(event){
    // title
    let title = document.getElementById("post-title");
    // content
    let content = document.getElementById("post-text");

    let formIsValid = true;

    if(!validatePostTitle(title.value)){
        title.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-title");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        title.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-title");
        errorMessage.classList.add("hidden");
    } 

    if(!validatePostContent(content.value)){
        content.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-content");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        content.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-content");
        errorMessage.classList.add("hidden");
    }  

    if(!formIsValid)
        event.preventDefault();
}

// validate comment
function validatePostComment(event){
    let comment = document.getElementById("leave-comment");

    let formIsValid = true;

    if(!validateComment(comment.value)){
        comment.classList.add("error-input");
        let errorMessage = document.getElementById("error-text-comment");
        errorMessage.classList.remove("hidden");
        formIsValid = false;
    }
    else {
        comment.classList.remove("error-input");
        let errorMessage = document.getElementById("error-text-comment");
        errorMessage.classList.add("hidden");
    }

    if(!formIsValid)
        event.preventDefault();
}


// email handler
function emailHandler(event){
    let email = event.target;
    let errorMessage = document.getElementById("error-text-email");

    if(!validateEmail(email.value.trim())){
        email.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        email.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }   
}

// username handler
function usernameHandler(event){
    let username = event.target;
    let errorMessage = document.getElementById("error-text-uname");

    if(!validateUsername(username.value.trim())){
        username.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        username.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }   
}

// password handler
function passwordHandler(event){
    let password = event.target;
    let errorMessage = document.getElementById("error-text-pword");

    if(!validatePassword(password.value.trim())){
        password.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        password.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }   
}

// confirm password handler
function cPasswordHandler(event){
    let cpword = event.target;
    let errorMessage = document.getElementById("error-text-cpword");

    if(!validateCPassword(cpword.value.trim())){
        cpword.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        cpword.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }   
}

// avatar handler
function avatarHandler(event){
    let avatar = event.target;
    let errorMessage = document.getElementById("error-text-avatar");

    if(!validateAvatar(avatar.value)){
        avatar.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        avatar.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }   
}

// post title
function postTitleHandler(event){
    let title = event.target;
    let errorMessage = document.getElementById("error-text-title");

    if(!validatePostTitle(title.value.trim())){
        title.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        title.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }
}

// post content
function postContentHandler(event){
    let content = event.target;
    let errorMessage = document.getElementById("error-text-content");

    if(!validatePostContent(content.value.trim())){
        content.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        content.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }
}

function commentHandler(event){
    let comment = event.target;
    let errorMessage = document.getElementById("error-text-comment");

    if(!validateComment(comment.value.trim())){
        comment.classList.add("error-input");
        errorMessage.classList.remove("hidden");
    }
    else {
        comment.classList.remove("error-input");
        errorMessage.classList.add("hidden");
    }
}