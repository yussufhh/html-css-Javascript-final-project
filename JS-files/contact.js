document.addEventListener('DOMContentLoaded', function() {
    let name = document.querySelector("#fullName");
    let phone = document.querySelector("#phone");
    let email = document.querySelector("#email");
    let address = document.querySelector("#address");
    let city = document.querySelector("#city");
    let state = document.querySelector("#state");
    let zip = document.querySelector("#zip");
    let message = document.querySelector("#message");
    let form = document.querySelector('#contact');
    let successAlert = document.querySelector("#successAlert");
    let dangerAlert = document.querySelector("#dangerAlert");

    function checkEmptyFields(field) {
        if (field.value === '') {
            field.classList.add('border', 'border-danger');
            dangerAlert.textContent = 'All fields must be filled...';
            dangerAlert.classList.remove('d-none');
            return false;
        } else {
            field.classList.remove('border', 'border-danger');
            return true;
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting to allow for validation

        let isNameValid = checkEmptyFields(name);
        let isPhoneValid = checkEmptyFields(phone);
        let isEmailValid = checkEmptyFields(email);
        let isAddressValid = checkEmptyFields(address);
        let isCityValid = checkEmptyFields(city);
        let isStateValid = checkEmptyFields(state);
        let isZipValid = checkEmptyFields(zip);
        let isMessageValid = checkEmptyFields(message);

        if (isNameValid && isPhoneValid && isEmailValid && isAddressValid && isCityValid && isStateValid && isZipValid && isMessageValid) {
            dangerAlert.classList.add('d-none');

            let formData = {
                fullName: name.value,
                phone: phone.value,
                email: email.value,
                address: address.value,
                city: city.value,
                state: state.value,
                zip: zip.value,
                message: message.value
            };

            fetch('http://localhost:3000/ContactDatas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                successAlert.textContent = 'Thanks for your contact, your delivery will start soon';
                successAlert.classList.remove('d-none');
                form.reset(); // Clear the form
            })
            .catch(error => {
                dangerAlert.textContent = 'An error occurred. Please try again later.';
                dangerAlert.classList.remove('d-none');
            });
        }
    });
});
