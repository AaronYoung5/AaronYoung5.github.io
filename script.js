var myAnimatedHeader = function() {

  var docElem = document.documentElement,
    headder = document.querySelector('.navbar-default'),
    didScroll = false,
    changeHeaderOn = 0;

  function init() {
    window.addEventListener('scroll', function(event) {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 0);
      }
    }, false);
  }

  function scrollPage() {
    var sy = scrollY();
    if (sy >= changeHeaderOn) {
      $('.navbar').addClass('navbar-shrink');
    } else {
      $('.navbar').removeClass('navbar-shrink');
    }
    didScroll = false;
  }

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  init();
}();

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if (target.selector == "#wisconsin-autonomous" || target.selector == "#insight-wisconsin" || target.selector == "#sbel" || target.selector == "#engineering-expo") {
          $('html, body').animate({
              scrollTop: target.offset().top - 75
            },
            1000);
        } else {
          $('html, body').animate({
              scrollTop: target.offset().top
            },
            1000);
        }

        return false;
      }
    }
  });
});


// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#back-top').fadeIn();
  } else {
    $('#back-top').fadeOut();
  }
});

// Close the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

// Dots
$(".dots").each(function(i) {
  var ii = 0;
  var percent = $(this).data('percent');
  while (ii < 5) {
    if (ii < percent) {
      $(this).append("<li class='active'></li>");
    } else {
      $(this).append('<li></li>');
    }
    ii++;
  }
  this.style.color = "";
});

// Email form submission
$(function () {

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contactForm').validator();


    // when the form is submitted
    $('#contactForm').on('submit', function (e) {
      console.log("Submitting");

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "mail.php";
            // POST values in the background the the script URL
            $.ajax({
                // type: "POST",
                // url: url,
                // data: $(this).serialize()
                // success: function (data)
                // {
                //     // data = JSON object that contact.php returns
                //
                //     // we recieve the type of the message: success x danger and apply it to the
                //     var messageAlert = 'alert-' + data.type;
                //     var messageText = data.message;
                //
                //     // let's compose Bootstrap alert box HTML
                //     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                //
                //     // If we have messageAlert and messageText
                //     if (messageAlert && messageText) {
                //         // inject the alert to .messages div in our form
                //         $('#contactForm').find('.messages').html(alertBox);
                //         // empty the form
                //         $('#contactForm')[0].reset();
                //     }
                // }
            });
            return false;
        }
    })
});
