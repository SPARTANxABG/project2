document.getElementById('contactForm').addEventListener('submit', function(e) 
{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) 
    {
        const li = document.createElement('li');
        li.textContent = `${name}: ${phone}`;

        const deleteBtn = document/createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', function()
        {
            li.remove();
        });
        li.appendChild(deleteBtn);

        document.getElementById('contactList').appendChild(li);

        // Clear form inputs
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});