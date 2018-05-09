$(document).ready(function(){

	/* -----------------------------------------------
	/* How to use? : Check the GitHub README
	/* ----------------------------------------------- */

	/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
	/*
	particlesJS.load('particles-js', 'particles.json', function() {
	  console.log('particles.js loaded - callback');
	});
	*/

	/* Otherwise just put the config content (json): */



	/* -----------------------------------------------
	 		particles js START
	/* ----------------------------------------------- */

	particlesJS('particles-js',
    
    {
		  "particles": {
		    "number": {
		      "value": 80,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 5
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.5,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 150,
		      "color": "#ffffff",
		      "opacity": 0.4,
		      "width": 1
		    },
		    "move": {
		      "enable": true,
		      "speed": 6,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": true,
		        "mode": "repulse"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 400,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		}
    
    );
	
		/* -----------------------------------------------
	 		particles js END
		/* ----------------------------------------------- */



	/* -----------------------------------------------
	 		Navigation toggle START
	/* ----------------------------------------------- */

  $(".toggle").on("click", function(){
    $(".nav-collapse").toggleClass("toggle-nav");
  });

  /* -----------------------------------------------
	 		Navigation toggle END
	/* ----------------------------------------------- */




	/* -----------------------------------------------
	 		ScrollSpy START
	/* ----------------------------------------------- */

    // Used for tracking current section on the page
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function(){
            window.location.hash = target;
        });
    });

    /* -----------------------------------------------
	 		ScrollSpy END
		/* ----------------------------------------------- */



		/* -----------------------------------------------
	 		Nagigation Scroll START
		/* ----------------------------------------------- */

    // Used for navbar transparency on scroll
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        if(position > 200){
            $("header").addClass("navScroll");
        }else{
            $("header").removeClass("navScroll");
        }
    });

    /* -----------------------------------------------
	 		Nagigation Scroll END
		/* ----------------------------------------------- */



		/* -----------------------------------------------
	 		counter up START
		/* ----------------------------------------------- */

    // counter up
    $('.counter').counterUp({
          delay: 10,
          time: 1000
      });

    /* -----------------------------------------------
	 		counter up END
		/* ----------------------------------------------- */





    /* -----------------------------------------------
	 		typed js START
		/* ----------------------------------------------- */

		var typed = new Typed(".typedText", {
		  strings: ["The Best Of What We Are.", "Shalala In The Morning."],
		  smartBackspace: true, // Default value
		  typeSpeed: 100,
	    loop: true,
		});

		/* -----------------------------------------------
	 		typed js END
		/* ----------------------------------------------- */




		/* -----------------------------------------------
	 		Accordion START
		/* ----------------------------------------------- */
		// accordion 
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
		  acc[i].addEventListener("click", function() {
		    this.classList.toggle("active");
		    var panel = this.nextElementSibling;
		    if (panel.style.maxHeight){
		      panel.style.maxHeight = null;
		    } else {
		      panel.style.maxHeight = panel.scrollHeight + "px";
		    } 
		  });
		}

		/* -----------------------------------------------
	 		Accordion START
		/* ----------------------------------------------- */





		/* -----------------------------------------------
	 		mixitup js START
		/* ----------------------------------------------- */

	  // portfolio
	  var containerEl = document.querySelector('[data-ref~="mixitup-container"]');

	  var mixer = mixitup(containerEl, {
	      selectors: {
	          target: '[data-ref~="mixitup-target"]'
	      }
	  });

	  /* -----------------------------------------------
	 		mixitup js END
		/* ----------------------------------------------- */



		/* -----------------------------------------------
	 		ScrollTop START
		/* ----------------------------------------------- */

	  // Scroll Top
    $(window).scroll(function(){
        var position = $(window).scrollTop();
        if(position > 500){
            $(".scrollTop").css("right", "20px");
        }else{
            $(".scrollTop").css("right", "-200px");
        }
    });

    /* -----------------------------------------------
	 		ScrollTop END
		/* ----------------------------------------------- */



		/* -----------------------------------------------
	 		wow js START
		/* ----------------------------------------------- */

    // Animation on reveal
    wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init();

    /* -----------------------------------------------
	 		wow js END
		/* ----------------------------------------------- */



    /* -----------------------------------------------
	 		Preloader START
		/* ----------------------------------------------- */
		var themeWindow = $(window);
        var pagebody = $('html, body');

        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-section');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            themeWindow.scrollTop(0);
        });
    // themeWindow.stellar();

    	/* -----------------------------------------------
		 		Preloader END
			/* ----------------------------------------------- */



})
