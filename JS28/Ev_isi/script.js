const form = document.querySelector('#userForm');
const usernameInput = document.querySelector('#username');
const userageInput = document.querySelector('#userage');
const nameError = document.querySelector('#nameError');
const ageError = document.querySelector('#ageError');
const tableBody = document.querySelector('#tableBody');

let currentIndex = 1;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const nameValue = usernameInput.value.trim();
    const ageValue = userageInput.value.trim();

    if (nameValue.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (ageValue === '' || Number(ageValue) <= 18) {
        ageError.style.display = 'block';
        isValid = false;
    } else {
        ageError.style.display = 'none';
    }

    if (isValid) {
        const row = document.createElement('tr');
        
        row.innerHTML = '<td>' + nameValue + '</td>' +
                        '<td>' + ageValue + '</td>' +
                        '<td>' + currentIndex + '</td>' +
                        '<td><button class="btn-delete" onclick="deleteRow(this)"></button></td>';

        tableBody.appendChild(row);
        
        currentIndex++;
        form.reset();
    }
});

function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}