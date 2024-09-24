document.getElementById('share-link').addEventListener('click', function (e) {
    e.preventDefault();

    const email = prompt('Before you share, please enter your email:');
    
    if (email) {
        fetch('http://localhost:5000/api/invite/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.registrationLink) {
                alert('Thank you! Here’s your share link: ' + data.registrationLink);
                window.location.href = data.registrationLink;
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            alert('An error occurred while registering your email.');
        });
    } else {
        alert('Please enter a valid email to share the link.');
    }
});
