var SCROLLSPY_TIME = 700;

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $("#space-holder").height($('nav').height());
    $('.modal').modal();

    $.getJSON("/static/assets/schedule.json", function(data) {
        data.forEach(function(date) {
          var i = 0;
            $("#schedule-container").append(
               $('<h3>')
                 .text(date['date'])
            );

            var $table = $('<table>', {'class': 'schedule'});
            var $schBody = $('<tbody>');

            $table.append(
                $('<thead>').append(
                    $('<tr>')
                      .append($('<th>', {"style": "width:25%;"}).text('Time'))
                      .append($('<th>', {"style": "width:55%;"}).text('Event'))
                      .append($('<th>', {'style': "width:20%;"}).text('Location'))
                )
            );

            date['schedule'].forEach(function(element) {
                var row = $('<tr>')
                row.append('<td>')
                $schBody.append(
                    $('<tr>', {"class" : (i++ % 2 == 0 ? "table-row-even" : "table-row-odd")})
                      .append($('<td>').text(element['time']))
                      .append($('<td>').text(element['event']))
                      .append($('<td>').text(element['location']))
                )
            });

            console.log($schBody);

            var $alltable = $('<table>', {'class': 'schedule'});

            $table.append($schBody);
            $('#schedule-container').append($table);
        });
    });
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
