let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('confirm-password');
let age = document.getElementById('age');
let uploadedFile = document.getElementById('picture');
let errorMessages = document.getElementsByTagName('small');
const form = document.getElementById("myForm");

document.querySelectorAll('.blogs-post').forEach(article => {
    const readMore = article.querySelector('.read-more');
    const readless = article.querySelector('.read-less');
    const fullDetails = article.querySelectorAll('.More-details');
    
    readMore?.addEventListener('click', ()=>{
        fullDetails.forEach(post => post.style.display = 'block');
        readMore.style.display = 'none';
    });
    
    readless?.addEventListener('click', ()=>{
        fullDetails.forEach(post => post.style.display = 'none');
        readMore.style.display = 'inline';
    })
});

firstName.addEventListener('blur', ()=>{
    if (firstName.value.trim().length < 2){
        firstName.style.border = '2px solid red'
        errorMessages[0].textContent = 'Your first name should not be spaces alone and should be atleast 2 letters'
    }else if(/[^a-zA-Z]/.test(firstName.value)){
        firstName.style.border = '2px solid red'
        errorMessages[0].textContent = 'Your first name should contain only letters'
    }else{
        firstName.style.border = '';
        errorMessages[0].textContent = '';
    }
})

lastName.addEventListener('blur', ()=>{
    if (/[^a-zA-Z]/.test(lastName.value)){
        lastName.style.border = '2px solid red';
        errorMessages[1].textContent = 'Your last name should only contain letters'
    }else{
        lastName.style.border = '';
        errorMessages[1].textContent = '';
    }
})

email.addEventListener('blur', ()=>{
    let emailRegex = /^(?!\.)(?!.*\.\.)[a-zA-Z0-9._+-]+(?<!\.)@[a-zA-Z0-9]+(\.[a-zA-Z]{2,})+$/;
    if (!emailRegex.test(email.value)){
        email.style.border = '2px solid red';
        document.querySelector('#email +small').textContent = 'Enter a valid email';
    }else{
        email.style.border = '';
        document.querySelector('#email +small').textContent = ''
    }
})

password.addEventListener('blur', ()=>{
    let passwordRegex = /^(?=(?:.*[A-Z]){2,})(?=(?:.*[0-9]){2,}).+$/;
    if (!passwordRegex.test(password.value)){
        password.style.border = '2px solid red';
        errorMessages[3].textContent = 'Your password must contain atleast 2 uppercase letters and 2 numbers';
        password.setAttribute('type','text')
        const showMistake = setTimeout(() => {
            password.setAttribute('type','password');
        },5000)
    }
    else{
        password.style.border = '';
        errorMessages[3].textContent = ''
    };
});

password2.addEventListener('blur', ()=>{
    let errorBox = errorMessages[4]
    if (password2.value != password.value){
        password2.style.border = '2px solid red'
        errorBox.textContent = 'The password in your password and confirm password field should be the same';
        password.setAttribute('type','text');
        password2.setAttribute('type','text');
        const showMistake = setTimeout(() => {
            password.setAttribute('type','password');
            password2.setAttribute('type','password');
        },5000)
    }else{
        password2.style.border = '';
        errorBox.textContent = ''
    }
})

age.addEventListener('blur', ()=>{
    if (!(Number(age.value) >= 18 && Number(age.value) <= 100)){
        age.style.border = '2px solid red'
        errorMessages[5].textContent = 'Age should be between 18 and 100';
    }else{
        age.style.border = '';
        errorMessages[5].textContent = '';
    }
})

uploadedFile.addEventListener('change', ()=>{
    if (!uploadedFile.files[0]?.name.match(/\.(jpg|png)$/i)){
        uploadedFile.style.border = '2px solid red';
        uploadedFile.value = '';
        document.querySelector('#picture +small').textContent = 'Only .jpg and .png files are allowed';
    }else{
        uploadedFile.style.border = '';
        document.querySelector('#picture +small').textContent = '';
    }
})