
    // fires when the window scrolls
    window.onscroll = function() { scrollFunction(); };

    // hiding and displaying top button
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("top-button").style.display = "block";
        } else {
            document.getElementById("top-button").style.display = "none";
        }
    }

    // When the user clicks on the button go back to top id=top-button
    function topFunction() {
      setTimeout(function() {
        window.scrollTo(0,1);
      }, 0);
    }

    // setting the height of any elementto be equal to the height of the display

    function setHeight(element) {
      windowHeight = window.innerHeight.toString() + 'px';
      document.getElementById(element).style.height = windowHeight;
    }

    // set height of header
    setHeight('full-header');
    setHeight('pillars');
    setHeight('team');

    // whenever the window is resize run this
    window.onresize = setHeight;
