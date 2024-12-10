async function getContacts() {
    let res = await fetch('https://cg16522.tw1.ru/contacts');
    let contacts = await res.json();

    const tbody = document.querySelector('.table tbody');
    tbody.innerHTML = '';

    contacts.forEach((contact) => {
        tbody.innerHTML += `
        
            
                <tr>
                    <td>${contact.telephone}</td>
                    <td>${contact.telegram}</td>
                    <td>${contact.email}</td>
                    <td>${contact.address}</td>

                    <td>
                        <a class='btn btn-primary btn-sm text-light' href='updateContacts.html'>Редактирование</a>
                    </td>
                </tr>
        
        
        `
    });
}

async function updateContacts() {
    const telephone = document.getElementById('telephone').value,
        telegram = document.getElementById('telegram').value,
        email = document.getElementById('email').value,
        address = document.getElementById('address').value;

    const data = {
        telephone: telephone,
        telegram: telegram,
        email: email,
        address: address
    }

    const res = await fetch(`https://cg16522.tw1.ru/contacts`, {
        method: 'PATCH',
        body: JSON.stringify(data)
    });

    let resData = res.json();

    if (resData.status === true) {
        await getContacts();
    }
}

getContacts();