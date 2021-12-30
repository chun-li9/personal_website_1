
// Loading page progress bar fade out
var removeLoadingBar = function(){
    $(".progress").fadeOut(500).empty();  
}
setTimeout(removeLoadingBar, 4000); 

// entire loading page fade out
function removeLoader(){
    setTimeout(function(){
        window.scrollTo({top:0, behaviour:'auto'});
    },0);
    $( ".loader-wrapper" ).fadeOut(1000, function() {
        $( ".loader-wrapper" ).remove(); 
    });  
}
  
setTimeout(removeLoader, 6000);


// main page activity
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // scroll-up
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Hello, my name is", "你好，我是"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 500,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    // cursor trail
    cursorX = 0;
    cursorY = 0;

    let colors = ['rgb(128,128,128)', 'rgb(225,225,225)', 'rgb(250, 242, 225)', 'rgb(158, 123, 93)', 'rgb(185, 120, 94)', 'rgb(216, 172, 151)'];
  
    function getRndInt(min, max) { // both ends included
        return Math.round(Math.random() * (max - min + 1)) + min;
    }
    
    $(window).mousemove(function(e) {
      cursorX = e.pageX;
      cursorY = e.pageY;
    });
    
    $(window).mouseleave(function() {
      cursorX = -1;
      cursorY = -1;
    });
    
    setInterval(function(){
      if(cursorX > 0 && cursorY > 0){
        var range = 5;
        var sizeInt = getRndInt(5,15);
        var color_index = getRndInt(0,5);
  
        var style = "height:" + sizeInt + "px; " 
        + "width:" + sizeInt + "px; "
        + "left:" + getRndInt(cursorX-range-sizeInt, cursorX+range) + "px;"
        + "top:" + getRndInt(cursorY-range-sizeInt, cursorY+range) + "px;"
        + "background:" + colors[color_index] + ";"
        + "opacity:" + Math.random();
        
        $("<div class='trail' style='" + style + "'></div>").appendTo('#entire-body'); 
      }
    }, 25);

});




/*
const switcher = document.querySelector('.btn'); // get the button reference

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark Mode";
    }
    else {
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});

*/


