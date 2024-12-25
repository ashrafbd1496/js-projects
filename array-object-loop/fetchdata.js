function getDataAsJson() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var headers = data.shift(); // Remove header row
    
    var jsonData = [];
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      var obj = {};
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = row[j];
      }
      jsonData.push(obj);
    }
    
    return JSON.stringify(jsonData);
  }

  fetch('https://script.google.com/macros/YOUR_SCRIPT_ID/getDataAsJson')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Use the data in your project
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });