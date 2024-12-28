function createTable() {
    const tableContainer = document.getElementById('tableContainer');
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Semester</th>
                <th>Class</th>
            </tr>
        </thead>
        <tbody id="studentTable"></tbody>
    `;
    tableContainer.appendChild(table);
}

function addStudent() {
    const id = document.getElementById('studentId').value;
    const name = document.getElementById('studentName').value;
    const semester = document.getElementById('studentSemester').value;
    const className = document.getElementById('studentClass').value;

    if (!document.getElementById('studentTable')) {
        createTable();
    }

    const studentTable = document.getElementById('studentTable');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${semester}</td>
        <td>${className}</td>
    `;
    studentTable.appendChild(row);

    // Clear form inputs
    document.getElementById('studentId').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('studentSemester').value = '';
    document.getElementById('studentClass').value = '';
}