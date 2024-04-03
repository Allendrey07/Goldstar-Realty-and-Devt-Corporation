window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 200) { // Adjusted threshold to 120px
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
});

  window.onload = function() {
      // Check if the URL contains a fragment identifier
      var fragment = window.location.hash.substring(1);
      if (fragment) {
          // Scroll to the element with the corresponding id
          var element = document.getElementById(fragment);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  };

