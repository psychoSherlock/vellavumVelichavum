//shake contacts icon every x seconds

shakeTimeOut = 5000

const contactIcon = document.getElementById('contact__icon')


setInterval(function () {
    contactIcon.classList.toggle('shake')
},shakeTimeOut)


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

