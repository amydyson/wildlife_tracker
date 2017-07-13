$("document").ready(function() {

  $("#add_new_animal_button").on(
    "click",
    //prevents errors from corrupting js
    // e.preventdefault();
    function() {
      // Data to be submitted
      newAnimal = {
        // create the sighting object
        "animal": {
          // the sighting has a name
          "common_name": $('#animal_common_name').val(),
          // the sighting has a year
          "latin_name": $('#animal_latin_name').val(),
          // the sighting has a year
          "kingdom": $('#animal_kingdom').val(),
        }
      } // end new_sighting variable

      // give an alert to show newSighting object. Use JSON.stringify to show the object, otherwise the alert will just show [object Object]
      // alert("Sending message: " + JSON.stringify(newSighting));
      // create the Ajax call.
      $.ajax({
        // tell the server that we are talking JSON
        dataType: 'json',
        // tell the server what resource to retrieve
        url: '/animals',
        // the HTTP method to store information on the server
        method: 'POST',
        // data to be sent. In this case it is the newWine object that was created
        data: newAnimal,
        // call this function if call to server was successful
        success: function(data) {
          add_to_animal_list(data);
        },
        // call this function if call to server was not successful
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });// end ajax

  });// end add sighting

}); // end document ready

// Function to be called after data has been successfully submitted
function add_to_animal_list(data) {
  $("#animal_list").append(
    "<tr><td>" + data.common_name + "</td><td>" + data.latin_name + "</td><td>" + data.kingdom + "</td><td>" + "<a href='/animals/" + data.id + "'" + ">Show</a></td>" +
"</td><td>" + "<a href='/animals/" + data.id + "/edit" + "'" + ">Edit</a></td>" +
"</td><td>" + "<a data-confirm='Are you sure?' rel='nofollow' data-method='delete' href='/animals/" + data.id + "'" + ">Destroy</a></td></tr>" );
}
