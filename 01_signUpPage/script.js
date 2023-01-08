let emailInput = document.querySelector('#email')
let nameInput = document.querySelector('#name')
let passInput = document.querySelector('#password')
let passAgainInput = document.querySelector('#passwordAgain')

let emailMessage = document.querySelector('.email-failure')
let nameSuccess = document.querySelector('.name-success')
let nameFailure = document.querySelector('.name-failure')
let passMessage = document.querySelector('.password-failure')
let passMessageMatch = document.querySelector('.password-failure-match')

emailInput.onkeyup = function(){
    if(rightTypeEmail(emailInput.value)){
        emailMessage.classList.add('hide')
    }else if(emailInput.value === ''){
        emailMessage.classList.add('hide')
    }else{
        emailMessage.classList.remove('hide')
    }
}

nameInput.onkeyup = function(){
    if(onlyNumberAndEnglish(nameInput.value) && isMoreThan4Length(nameInput.value)){
        nameFailure.classList.add('hide')
        nameSuccess.classList.remove('hide')
    }else if(nameInput.value === ''){
        nameFailure.classList.add('hide')
        nameSuccess.classList.add('hide')
    }else{
        nameFailure.classList.remove('hide')
        nameSuccess.classList.add('hide')
    }
}

passInput.onkeyup = function(){
    if(strongPassword(passInput.value)){
        passMessage.classList.add('hide')
    }else if(passInput.value === ''){
        passMessage.classList.add('hide')
    }else{
        passMessage.classList.remove('hide')
    }
}

passAgainInput.onkeyup = function(){
    if(passMatch(passAgainInput.value)){
        passMessageMatch.classList.add('hide')
    }else if(passAgainInput.value === ''){
        passMessageMatch.classList.add('hide')
    }else{
        passMessageMatch.classList.remove('hide')
    }
}

function isMoreThan4Length(value) {
    return value.length >= 4
}

function rightTypeEmail(value){
    return /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(value)
}

function onlyNumberAndEnglish(str) {
    return /^[A-Za-z][A-Za-z0-9]*$/.test(str);
}

function strongPassword(str) {
return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(str);
}

function passMatch(passWordAgain){
    return passWordAgain === passInput.value
}