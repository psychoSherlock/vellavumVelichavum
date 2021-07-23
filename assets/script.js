//shake contacts icon every x seconds

shakeTimeOut = 8000

const contactIcon = document.getElementById('contact__icon')


setInterval(function () {
    contactIcon.classList.toggle('shake')
},shakeTimeOut)