var SCROLLSPY_TIME = 700;

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $("#space-holder").height($('nav').height());
    $('.modal').modal();
});

// Smooth scroll to hash -- selects each used link with hashes.
$('a[href*="#"]') .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, SCROLLSPY_TIME, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr('tabindex','-1');
                    $target.focus();
                };
                });
            }
        }
});
