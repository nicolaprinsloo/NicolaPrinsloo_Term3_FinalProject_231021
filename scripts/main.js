// ----------------------------------------------------------------
// Trips Array
// ----------------------------------------------------------------

const arrTrips = [
    {
      "name": "Malibu",
      "price": 2999,
      "description": "Sail along stunning Malibu coast, bask in sunsets, and explore azure waters on a captivating boat cruise.",
      "image": "Logo.svg",
      "tripLength": "short",
      "tripEdition": "kids",
      "origin":"Malibu",
    },
    {
      "name": "BarbieIsland",
      "price": 9999,
      "description": "Discover enchanting shores and create memories on a boat cruise to Barbie Island, where imagination and adventure meet.",
      "image": "Logo.svg",
      "tripLength": "long",
      "tripEdition": "adults",
      "origin":"Malibu",
    },
    {
      "name": "California",
      "price": 1999,
      "description": "Sail along stunning Cali coast, bask in sunsets, and explore azure waters on a captivating boat cruise.",
      "image": "Logo.svg",
      "tripLength": "short",
      "tripEdition": "limited",
      "origin":"California",
    },
    {
      "name": "Los Angeles",
      "price": 3999,
      "description": "Sail along stunning LA coast, bask in sunsets, and explore azure waters on a captivating boat cruise.",
      "image": "Logo.svg",
      "tripLength": "short",
      "tripEdition": "kids",
      "origin":"Los Angeles",
    },
    {
      "name": "Hawaii",
      "price": 9999,
      "description": "Discover enchanting shores and create memories on a boat cruise to Barbie Island, where imagination and adventure meet.",
      "image": "Logo.svg",
      "tripLength": "long",
      "tripEdition": "adults",
      "origin":"Hawaii",
    },
    {
      "name": "Caribbean",
      "price": 1999,
      "description": "Sail along stunning Caribbean coast, bask in sunsets, and explore azure waters on a captivating boat cruise.",
      "image": "Logo.svg",
      "tripLength": "short",
      "tripEdition": "limited",
      "origin":"Caribbean",
    },
];

let appliedFilter = "";
let appliedSort = "";

console.log(arrTrips);

$(document).ready(function(){

  console.log("Hello");

  // -----------------------------------------
  // Trips Page

  loadTrips(arrTrips);

}); 

// ----------------------------------------------------------------
// Load all Trips
// ----------------------------------------------------------------

function loadTrips(tripsToShow) {

  // Load and display all the trips

  console.log(tripsToShow);

  $.ajax({
    type:"GET",
    URL:"https://api.openweathermap.org/data/2.5/weather?q=" + plant.origin + "&appid=6afff1b645e0f71655c4713f2f1c870c",
    success:function(data){
      temp = data
      console.log(temp);
    }
  }).done(function(){
    $(currentChild).find("#weatherTemp").text("OriginTemp: " + Math.round(temp.main.temp - 273));
  });

  // Clear all elements in container
  $("#tripsContainer").empty();

  // Loop through plants

  for (let i = 0; i < tripsToShow.length; i++) {
    const trip = tripsToShow[i];
    
    console.log(trip);

    // 1: Select plants container and add the current array plant to it
    $("#tripsContainer").append($("#tripCardTemplate").html());

    // 2: Create a variable that contains the most recently added plant card
    let currentChild = $("#tripsContainer").children().eq(i);

    // 3: Set the content for the plant card from the plants list
    $(currentChild).find(".card-img-top").attr('src','assets/Logo.svg' + trip.image);
    $(currentChild).find("#nameText").text(trip.name);
    $(currentChild).find("#priceText").text('R' + trip.price);
    $(currentChild).find("#descriptionText").text(trip.description);

    // 4: Hide the description text from the plant card
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find("#weatherTemp").hide();

  }
}

// ----------------------------------------------------------------
// When a filter or sort is clicked
// ----------------------------------------------------------------

$("input[name='filterRadio']").click(function() {
  appliedFilter = $(this).attr('value');

  console.log(appliedFilter);
  filterSortTrips();
});

$("input[name='sortRadio']").click(function() {
  appliedSort = $(this).attr('value');

  console.log(appliedSort);
  filterSortTrips();
});

function filterSortTrips() {

  let filteredSortedArrTrips = [];

  //Filter trips
  filteredSortedArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter)
  
  loadTrips(filteredSortedArrTrips);

  

}

// ----------------------------------------------------------------
// When the trips card is clicked
// ----------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  $(this).find("#weatherTemp").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});

//Weather API 

// $(document).ready(function() {
//   $.ajax({
//     type:"GET",
//     URL:"https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=6afff1b645e0f71655c4713f2f1c870c",
//     success:function(data){
//       console.log(data);
//     }
//   }).done.(function(){
//     ("#weatherTemp").text(data.main.temp);
//   });
// })