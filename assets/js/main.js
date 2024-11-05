let data = JSON.parse(localStorage.getItem('data')) || [];

const dataForm = document.getElementById('dataForm');
dataForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        const formData = new FormData(dataForm);
        const newData = {};
        formData.forEach((value, key) => {
            newData[key] = value;
        });
        data.push(newData);
        updateLocalStorage();
        renderTable();
        dataForm.reset();
        closeForm();
    }
});

function closeForm() {
    document.getElementById('dataForm').classList.add('d-none');
}

function add() {
    document.getElementById('dataForm').classList.remove('d-none');
}

function deleteRow(index) {
    data.splice(index, 1);
    updateLocalStorage();
    renderTable();
}

function updateData(index, key, value) {
    data[index][key] = value;
    updateLocalStorage();
}

function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach((row, index) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="text" value="${row.grid}" onchange="updateData(${index}, 'grid', this.value)"></td>
            <td><input type="text" value="${row.name}" onchange="updateData(${index}, 'name', this.value)"></td>
            <td><input type="email" value="${row.email}" onchange="updateData(${index}, 'email', this.value)"></td>
            <td><input type="tel" value="${row.mobileNumber}" onchange="updateData(${index}, 'mobileNumber', this.value)"></td>
            <td>
                <button onclick="deleteRow(${index})">Delete</button>
                <button onclick="updateData(${index})">Update</button>
            </td>
        `;
        tableBody.appendChild(newRow);
    });
}

function updateLocalStorage() {
    localStorage.setItem('data', JSON.stringify(data));
}

function validateForm() {
    const grid = document.getElementById('grid').value.trim();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobileNumber = document.getElementById('mobileNumber').value.trim();

    if (!grid || !name || !email || !mobileNumber) {
        alert('All fields are required!');
        return false;
    }

    const mobileNumberPattern = /^\d{10}$/;
    if (!mobileNumberPattern.test(mobileNumber)) {
        alert('Mobile number must be a 10-digit number!');
        return false;
    }

    return true;
}

renderTable();