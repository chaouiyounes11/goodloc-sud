
$(function() {
    var header = $(".bg-light");

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

});

function initMap()
{ var frejus = {lat: 43.425190, lng: 6.768370
};
 var map = new google.maps.Map(document.getElementById('map'), { zoom: 13, center: frejus
 });
 var marker = new google.maps.Marker({ position: frejus, map: map }); }
