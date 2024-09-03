document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const formData = new FormData(form);

        // Create a JSON object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Send the form data to the server
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                responseMessage.textContent = 'Thank you for registering!';
                responseMessage.style.color = 'green';
                form.reset(); // Reset the form fields
            } else {
                responseMessage.textContent = 'There was a problem with your registration. Please try again.';
                responseMessage.style.color = 'red';
            }
        } catch (error) {
            responseMessage.textContent = 'There was an error. Please try again later.';
            responseMessage.style.color = 'red';
        }
    });
});
