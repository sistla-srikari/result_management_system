let students = [
  { name: "Sri", roll: "101", maths: 80, english: 75, c: 85, python: 90 },
  { name: "Kat", roll: "102", maths: 88, english: 80, c: 78, python: 85 },
];

function displayStudents() {
  const tableBody = document.getElementById('main');
  tableBody.innerHTML = '';
  students.forEach((student, index) => {
      const total = student.maths + student.english + student.c + student.python;
      const percentage = (total / 400) * 100;
      tableBody.innerHTML += `
          <tr>
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.roll}</td>
              <td>${student.maths}</td>
              <td>${student.english}</td>
              <td>${student.c}</td>
              <td>${student.python}</td>
              <td>${total}</td>
              <td>${percentage.toFixed(2)}%</td>
              ${document.querySelector('h1').textContent.includes('Teacher') ? `
              <td><button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button></td>` : ''}
          </tr>
      `;
  });
}

function newStudent() {
  const name = prompt("Enter student's name");
  const roll = prompt("Enter student's roll number");
  const maths = prompt("Enter marks in Maths");
  const english = prompt("Enter marks in English");
  const c = prompt("Enter marks in C");
  const python = prompt("Enter marks in Python");
  
  if (name && roll && maths && english && c && python) {
      students.push({
          name,
          roll,
          maths: parseInt(maths),
          english: parseInt(english),
          c: parseInt(c),
          python: parseInt(python)
      });
      displayStudents();
  }
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}

function search() {
  const query = document.getElementById('search').value.toLowerCase();
  const filteredStudents = students.filter(student => 
      student.name.toLowerCase().includes(query) || student.roll.toLowerCase().includes(query)
  );
  const tableBody = document.getElementById('main');
  tableBody.innerHTML = '';
  filteredStudents.forEach((student, index) => {
      const total = student.maths + student.english + student.c + student.python;
      const percentage = (total / 400) * 100;
      tableBody.innerHTML += `
          <tr>
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.roll}</td>
              <td>${student.maths}</td>
              <td>${student.english}</td>
              <td>${student.c}</td>
              <td>${student.python}</td>
              <td>${total}</td>
              <td>${percentage.toFixed(2)}%</td>
          </tr>
      `;
  });
}
function goBack() {
  window.location.href = 'index.html'; // Redirects directly to 'index.html'
}


document.addEventListener('DOMContentLoaded', displayStudents);
