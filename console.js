const nameInput = document.querySelector('.nameInput');
const surnameInput = document.querySelector('.surnameInput');
const salaryInput = document.querySelector('.salaryInput');
const loadBtn = document.querySelector('.load-btn');
const addBtn = document.querySelector('.add-btn');
const employeeList = document.querySelector('.filter-list');
const tableBody = document.querySelector('table tbody');

let employees = [];
function addEmployee(firstName, lastName, salary) {
    const employee = { firstName, lastName, salary, isAdded: false }; 
    const nextIndex = employees.length; 
    employees[nextIndex] = employee; 
    const li = document.createElement('li');

    li.innerHTML = `
        <input type="checkbox" class="employee-checkbox" data-index="${nextIndex}">
        <span>${firstName} ${lastName} - ${salary}</span>
    `;
    employeeList.appendChild(li);
    nameInput.value = '';
    surnameInput.value = '';
    salaryInput.value = '';
}
loadBtn.addEventListener('click', () => {
    const firstName = nameInput.value.trim();
    const lastName = surnameInput.value.trim();
    const salary = salaryInput.value.trim();
    if (firstName && lastName && salary) {
        addEmployee(firstName, lastName, salary); 
        alert('Please fill all fields'); 
    }
});

addBtn.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.employee-checkbox');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const employeeIndex = checkbox.dataset.index;
            const employee = employees[employeeIndex];
            if (!employee.isAdded) {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.salary}</td>`;
                tableBody.appendChild(row);
                employee.isAdded = true;
                checkbox.checked = false;
            } 
            else {
                alert(`${employee.firstName} ${employee.lastName} has already been added to the table.`);
            }
        }
    });
});
