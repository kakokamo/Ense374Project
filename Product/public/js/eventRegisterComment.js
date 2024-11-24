document.getElementById('post-comment').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const commentText = document.getElementById('leave-comment').value;
    
    // Error handling for comment text length
    if (commentText.trim() === '') {
        alert("Please write a comment before posting.");
        return;
    }

    if (commentText.length < 1 || commentText.length > 1000) {
        document.getElementById('error-text-comment').classList.remove('hidden');
        return;
    } else {
        document.getElementById('error-text-comment').classList.add('hidden');
    }

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.classList.add('individual-comment');
    
    // Add user details and comment content
    newComment.innerHTML = `
        <img src="images/default-avatar.jpg" alt="user profile" class="comment-avatar" />
        <div class="comment-username">USER_NAME</div>
        <div class="comment-time">${new Date().toLocaleString()}</div>
        <div class="comment-content">${commentText}</div>
        <div class="comment-stats">
            <a href="#" class="vote-style">+0</a>
            <a href="#" class="vote-style">-0</a>
        </div>
    `;
    
    // Append the new comment to the comments section
    document.getElementById('comments-section').appendChild(newComment);
    
    // Clear the textarea
    document.getElementById('leave-comment').value = '';
});

// dynamic counter
let commentTextarea = document.getElementById("leave-comment");
commentTextarea.addEventListener("input", (event) => charCounter(event, 1000));