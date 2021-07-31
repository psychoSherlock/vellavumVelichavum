

//------------------Buttons to whatsapp---------------------

const waMsg = "Hello sir, I am visiting from your website. I wanted to buy the product "
const productType = document.getElementsByClassName('product_type')[0].getAttribute('ptype')
function urlEncode(product) {
  return encodeURI(waMsg + product + " " + productType+ " which I saw on your website.")
}


function sendWhatsapp(message) {
  window.open("https://wa.me/919496315291?text=" + message, "_blank");
}

//const fBtn = document.getElementById('first-btn') //change this

//fBtn.addEventListener('click', function () {
//  var product = fBtn.getAttribute('product')
//  var message = sendWhatsapp(urlEncode(product))
//})


const buyBtn = document.querySelectorAll('.buy-btn');

buyBtn.forEach(el => el.addEventListener('click', button => {
  var product = button.target.previousElementSibling.textContent //get attribute from the previous element which is the name of the product. 
  //Change this if the client asks for the prize element
  
  console.log(product)
  sendWhatsapp(urlEncode(product))
  
}));










// Intersection observer APi


const elements = document.querySelectorAll('.header__second ') //select all elements

const options = {} //intersection options


const observer = new IntersectionObserver(function (entries,observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting){
      return//do nothing if not intersecting
    }
    console.log(entry.target) //else
    entry.target.classList.toggle('slide_from_left')
    observer.unobserve(entry.target)
  })
  
},options) //callback, options


elements.forEach(section => {
  observer.observe(section);
});




//shake contacts icon every x seconds

shakeTimeOut = 5000

const contactIcon = document.getElementById('contact__icon')


setInterval(function () {
    contactIcon.classList.toggle('shake')
},shakeTimeOut)

//-------------------------------------



// Manage icons that fail to load


const navIcons = document.querySelectorAll('.material-icons')


$(window).on('load',function() {

  navIcons.forEach(icon => {
    icon.style.opacity = 1
  })

    
});







