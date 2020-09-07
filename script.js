$(document).ready(function(){
    $("a").on('click', function(event) {

        if (this.hash !== "") {
          event.preventDefault();
    
          var hash = this.hash;
    
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000, function(){
       
            window.location.hash = hash;
          });
        } 
      });

});

var hover = document.getElementById('content');

function comeIn() {
  hover.style.display = "block";

}

function normal() {
  hover.style.display = "none";
}

function hoverIn(hide) {
  hide.style.display = "none";
}

function hoverOut(hide) {
  hide.style.display = "block";
}




