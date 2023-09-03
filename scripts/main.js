// ----------------------------------------------------------------
// Trips Array
// ----------------------------------------------------------------

const arrTrips = [
    { image: "card _image1.jpg",
      name: "Mystical Mediterranean Cruise",
      description: "Discover the charm of the Mediterranean with stops in Greece, Spain, and Italy.",
      date: "20 December 2023",
      code: "Trip Code: #12345",
      duration: "From 20 December - 26 December 2023",
      tc: "(additional costs included)",
      price: "R3999,00",
      tripLength: "long",
      destination: "multi",
      special: "true",
    },
    { image: "card _image2.jpg",
      name: "Caribbean Dream Cruise",
      description: "Enjoy the vibrant culture, colorful marine life, and laid-back vibes of the Caribbean.",
      date: "30 December 2023",
      code: "Trip Code: #12346",
      duration: "From 30 December 2023 - 1 January 2024",
      tc: "(additional costs included)",
      price: "R2999,00",
      tripLength: "short",
      destination: "roundTrips",
    },
    { image: "card _image3.jpg",
      name: "European Elegance Cruise",
      description: "Explore the stunning cities of Europe, from the romance of Paris to the history of Rome.",
      date: "10 January 2024",
      code: "Trip Code: #12347",
      duration: "From 10 January - 17 January 2024",
      tc: "(additional costs included)",
      price: "R6999,00",
      tripLength: "long",
      destination: "multi",
    },
    { image: "card _image4.jpg",
      name: "Malibu Coastline Cruise",
      description: "Cruise along the Malibu coastline, soak up the sun, and enjoy breathtaking ocean views on this unforgettable magical adventure.",
      date: "20 February 2024",
      code: "Trip Code: #12348",
      duration: "From 20 February - 23 February 2024",
      tc: "(additional costs included)",
      price: "R999,00",
      tripLength: "short",
      destination: "roundTrips",
      special: "true",
    },
    { image: "card _image5.jpg",
      name: "Bali Bliss Cruise",
      description: "Experience the serene beaches, lush jungles, and vibrant culture of Bali, just like Barbie's island adventures.",
      date: "21 March 2024",
      code: "Trip Code: #12349",
      duration: "From 21 March - 22 March 2024",
      tc: "(additional costs included)",
      price: "R999,00",
      tripLength: "short",
      destination: "roundTrips",
      special: "true",
    },
    { image: "card _image6.jpg",
      name: "Hawaiian Hideaway Cruise",
      description: "Surf the waves, explore volcanic landscapes, and embrace the aloha spirit in Hawaii.",
      date: "18 April 2024",
      code: "Trip Code: #12355",
      duration: "From 18 April - 25 April 2024",
      tc: "(additional costs included)",
      price: "R5999,00",
      tripLength: "long",
      destination: "single",
    },
    { image: "card _image7.jpg",
      name: "Far East Discovery Cruise",
      description: "Immerse yourself in the rich history and modern wonders of Asia, from Tokyo to Bangkok.",
      date: "25 June 2024",
      code: "Trip Code: #12365",
      duration: "From 25 June - 31 June 2024",
      tc: "(additional costs included)",
      price: "R4999,00",
      tripLength: "long",
      destination: "single",
    },
    { image: "card _image8.png",
      name: "Tropical Paradise Cruise",
      description: "Sail to exotic islands with palm-fringed beaches and crystal-clear waters, just like Barbie's dream vacation.",
      date: "10 July 2024",
      code: "Trip Code: #12375",
      duration: "From 10 July - 14 July 2024",
      tc: "(additional costs included)",
      price: "R1999,00",
      tripLength: "short",
      destination: "roundTrips",
    },
    { image: "card _image9.jpg",
      name: "Barbie's Nordic Fantasy",
      description: "Sail through the stunning fjords and coastal wonders of Scandinavia, embracing the beauty of Norway, Sweden, and Denmark.",
      date: "21 July 2024",
      code: "Trip Code: #12385",
      duration: "From 21 July - 29 July 2024",
      tc: "(additional costs included)",
      price: "R2999,00",
      tripLength: "long",
      destination: "single",
      special: "true",
    },
    { image: "card _image10.jpg",
      name: "Barbie's Pacific Island Paradise",
      description: "Experience the allure of the South Pacific, with visits to Fiji, Tahiti, and Bora Bora, where overwater bungalows await.",
      date: "28 July 2024",
      code: "Trip Code: #12395",
      duration: "From 28 July - 6 August 2024",
      tc: "(additional costs included)",
      price: "R7999,00",
      tripLength: "long",
      destination: "multi",
    },
    { image: "card _image11.jpg",
      name: "Barbie's Australian Dream",
      description: "Explore the land Down Under, with visits to Sydney, the Great Barrier Reef, and the rugged Outback.",
      date: "30 July 2024",
      code: "Trip Code: #12445",
      duration: "From 30 July - 32 July 2024",
      tc: "(additional costs included)",
      price: "R2999,00",
      tripLength: "short",
      destination: "roundTrips",
    },
    { image: "card _image12.jpg",
      name: "Barbie's Coastal Charm Cruise",
      description: "Cruise along the picturesque coastlines of the Mediterranean, with stops at charming coastal towns and hidden coves, experiencing the allure of seaside living.",
      date: "15 December 2024",
      code: "Trip Code: #12545",
      duration: "From 15 December - 19 December 2024",
      tc: "(additional costs included)",
      price: "R999,00",
      tripLength: "short",
      destination: "roundTrips",
      special: "true",
    },
];

