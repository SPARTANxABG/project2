document.getElementById('contactForm').addEventListener('submit', function(e) 
{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) 
    {
        const li = document.createElement('li');
        li.textContent = `${name}: ${phone}`;
        document.getElementById('contactList').appendChild(li);

        // Clear form inputs
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});