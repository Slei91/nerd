$(document).ready(function() {


	$(".button").click(function () {
		$(".main_nav ul").slideToggle();
	});

});	

function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          scrollwheel: false,
          center: {lat: 59.939222, lng: 30.321901}
        });
        var marker = new google.maps.Marker({
          position: {lat: 59.938722, lng: 30.323801},
          map: map,
          icon: "img/map-marker.png"
        });
      }