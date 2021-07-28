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










//-----------------Nav on scroll-------------------------------

$(document).ready(function() {// onready
  
    var scrollLink = $('.nav__link');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top //if cliked,scroll with slide effect
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() { //on scroll
      var scrollbarLocation = $(this).scrollTop(); //scrollBar location
      
      scrollLink.each(function() {// for each items in scroll link
        
        var sectionOffset = $(this.hash).offset().top - 20; //get offset of that hash
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).addClass('nav_active'); //switch classes
          $(this).siblings().removeClass('nav_active');
        }
      })
      
    })
    
  })

//-----------------Nav on scroll-------------------------------

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




