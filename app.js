// Get the form element
const form = document.getElementById('signupForm');

// Add submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display the form data on the web page
    const formData = `
        <h3>Submitted Form Data:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
    document.body.innerHTML += formData;
});

  // Get the necessary elements
  const detailsContainer = document.querySelector('.item-container .details');
  const readMoreButton = document.querySelector('.item-container .read-more');

  // Add click event listener to the "Read more" button
  readMoreButton.addEventListener('click', function() {
      // Toggle the visibility of the details container
      detailsContainer.style.display = (detailsContainer.style.display === 'none') ? 'block' : 'none';

      // Update the text of the button based on the visibility of the details
      readMoreButton.textContent = (detailsContainer.style.display === 'none') ? 'Read more' : 'Read less';
  });