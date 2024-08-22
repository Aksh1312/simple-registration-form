document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    // Validate that names contain only letters
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(firstname) || !namePattern.test(lastname)) {
        alert("First Name and Last Name should contain only letters.");
        return;
    }

    // Validate that contact contains only numbers
    const contactPattern = /^\d+$/;
    if (!contactPattern.test(contact)) {
        alert("Contact should contain only numbers.");
        return;
    }

    // Validate that city contains only letters and spaces
    const cityPattern = /^[A-Za-z\s]+$/;
    if (!cityPattern.test(city)) {
        alert("City should contain only letters.");
        return;
    }

    // If validation passes
    document.getElementById('message').textContent = "Registration complete!";
});