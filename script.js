// Get reference to the form and the container for saved comments
const commentForm = document.getElementById('commentForm');
const savedCommentsContainer = document.getElementById('savedComments');

// Add an event listener to the form for submission
commentForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the comment input value
  const commentInput = document.getElementById('comment');
  const commentText = commentInput.value.trim();

  // Check if comment is not empty
  if (commentText !== '') {
    // Create a new paragraph element for the comment
    const commentElement = document.createElement('p');
    commentElement.textContent = commentText;

    // Append the comment to the container for saved comments
    savedCommentsContainer.appendChild(commentElement);

    // Clear the input field
    commentInput.value = '';
  } else {
    alert('Please enter a comment before submitting.');
  }
});
