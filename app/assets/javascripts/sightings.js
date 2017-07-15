$("document").ready(function() {

  $("#add_new_sighting_button").on(
    "click",
    //prevents errors from corrupting js
    // e.preventdefault();
    function() {
      // Data to be submitted
  newSighting = {
  // create the sighting object
  "sighting": {
    // the sighting has a name
    "date": $('#sighting_date').val(),
    // the sighting has a year
    "time": $('#sighting_time').val(),

    "longitude": $('#sighting_longitude').val(),
    "latitude": $('#sighting_latitude').val(),
    "region": $('#sighting_region').val(),
    "animal": $('#sighting_animal').val(),
  }
} // end new_wine variable

      $.ajax({
        // tell the server that we are talking JSON
        dataType: 'json',
        // tell the server what resource to retrieve
        url: '/sightings',
        // the HTTP method to store information on the server
        method: 'POST',
        // data to be sent. In this case it is the newWine object that was created
        data: newSighting,

        // call this function if call to server was successful
        success: function(data) {
          add_to_sighting_list(data);
        },
        // call this function if call to server was not successful
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new sighting failed: " + errorThrown);
        }
      });// end ajax

  });// end add sighting

}); // end document ready

function add_to_sighting_list(data) {
  $("#sighting_list").append(
    "<tr><td>" + data.date + "</td><td>" + data.time + "</td><td>" + data.latitude + "</td><td>" + data.longitude + "</td><td>" + data.region + "</td><td>" + data.animal.common_name + "</td><td>" + "<a href='/sightings/" + data.id + "'" + ">Show</a></td>" +
"</td><td>" + "<a href='/sightings/" + data.id + "/edit" + "'" + ">Edit</a></td>" +
"</td><td>" + "<a data-confirm='Are you sure?' rel='nofollow' data-method='delete' href='/sightings/" + data.id + "'" + ">Destroy</a></td></tr>" );
}
