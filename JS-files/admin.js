// getContactData.js

function usersData(contactData, index) {
    const tableBody = document.getElementById('tableBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${contactData.fullName}</td>
        <td>${contactData.phone}</td>
        <td>${contactData.email}</td>
        <td>${contactData.address}</td>
        <td>${contactData.city}</td>
        <td>${contactData.state}</td>
        <td>${contactData.zip}</td>
        <td>${contactData.message}</td>
    `;
    tableBody.appendChild(row);
}

function getContactData() {
    fetch('http://localhost:3000/ContactDatas')
        .then(res => res.json())
        .then(contactDatas => {
            contactDatas.forEach((data, index) => usersData(data, index));
        })
        .catch(error => console.error('Error fetching data:', error));
}

getContactData();
