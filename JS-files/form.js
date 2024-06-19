let userName = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirmPassword')
let phone = document.querySelector('#phone')
let form = document.querySelector('#login')
let successAllert = document.querySelector('#successAllert')
let dangerAllert = document.querySelector('#dangerAllert')
let passwordHelper = document.querySelector('#passwordHelper')
let confirmPasswordHelper = document.querySelector('#confirmPasswordHelper')

//submit event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(checkEmptyFields(userName) && checkEmptyFields(email) && checkEmptyFields(password)
         && checkEmptyFields(confirmPassword) && checkEmptyFields(phone)){
        if(!checkPasswordLength()){
            checkPasswordLength()
            return;
        }
        if(!checkConfirmPassword){
            checkConfirmPassword()
            return;
        }
    successAllert.textContent = 'Thank you suceessfully registered...';
        successAllert.classList.add('d-block')
        form.reset();

        }else{
            checkEmptyFields(userName)
            checkEmptyFields(email)
            checkEmptyFields(password)
            checkEmptyFields(confirmPassword)
            checkEmptyFields(phone)
        }
    
    
})
//check the empty fields
function checkEmptyFields(field){
    if(field.value ===''){
         field.classList.add('border', 'border-danger')
         dangerAllert.textContent = 'All fields must  be filled...';
         dangerAllert.classList.add('d-block')
         return;
    }else{
        field.classList.remove('border-danger');
        dangerAllert.classList.remove('d-block')
        return true;
    }
     
        

}
function checkPasswordLength(){
    if(password.value.length <8){
        confirmPasswordHelper.classList.add('border', 'danger-warning')
        passwordHelper.textContent = 'your password should at least contain 8 characters'
        passwordHelper.classList.add('text-danger')
        return false
    }else{
        password.classList.remove('danger-warning')
        passwordHelper.textContent = ''
        return true;
    }
}
function checkConfirmPassword(){
    if(confirmPassword.value != password.value){
        password.classList.add('border', 'danger-warning')
        passwordHelper.textContent = 'password do not match'
        passwordHelper.classList.add('text-danger')
        return false
    }else{
        password.classList.remove('danger-warning')
        confirmPasswordHelper.textContent = ''
        return true;
    }
}
