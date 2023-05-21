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

 studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    // Add the student details to the table
    const row = studentTable.insertRow();
    row.insertCell().textContent = name;
    row.insertCell().textContent = age;
    row.insertCell().textContent = grade;
    row.insertCell().innerHTML = '<button class="delete">Delete</button> <button class="edit">Edit</button>';

    // Clear the form input fields
    studentForm.reset();
});

// Add click event listener to the table
studentTable.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('delete')) {
        const row = target.parentElement.parentElement;
        row.remove();
    } else if (target.classList.contains('edit')) {
        const row = target.parentElement.parentElement;
        const cells = row.cells;

        // Fill the hidden form with the values from the selected row
        hiddenRowIndexInput.value = row.rowIndex;
        document.getElementById('hiddenName').value = cells[0].textContent;
        document.getElementById('hiddenAge').value = cells[1].textContent;
        document.getElementById('hiddenGrade').value = cells[2].textContent;

        // Display the hidden form
        hiddenForm.style.display = 'block';
    }
});

// Add submit event listener to the hidden form for editing
hiddenStudentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the updated form data
    const updatedName = document.getElementById('hiddenName').value;
    const updatedAge = document.getElementById('hiddenAge').value;
    const updatedGrade = document.getElementById('hiddenGrade').value;
    const rowIndex = parseInt(hiddenRowIndexInput.value);

    // Update the table with the edited values
    const row = studentTable.rows[rowIndex];
    row.cells[0].textContent = updatedName;
    row.cells[1].textContent = updatedAge;
    row.cells[2].textContent = updatedGrade;

    // Hide the hidden form
    hiddenForm.style.display = 'none';
    hiddenStudentForm.reset();
});