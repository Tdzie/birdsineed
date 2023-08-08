
    // Replace this with your spreadsheet's URL in the JSON format
const SPREADSHEET_URL = 'https://spreadsheets.google.com/feeds/list/1-N4bTDRRTT2liS2tYaIPCqq490ik_BaR_WtzbxDd8uA/od6/public/values?alt=json';

    // Function to fetch spreadsheet data
    function fetchSpreadsheetData() {
        fetch(SPREADSHEET_URL)
            .then(response => response.json())
            .then(data => {
                // For demonstration purposes, just stringify the data and display it.
                // In a real application, you'd want to process and display this data more thoughtfully.
                document.getElementById('spreadsheetData').innerText = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                console.error('Error fetching spreadsheet data:', error);
                document.getElementById('spreadsheetData').innerText = 'Error fetching data. See console for details.';
            });
    }

    // Fetch data when the page loads
    window.addEventListener('load', fetchSpreadsheetData);