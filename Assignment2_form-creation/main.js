const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password two');


form.addEventListener('submit', e => {
    e.preventDefault();

    check();
})

function check(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(emailValue === ''){
        // console.log("Please enter Valid Email");
        errorMessage(email,"Please enter Valid Email");
    }else{
        console.log("Email success");
    }
    if(usernameValue === ''){
        // console.log("Please enter Valid Username");
        errorMessage(username,"Please enter Valid Username");
    }else{
        console.log("Username success");
    }
    if(passwordValue === ''){
        console.log("Please enter Valid Password");
        errorMessage(password,"Please enter Valid Password");
    }else{
        console.log("Password success");
    }
    if(password2Value === ''){
        console.log("Please enter Password");
        errorMessage(password2,"Password Cannot be empty failed");
    }else if(password2Value === passwordValue){
        console.log("Password Confirmed success");
    }else{
        // console.log("Password Confirmation failed");
        errorMessage(password2,"Password did not match failed");
    }
}


function errorMessage(input,message){
    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}