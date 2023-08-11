
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
var mapsLink;
var color;
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


    fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${latForApi}&lng=${lngForApi}&back=7&dist=50&includeProvisional=true&sort=species`, requestOptions)
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
                    birdDiv.style.border = `1px solid black`;
                    birdDiv.style.borderRadius = '8px';
                    birdDiv.style.margin = '10px 0';
                    birdDiv.style.padding = '10px';
                    birdDiv.style.backgroundColor = `${determineColorForDiv(bird.obsDt)}`;
                    birdDiv.style.display = 'flex';
                    birdDiv.style.alignItems = 'stretch';
                    birdDiv.style.justifyContent = 'space-between';

                    let envminX = bird.lng - 0.2;
                    let envmaxX = bird.lng + 0.2;
                    let envminY = bird.lat - 0.2;
                    let envmaxY = bird.lat + 0.2;

                    if(activeUser == 'Cappa' || activeUser == 'Timothy'){
                        mapsLink = `http://maps.apple.com/?daddr=${bird.lat},${bird.lng}&dirflg=d`;
                    } else {
                        mapsLink = `https://www.google.com/maps/dir/current+location/${bird.lat},${bird.lng}?dir_action=navigate`;
                    }

                    let linkToEbird = `https://ebird.org/checklist/${bird.subId}`;
                    let customLink = `https://ebird.org/map/${bird.speciesCode}?neg=true&env.minX=${envminX}&env.minY=${envminY}&env.maxX=${envmaxX}&env.maxY=${envmaxY}&zh=true&gp=true&ev=Z&excludeExX=false&excludeExAll=false&mr=1-12&bmo=1&emo=12&yr=cur&byr=2023&eyr=2023#more-map-options`;
                    color = determineColor(bird.obsDt);
                    // Populate the div with the bird data
                    birdDiv.innerHTML = `
                        <div style="flex: 1; display: flex; align-items: center;">
                            <div>
                                <strong>Name:</strong> ${bird.comName}<br>
                                <strong>Location:</strong> ${bird.locName}<br>
                                <strong>Count:</strong> ${bird.howMany}<br>
                                <strong>Date:</strong> ${bird.obsDt}
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; align-items: stretch; gap: 5px;">
                            <button style="flex: 1;" onclick="window.open('${mapsLink}', '_blank')">Directions</button>
                            <button style="flex: 1;" onclick="window.open('${linkToEbird}', '_blank')">List on EBird</button>
                            <button style="flex: 1;" onclick="window.open('${customLink}', '_blank')">View all Ebird</button>
                        </div>
                    `;



                    let markerUrl = 'http://maps.google.com/mapfiles/ms/icons/' + color + '-dot.png';

                    // Append the bird div to the dataDisplay element
                    document.getElementById('dataDisplay').appendChild(birdDiv);

                    const marker = new google.maps.Marker({
                        position: { lat: bird.lat, lng: bird.lng },
                        map: map,
                        title: bird.comName,
                        icon: {
                            url: markerUrl
                        }
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


function determineColor(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset hours, minutes, seconds, and milliseconds

    const inputDate = new Date(dateString);
    inputDate.setHours(0, 0, 0, 0);  // Reset hours, minutes, seconds, and milliseconds

    const diffTime = today - inputDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);  // Convert time difference to days

    if (diffDays <= 1) {
        return 'red';
    } else if (diffDays <= 3) {
        return 'yellow';
    } else {
        return 'blue';
    }
}


function determineColorForDiv(dateString) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Reset hours, minutes, seconds, and milliseconds

    const inputDate = new Date(dateString);
    inputDate.setHours(0, 0, 0, 0);  // Reset hours, minutes, seconds, and milliseconds

    const diffTime = today - inputDate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);  // Convert time difference to days

    if (diffDays <= 1) {
        return '#d4622b';
    } else if (diffDays <= 3) {
        return '#d2f859';
    } else {
        return '#1fabe0';
    }
}

