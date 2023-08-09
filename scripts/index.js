const SPREADSHEET_URL = 'https://script.google.com/macros/s/AKfycbxdvaBuBfRlwScEL1YLe_EUB8YzEMmkz_aaky7S6DPbT3Y_5-hI_KSL2OWcerfhAIEx/exec';

let database = [];

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

function fetchEBirdData() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", eBirdApiToken);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const lat = `36.07`;
    const lng = `-115.09`;

    fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${lat}&lng=${lng}&back=1&dist=50&includeProvisional=true&sort=species`, requestOptions)
        .then(response => response.json())
        .then(eBirdData => {
            let newBirdsForProcessing = [];

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
                }
            });

            console.log(newBirdsForProcessing);
            //document.getElementById('spreadsheetData').innerText = JSON.stringify(eBirdData, null, 2);
            document.getElementById('dataDisplay').innerText = JSON.stringify(newBirdsForProcessing, null, 2);
        })
        .catch(error => {
            console.log('error', error);
            document.getElementById('dataDisplay').innerText = 'Error fetching eBird data. See console for details.';
        });
}

// Fetch spreadsheet data when the page loads
window.addEventListener('load', fetchSpreadsheetData);
