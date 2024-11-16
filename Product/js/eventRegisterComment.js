

// comment
let comment = document.getElementById("leave-comment");
comment.addEventListener("blur", commentHandler);

// submit button
let form = document.getElementById("post-comment");
form.addEventListener("submit", validatePostComment);

// dynamic counter
let commentTextarea = document.getElementById("leave-comment");
commentTextarea.addEventListener("input", (event) => charCounter(event, 1000));