$(document).ready(function() {

  // leaflet map on contact page
  if ($('#contact-map').length) {
    var map = L.map('contact-map').setView([49.261439, 17.702072], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([49.261439, 17.702072]).addTo(map).bindPopup('Cukrářství Kostelec,<br>Zlínská 107,<br>Kostelec,<br>76314,<br>Zlín');

    map.dragging.disable();
    map.scrollWheelZoom.disable();
  }


  // gallery pages
  baguetteBox.run('.grid-gallery', {
    animation: 'slideIn'
  });


  // contact form submit using ajax
  $("#ajaxForm").submit(function(e){
        e.preventDefault();
        var href = $(this).attr("action");
        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                  $('.form-sent').addClass('is-active');
                  $("#name, #email, #phone, #comment").val(''); // clear fields values
                  $("button.btn").hide(); // hide submit button
                } else {
                  alert("An error occured: " + response.message);
                }
            }
        });
    });
})

  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy-loaded-image",
    threshold: 0
  });
