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
    "date": "2016-06-23 ",
    // the sighting has a year
    "time": "11:22:33 UTC",

    "longitude": "888",
    "latitude": "999",
    "region": "West",
    "animal_common_name": "Cow",
    "animal_id": 1
  }
} // end new_wine variable
      // newSighting = {
      //   // create the sighting object
      //   "sighting": {
      //     // the sighting has a name
      //     "region": $('#sighting_region').val(),
      //   }
      // } // end new_sighting variable

      // give an alert to show newSighting object. Use JSON.stringify to show the object, otherwise the alert will just show [object Object]
      // alert("Sending message: " + JSON.stringify(newSighting));
      // create the Ajax call.
      console.log(newSighting)
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
          console.log(data)
        },
        // call this function if call to server was not successful
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new sighting failed: " + errorThrown);
        }
      });// end ajax

  });// end add sighting

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_sighting_list(data) {
  $("#sighting_list").append(
    "<tr><td>" + data.date + "</td><td>" + data.time + "</td><td>" + data.latitude + "</td><td>" + data.longitude + "</td><td>" + newSighting.sighting.region + "</td><td>" + data.common_name + "</td><td>" + "<a href='/sightings/" + data.id + "'" + ">Show</a></td>" +
"</td><td>" + "<a href='/sightings/" + data.id + "/edit" + "'" + ">Edit</a></td>" +
"</td><td>" + "<a data-confirm='Are you sure?' rel='nofollow' data-method='delete' href='/sightings/" + data.id + "'" + ">Destroy</a></td></tr>" );
}



// $("document").ready(function() {
//
//   $("#add_new_sighting_button").on(
//     "click",
//     //prevents errors from corrupting js
//     // e.preventdefault();
//     function() {
//       // Data to be submitted
//       newSighting = {
//         // create the sighting object
//         "sighting": {
//           // the sighting has a name
//           "date": $('#sighting_date').val(),
//           // the sighting has a year
//           "time": $('#sighting_time').val(),
//           // the sighting has a year
//           "latitude": $('#sighting_latitude').val(),
//           // the sighting has a year
//           "longitude": $('#sighting_longitude').val(),
//           // the sighting has a year
//           "region": $('#sighting_region').val(),
//           // the sighting must be associated with a animal
//           "animal": $('#sighting_date').val(),
//
//         }
//       } // end new_sighting variable
//
//       // give an alert to show newSighting object. Use JSON.stringify to show the object, otherwise the alert will just show [object Object]
//       // alert("Sending message: " + JSON.stringify(newSighting));
//       // create the Ajax call.
//       $.ajax({
//         // tell the server that we are talking JSON
//         dataType: 'json',
//         // tell the server what resource to retrieve
//         url: '/sightings',
//         // the HTTP method to store information on the server
//         method: 'POST',
//         // data to be sent. In this case it is the newWine object that was created
//         data: newSighting,
//         // call this function if call to server was successful
//         success: function(data) {
//           add_to_sighting_list(data);
//         },
//         // call this function if call to server was not successful
//         error: function(jqXHR, textStatus, errorThrown) {
//           alert("Add new sighting failed: " + errorThrown);
//         }
//       });// end ajax
//
//   });// end add sighting
//
// }); // end document ready
//
// // Function to be called after data has been successfully submitted
// function add_to_sighting_list(data) {
//   $("#sighting_list").append(
//     "<tr><td>" + data.date + "</td><td>" + data.time + "</td><td>" + data.latitude + "</td><td>" + data.longitude + "</td><td>" + data.region + "</td><td>" + data.common_name + "</td><td><a href='/sightings/show'  " + ">Show</a></td>"  + "</td><td><a href='/sightings/edit'  " + ">Edit</a></td>" + "</td><td><a href='/sightings/destroy'  " + ">Destroy</a></td></tr>"  );
// }
