
    const registeredForm = document.getElementById('slogin')
function registeredUsers(event){ 
    event.preventDefault()
let username1 = registeredForm.querySelector('#username').value
let email1= registeredForm.querySelector('#email').value
let passsword1 = registeredForm.querySelector('#password').value
let phone1 = registeredForm.querySelector('#phone').value

const dataObject = {
    Fname: username1,
    Email: email1,
    passsword: passsword1,
    phone: phone1

}
fetch('http://localhost:3000/dataStorage',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataObject)
})
.then(res => res.json())
.then(data =>{
    successAllert.textContent = 'Thank you suceessfully registered...';
    successAllert.classList.add('d-block')
 form.reset();
})

}
registeredForm.addEventListener("submit", registeredUsers)
