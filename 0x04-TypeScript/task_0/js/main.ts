// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Kagiso',
  lastName: 'Makgaba',
  age: 26,
  location: 'Johannesburg',
};

const student2: Student = {
  firstName: 'Daniel',
  lastName: 'Nkosi',
  age: 24,
  location: 'Krugersdorp'
};

// Create an array named studentsList containing the two variables
const studentsList: Student[] = [student1, student2];

// Function to render the table
function renderTable() {
  // Create table element
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  // Loop through each student in the studentsList array
  studentsList.forEach((student) => {
    // Create a new row for each student
    const row = document.createElement('tr');

    // Create cells for the first name and location
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    // Append cells to the row
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    // Append the row to the table body
    tableBody.appendChild(row);
  });

  // Append the table body to the table
  table.appendChild(tableBody);

  // Append the table to the document body (or any other container)
  document.body.appendChild(table);
}

// Call the renderTable function to display the table
renderTable();
