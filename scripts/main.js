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
      tripLength: "long",
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
      tripLength: "long",
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
      tripLength: "long",
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
      tripLength: "long",
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
      tripLength: "long",
    },
];

let appliedFilter = "";



// ------------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------------

console.log(arrTrips);

$(document).ready(function(){

  console.log("Hello, I am working");

  console.log(arrTrips)
  loadTrips(arrTrips)

  filterSortTrips();

}); 

// ----------------------------------------------------------------
// Weather API
// ----------------------------------------------------------------

$(document).ready(function() {

  const city = "Pretoria"; 
  const apiKey = "6afff1b645e0f71655c4713f2f1c870c";

  $.ajax({
    type: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`,
    success: function(data) {
      const temp = data.main.temp;
      console.log("Temperature:", temp);
      
      updateTemperature(Math.round(temp - 273));
    }
  });
});

function updateTemperature(temp) {

  const templateContents = $("#weatherApi").contents().clone();
  const tempElement = templateContents.find("#temp");
  tempElement.text("Temperature: " + temp + "°C");

  $(".weather").empty().append(templateContents);
}


// ----------------------------------------------------------------
// When a filter or sort is clicked
// ----------------------------------------------------------------

$("input[name='filterRadio']").click(function() {
  appliedFilter = $(this).attr('value');

  filterSortTrips();

});


function filterSortTrips() {

  let filteredArrTrips = [];

  console.log(appliedFilter);

  //Filter Trips
  if (appliedFilter) {
    filteredArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter)
  } else {
    filteredArrTrips = arrTrips;
  }
  
  console.log(filteredArrTrips)

  loadTrips(filteredArrTrips);

};





// ----------------------------------------------------------------
// Load all Trips
// ----------------------------------------------------------------

function loadTrips(arrTrips) {

  // Load and display all the trips

  console.log(arrTrips);

  // Loop through Trips
  for (let i = 0; i < arrTrips.length; i++) {
  const trips = arrTrips[i];

  console.log(trips.name);

  // 1: Select the trips container add the trip card to it
  $("#tripsContainer").append($("#tripsCardTemplate").html());

  // 2: Create a variable that contains the most recently added trip card
  let currentChild = $("#tripsContainer").children().eq(i+1);

  //Connect subject with ids

  // 3: Set the content for the current trip card from the trips array
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

  // 4: Hide the description text from the current card
  //Hide
  $(currentChild).find("#tripCode").hide(); 
  $(currentChild).find("#tripDestination").hide(); 
  $(currentChild).find("#tripDuration").hide();  
  $(currentChild).find("#tcInfo").hide(); 
  $(currentChild).find("#tripPrice").hide(); 
  $(currentChild).find("#bookButton").hide(); 
  }
  
};


// ----------------------------------------------------------------
// When the trips card is clicked
// ----------------------------------------------------------------

$("#tripsContainer").on('click', '.card', function() {

    // Toggle what to Show
    $(this).find("#tripCode").toggle(); 
    $(this).find("#tripDestination").toggle(); 
    $(this).find("#tripDuration").toggle();  
    $(this).find("#tcInfo").toggle(); 
    $(this).find("#tripPrice").toggle();
    $(this).find("#bookButton").toggle();

    // Toggle what to Hide
    $(this).find("#tripsImage").toggle(); 
    $(this).find("#tripName").toggle(); 
    $(this).find("#tripDescription").toggle(); 
    $(this).find("#moreButton").toggle();
    $(this).find("#tripDate").toggle();

});






















// ----------------------------------------------------------------
// extras
// ----------------------------------------------------------------



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