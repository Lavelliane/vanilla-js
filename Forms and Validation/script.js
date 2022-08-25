const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//SHOW INPUT ERROR MESSAGE
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
//SHOW SUCCESS OUTLINE
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
//EMAIL VALIDATION FUNCTION
function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, `Invalid email`);
    }
}
//check required fields
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//CHECK INPUT LENGTH
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showSuccess(input);
    }
}
//CHECK PASSWORD
function checkPasswordsMatch(input1, input2){
    if(input1.value === input2.value){
        showSuccess(input)
    }else{
        showError(input2, 'Passwords do not match');
    }
}
//EVENT LISTENERS
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    validateEmail(email);
    checkPasswordsMatch(password,password2);
});