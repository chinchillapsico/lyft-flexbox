


(function(){
  var toFix = document.getElementById('mynav'); 
  window.onscroll = function () {
    if (window.scrollY > toFix.offsetTop + toFix.offsetHeight) {
      toFix.className += ' mynav';
    } else {
      toFix.className = '';
    }
  };
}());