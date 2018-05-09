$(document).ready(function(){


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

		// var typed = new Typed(".typedText", {
		//   strings: ["The Best Of What We Are.", "Shalala In The Morning."],
		//   smartBackspace: true, // Default value
		//   typeSpeed: 100,
	 //    loop: true,
		// });

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
