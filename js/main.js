
    // fires when the window scrolls
    window.onscroll = function() { scrollFunction() };

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
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    // setting the height of the header to be the height of the display

    function setHeight() {
      windowHeight = window.innerHeight.toString() + 'px';
      document.getElementById('full-header').style.height = windowHeight;
    };
    
    // set height of header
    setHeight();

    // whenever the window is resize run this
    window.onresize = setHeight;

    function setPillarHeight() {
        windowHeight = window.innerHeight.toString() + 'px';
        document.getElementById('pillars').style.height =
        windowHeight;
    };

    setPillarHeight();

    window.onresize = setPillarHeight;