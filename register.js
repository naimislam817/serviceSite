function updateForm() {
    const role = document.getElementById('user-role').value;
    const form = document.getElementById('registration-details');
    form.innerHTML = ''; // Clear existing fields

    // Add common fields
    form.appendChild(createInputField('email', 'Email'));
    form.appendChild(createInputField('password', 'Password'));

    // Add specific fields based on the role
    if (role === 'driver') {
        form.appendChild(createInputField('license', 'Driver License'));
    } else if (role === 'workshop') {
        form.appendChild(createInputField('workshop_name', 'Workshop Name'));
    } else if (role === 'admin') {
        form.appendChild(createInputField('admin_code', 'Admin Code'));
    }

    // Add submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Register';
    form.appendChild(submitBtn);
}

function createInputField(name, placeholder) {
    const input = document.createElement('input');
    input.type = 'text';
    input.name = name;
    input.placeholder = placeholder;
    return input;
}

// Initialize the form with default role
updateForm();