let appliedFilter = "";



// ------------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  var h1Element = document.getElementById("LoadIn");
  h1Element.textContent = "Welcome to Barbie Dream Boat Cruises!";
});

console.log(arrTrips);

$(document).ready(function(){

  console.log("Hello, I am working");

  console.log(arrTrips)
  loadTrips(arrTrips)

  filterTrips();

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
// Load all Trips
// ----------------------------------------------------------------

function loadTrips(arrTrips) {

  // Load and display all the trips

  console.log(arrTrips);

  $("#tripsContainer").empty();

  // Loop through Trips
  for (let i = 0; i < arrTrips.length; i++) {
  const trips = arrTrips[i];

  console.log(trips.name);

  // 1: Select the trips container add the trip card to it
  $("#tripsContainer").append($("#tripsCardTemplate").html());

  // 2: Create a variable that contains the most recently added trip card
  let currentChild = $("#tripsContainer").children().eq(i);

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
// When a filter is clicked
// ----------------------------------------------------------------

// $("input[name='filterCheck']").click(function() {
//   appliedFilter = $(this).attr('value');

//   console.log(appliedFilter);
//   filterTrips();

// });


// function filterTrips() {

//   let filteredArrTrips = [];

//   //Filter Trips
//   if (appliedFilter) {
//     filteredArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter)
//   } else {
//     filteredArrTrips = arrTrips;
//   }

//   loadTrips(filteredArrTrips);

// };

$("input[name='filterCheck']").click(function() {

  appliedFilter = $(this).attr('value')

  console.log(appliedFilter);
  filterTrips();
});

$("input[name='filter2']").click(function() {

  filterApplied = $(this).attr('value')

  console.log(filterApplied);
  tripsFilter();
});

  function filterTrips() {

      let filteredArrTrips = [];

      // Filter 1
     
      if (appliedFilter) {
          if (appliedFilter === "special") {
            filteredArrTrips = arrTrips.filter(trip => trip.special == "true");
          } else {
            filteredArrTrips = arrTrips.filter(trip => trip.tripLength == appliedFilter)
          }
        } else {
          filteredArrTrips = arrTrips;
        }

        loadTrips(filteredArrTrips);
      
       };

      //  Filter 2
  function tripsFilter() {

      let filteredArrTrips2 = [];
      if(filterApplied) {
        filteredArrTrips2 = arrTrips.filter(trip => trip.destination == filterApplied)
      }

      loadTrips(filteredArrTrips2)
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
// Remove tickets from table
// ----------------------------------------------------------------

// HRemove ticket from card
$(document).ready(function() {

  // Handle click event on the remove icons
  $(".remove").on("click", function() {

    // Find the closest parent <tr> element and remove it
    $(this).closest("tr").remove();

  });
});


  // Clear the whole table
  function removeAll() {

  // Get the table element by its id
  var table = document.getElementById("tableContent");

  // Remove all the <tbody> elements within the table
  var tbodyElements = table.getElementsByTagName("tbody");
  for (var i = tbodyElements.length - 1; i >= 0; i--) {
    table.removeChild(tbodyElements[i]);
  };
};





// ----------------------------------------------------------------
// When the trips card - purchase button is clicked
// ----------------------------------------------------------------

// Local Storage
localStorage.setItem('tripName', JSON.stringify(arrTrips));

const newArrTrips = JSON.parse(localStorage.getItem('trips'));


checkOut = () => {

  let data = JSON.stringify(subOrder)
  localStorage.setItem('order', data)
  window.location.href = "../pages/checkoutpage.html";

}


resetReturn = () => {
  localStorage.removeItem('order');
  window.location.href = '../index.html'
}



// ----------------------------------------------------------------
// Success Message
// ----------------------------------------------------------------

function showAlert() {
  alert("Pink-Tastic! We cannot wait to have your onboard for a magical experience! Your tickets are successfully purchased!");
};