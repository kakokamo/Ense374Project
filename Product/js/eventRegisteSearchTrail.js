function showResult(str) {
    if (str.length==0) {
      document.getElementById("livesearch").innerHTML="";
      document.getElementById("livesearch").style.border="0px";
      return;
    }
    var xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function() {
      if (this.readyState==4 && this.status==200) {
        document.getElementById("livesearch").innerHTML=this.responseText;
        document.getElementById("livesearch").style.border="1px solid #A5ACB2";
      }
    }
    xmlhttp.open("GET", "searchPost.php?q="+str,true);
    xmlhttp.send();
  }

// title
let title = document.getElementById("post-title");
title.addEventListener("blur", postTitleHandler);

// content
let content = document.getElementById("post-text");
content.addEventListener("blur", postContentHandler);

// submit button
let form = document.getElementById("create-form");
form.addEventListener("submit", validatePost);

// dynamic counter
let blogPostTitle = document.getElementById("post-title");
blogPostTitle.addEventListener("input", (event) => charCounter(event, 100));

// dynamic counter for body text
let blogPostTextarea = document.getElementById("post-text");
blogPostTextarea.addEventListener("input", (event) => charCounter(event, 2000));