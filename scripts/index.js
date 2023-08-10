
let map;
let infoWindow;
let centerChangeTimeout;
const eBirdApiToken = '377m29pfd648';
var lat = 42.0501;
var lng = -78.8801;
var latForApi = parseFloat(lat.toFixed(2));
var lngForApi = parseFloat(lng.toFixed(2));
var activeUser = 'Cappa';
let markers = [];



// Fetch spreadsheet data when the page loads
window.addEventListener('load', fetchEBirdData());

// Fetch eBird data when the page loads
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
            let activeUserBirds = birdsNeeded[activeUser];
            console.log(eBirdData);

            eBirdData.forEach(bird => {
                let found = false;
                // Convert both bird names to lowercase and trim any whitespace for accurate comparison
                let birdSciNameTrimmedLowered = bird.sciName.trim().toLowerCase();
                let activeUserBirdsTrimmedLowered = activeUserBirds.map(name => name.trim().toLowerCase());

                if (activeUserBirdsTrimmedLowered.includes(birdSciNameTrimmedLowered)) {
                    found = true;
                }

                if (!found) {
                    const birdDiv = document.createElement('div');
                    birdDiv.style.border = '1px solid black'; // Add a border for visual separation
                    birdDiv.style.borderRadius = '8px'; // Rounded corners
                    birdDiv.style.margin = '10px 0'; // Add some spacing between each div
                    birdDiv.style.padding = '10px'; // Add some padding for aesthetics
                    birdDiv.style.backgroundColor = '#B0E57C';  // Semi-light green

                    let mapsLink = `https://www.google.com/maps/dir/current+location/${bird.lat},${bird.lng}?dir_action=navigate`;

                    // Populate the div with the bird data
                    birdDiv.innerHTML = `
                        <a href="${mapsLink}" target="_blank" style="text-decoration: none; color: inherit;">
                            <strong>Name:</strong> ${bird.comName}<br>
                            <strong>Location:</strong> ${bird.locName}<br>
                            <strong>Count:</strong> ${bird.howMany}<br>
                            <strong>Date:</strong> ${bird.obsDt}
                        </a>
                    `;

                    // Append the bird div to the dataDisplay element
                    document.getElementById('dataDisplay').appendChild(birdDiv);

                    const marker = new google.maps.Marker({
                        position: { lat: bird.lat, lng: bird.lng },
                        map: map,
                        title: bird.comName
                    });
                    markers.push(marker);

                    marker.addListener('click', function () {
                        infoWindow.setContent(`<div><strong>${bird.comName}</strong><br>${bird.sciName}</div>`);
                        infoWindow.open(map, marker);
                    });
                    
                }
            });
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('dataDisplay').innerText = 'Error fetching eBird data. See console for details.';
        });
    }




function initMap() {
    var location = { lat: lat, lng: lng }; // Replace with your coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
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


document.getElementById('userSelection').addEventListener('change', function (event) {
    if (event.target.name === 'user') {
        activeUser = event.target.value;
        document.getElementById('dataDisplay').innerText = "";
        clearMarkers();
        fetchEBirdData();
        console.log(`Active user set to: ${activeUser}`);
    }
});


function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}






