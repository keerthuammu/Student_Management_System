
let students = [];

function displayStudents() {
    const list = document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>
                    <button class="edit-btn"
                        onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button class="delete-btn"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function addStudent() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please enter all details");
        return;
    }

    students.push({
        name: name,
        email: email
    });

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    displayStudents();
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}

function editStudent(index) {
    const student = students[index];

    const newName = prompt("Enter new name", student.name);
    if (newName === null) return;

    const newEmail = prompt("Enter new email", student.email);
    if (newEmail === null) return;

    if (!newName.trim() || !newEmail.trim()) {
        alert("Details cannot be empty");
        return;
    }

    student.name = newName.trim();
    student.email = newEmail.trim();

    displayStudents();
}



const API = "http://localhost:5000/students";

async function displayStudents() {
    const response = await fetch(API);
    const students = await response.json();

    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach(student => {
        list.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>
                    <button onclick="editStudent(${student.id},
                        '${encodeURIComponent(student.name)}',
                        '${encodeURIComponent(student.email)}')">
                        Edit
                    </button>

                    <button class="delete-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

async function addStudent() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Please enter all details");
        return;
    }

    const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email })
    });

    if (!response.ok) {
        alert("Unable to add student");
        return;
    }

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    displayStudents();
}

async function editStudent(id, oldName, oldEmail) {
    const name = prompt("Enter new name", decodeURIComponent(oldName));
    if (name === null) return;

    const email = prompt("Enter new email", decodeURIComponent(oldEmail));
    if (email === null) return;

    if (!name.trim() || !email.trim()) {
        alert("Details cannot be empty");
        return;
    }

    const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name.trim(),
            email: email.trim()
        })
    });

    if (!response.ok) {
        alert("Unable to update student");
        return;
    }

    displayStudents();
}

async function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete this student?")) return;

    const response = await fetch(`${API}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        alert("Unable to delete student");
        return;
    }

    displayStudents();
}

displayStudents();
