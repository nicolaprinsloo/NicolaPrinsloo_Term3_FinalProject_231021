// ----------------------------------------------------------------
// Trips Array
// ----------------------------------------------------------------

const arrTrips = [
    { image: "card img.jpg",
      name: "Malibu Coastline Cruise",
      description: "Cruise along the Malibu coastline, soak up the sun, and enjoy breathtaking ocean views on this unforgettable nautical adventure.",
      date: "21 July 2024",
      code: "#12345",
      destination: "Round Trip",
      duration: "From ... To ...",
      tc: "additional costs included",
      price: "R2999,00",
    },
    { image: "card img.jpg",
      name: "Malibu Coastline Cruise",
      description: "Cruise along the Malibu coastline, soak up the sun, and enjoy breathtaking ocean views on this unforgettable nautical adventure.",
      date: "21 July 2024",
      code: "#12345",
      destination: "Round Trip",
      duration: "From ... To ...",
      tc: "additional costs included",
      price: "R2999,00",
    },
    { image: "card img.jpg",
      name: "Malibu Coastline Cruise",
      description: "Cruise along the Malibu coastline, soak up the sun, and enjoy breathtaking ocean views on this unforgettable nautical adventure.",
      date: "21 July 2024",
      code: "#12345",
      destination: "Round Trip",
      duration: "From ... To ...",
      tc: "additional costs included",
      price: "R2999,00",
    },
];

let appliedFilter = "";


console.log(arrTrips);

$(document).ready(function(){

  console.log(arrTrips)
  loadTrips(arrTrips)

  console.log("Hello, I am working");

  // -----------------------------------------
  // Trips Page

  // loadTrips(arrTrips);

}); 

// ----------------------------------------------------------------
// Load all Trips
// ----------------------------------------------------------------

function loadTrips() {

  // Load and display all the trips

  console.log(arrTrips);

  // Clear all elements in container
  // $("#tripsContainer").empty();

  // Loop through Trips

  for (let i = 0; i < arrTrips.length; i++) {
  const trips = arrTrips[i];

  console.log(trips);

  $("#tripsContainer").append($("#tripsCardTemplate").html());

  let currentChild = $("#tripsContainer").children().eq(i+1);

  //Show
  $(currentChild).find(".card-img-top").attr('src', '../assets/' + trips.image);
  $(currentChild).find("#tripName").text(trips.name);
  $(currentChild).find("#tripDescription").text(trips.description);
  $(currentChild).find("#tripDate").text(trips.date); 
  $(currentChild).find("#tripCode").text(trips.code); 
  $(currentChild).find("#tripDestination").text(trips.destination); 
  $(currentChild).find("#tripDuration").text(trips.duration); 
  $(currentChild).find("#tcInfo").text(trips.tc); 
  $(currentChild).find("#tripPrice").text(trips.price); 

  // //Hide
  $(currentChild).find("#tripCode").hide(); 
  $(currentChild).find("#tripDestination").hide(); 
  $(currentChild).find("#tripDuration").hide();  
  $(currentChild).find("#tcInfo").hide(); 
  $(currentChild).find("#tripPrice").hide(); 
  }
  
};

// ----------------------------------------------------------------
// When the trips card is clicked
// ----------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function(){

    // Show
    $(this).find("#tripCode").toggle(); 
    $(this).find("#tripDestination").toggle(); 
    $(this).find("#tripDuration").toggle();  
    $(this).find("#tcInfo").toggle(); 
    $(this).find("#tripPrice").toggle(); 

    // hide
    $(this).find("#tripsImage").toggle(); 
    $(this).find("#tripName").toggle(); 
    $(this).find("#tripDescription").toggle(); 
    $(this).find("#tripDate").toggle(); 

});
    
    // console.log(trip);

    // // 1: Select trips container and add the current array trips to it
    // $("#tripsContainer").append($("#tripCardTemplate").html());

    // // 2: Create a variable that contains the most recently added trip card
    // let currentChild = $("#tripsContainer").children().eq(i);

    // // 3: Set the content for the trip card from the trip list
    // $(currentChild).find(".card-img-top").attr('src','assets/Logo.svg' + trip.image);
    // $(currentChild).find("#nameText").text(trip.name);
    // $(currentChild).find("#priceText").text('R' + trip.price);
    // $(currentChild).find("#descriptionText").text(trip.description);

    // // 4: Hide the description text from the trip card
    // $(currentChild).find("#descriptionText").hide();
    // $(currentChild).find("#weatherTemp").hide();

//   }
// }

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

// $("#tripsContainer").on('click', '.card', function(){

//   // Toggle the price & description text
//   $(this).find("#priceText").toggle();
//   $(this).find("#descriptionText").toggle();
//   $(this).find("#weatherTemp").toggle();

//   // Resize the image to fit the additional content
//   $(this).find(".card-img-top").toggleClass("small");

// });

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