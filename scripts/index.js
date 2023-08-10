const SPREADSHEET_URL = 'https://script.google.com/macros/s/AKfycbxdvaBuBfRlwScEL1YLe_EUB8YzEMmkz_aaky7S6DPbT3Y_5-hI_KSL2OWcerfhAIEx/exec';

let database = [];
let map;

let infoWindow;
let centerChangeTimeout;

// Function to fetch spreadsheet data
function fetchSpreadsheetData() {
    fetch(SPREADSHEET_URL)
        .then(response => response.json())
        .then(data => {
            database = data;  // Store the fetched database data for further processing
            fetchEBirdData();  // Fetch eBird data after we have the database data
           // console.log('Spreadsheet data:', data);
        })
        .catch(error => {
            console.error('Error fetching spreadsheet data:', error);
        });
}

const eBirdApiToken = '377m29pfd648';
    var lat = 42.0501;
    var lng = -78.8801;
    

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            console.log("Latitude:", lat);
            console.log("Longitude:", lng);
    
            // Update your map's center to the user's location
            map.setCenter({ lat: lat, lng: lng });
        }, function(error) {
            console.error("Error obtaining geolocation:", error.message);
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    var latForApi = parseFloat(lat.toFixed(2));
    var lngForApi = parseFloat(lng.toFixed(2));



function fetchEBirdData() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", eBirdApiToken);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };


    fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${latForApi}&lng=${lngForApi}&back=1&dist=50&includeProvisional=true&sort=species`, requestOptions)
        .then(response => response.json())
        .then(eBirdData => {
            let newBirdsForProcessing = [];
            let newBirdsForDisplay = [];

            eBirdData.forEach(bird => {
                let found = false;
                for (let dbEntry of database) {
                    if (bird.sciName === dbEntry[3]) {
                        
                        if (dbEntry[0] === "X" || dbEntry[0] === "x") {
                          found = true;  
                        }
                    }
                }
                if (!found) {
                    newBirdsForProcessing.push(bird);
                    const simplifiedBird = {
                        Name: bird.comName,
                        Location: bird.locName,
                        Count: bird.howMany,
                        Date: bird.obsDt
                    };

                    newBirdsForDisplay.push(simplifiedBird);
                }
            });

            console.log(newBirdsForProcessing);
            
            //document.getElementById('dataDisplay').innerText = JSON.stringify(newBirdsForDisplay, null, 2);
            // ... Your existing code ...

newBirdsForDisplay.forEach(bird => {
    // Create a div for each bird
    const birdDiv = document.createElement('div');
    birdDiv.style.border = '1px solid black'; // Add a border for visual separation
    birdDiv.style.borderRadius = '8px'; // Rounded corners
    birdDiv.style.margin = '10px 0'; // Add some spacing between each div
    birdDiv.style.padding = '10px'; // Add some padding for aesthetics
    birdDiv.style.backgroundColor = '#B0E57C';  // Semi-light green
   

    
    // Populate the div with the bird data
    birdDiv.innerHTML = `
        <strong>Name:</strong> ${bird.Name}<br>
        <strong>Location:</strong> ${bird.Location}<br>
        <strong>Count:</strong> ${bird.Count}<br>
        <strong>Date:</strong> ${bird.Date}
    `;

    // Append the bird div to the dataDisplay element
    document.getElementById('dataDisplay').appendChild(birdDiv);
});


            newBirdsForProcessing.forEach(bird => {
                const marker = new google.maps.Marker({
                position: { lat: bird.lat, lng: bird.lng },
                map: map,
                title: bird.comName
            });

                marker.addListener('click', function () {
                    infoWindow.setContent(`<div><strong>${bird.comName}</strong><br>${bird.sciName}</div>`);
                    infoWindow.open(map, marker);
                });

    });

        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('dataDisplay').innerText = 'Error fetching eBird data. See console for details.';
        });
    }

// Fetch spreadsheet data when the page loads
window.addEventListener('load', fetchSpreadsheetData);


function initMap() {
    var location = { lat: lat, lng: lng }; // Replace with your coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: location
    });

    infoWindow = new google.maps.InfoWindow();
    
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    google.maps.event.addListener(map, 'center_changed', function () {

        if (centerChangeTimeout) {
            clearTimeout(centerChangeTimeout);
        }
        centerChangeTimeout = setTimeout(() => {

            var newCenter = map.getCenter();
            document.getElementById('dataDisplay').innerText = "";
            latForApi = parseFloat(newCenter.lat().toFixed(2));
            lngForApi = parseFloat(newCenter.lng().toFixed(2));
            fetchEBirdData();

        }, 500);

    });


}





