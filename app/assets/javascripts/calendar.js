$(document).ready(function() {
   $("#calendar").fullCalendar({
     events: "/sightings/get_events",
     header: {left: 'prev,next today', center: 'title', right: 'month,basicWeek,basicDay'}, dayClick: function(date, allDay, jsEvent, view) { $('#calendar').fullCalendar( 'changeView', 'basicDay')},
     timeFormat: "LT",
     eventClick: function(event) {
       if (event.url) {
         window.open(event.url);
         return false;
       }
     }
  });
});
