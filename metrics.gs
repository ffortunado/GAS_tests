var headersForAPI = {
  "X-API-USER": "sitereport",
  "X-API-PASS": "HufpetIts651"
};

var optionsForAPI = {
  'method' : 'get',
  'headers': headersForAPI
};

var apiURL = "http://api.element.ru:8888";

// begin ф-ии вордстатс
function checkCacheWs(kw, name) {
  return 0;
}

function ws(cell) {
  // ws
  var response = UrlFetchApp.fetch(apiURL + "/ws/?phrases=" + cell + "&accurate=0", optionsForAPI);
  var dataJson = JSON.parse(response);
  while (true) {
    if (dataJson[0].code == 102) {
      Utilities.sleep(5000);
      response = UrlFetchApp.fetch(apiURL + "/ws/?phrases=" + cell + "&accurate=0", optionsForAPI);
      dataJson = JSON.parse(response);
    } else {
      break;
    }
  }
  return dataJson[0].ws
}

function wsAccurate(cell) {
  // ws с точным вхождением
  var response = UrlFetchApp.fetch(apiURL + "/ws/?phrases=" + cell + '&accurate=1', optionsForAPI);
  var dataJson = JSON.parse(response);
  while (true) {
    if (dataJson[0].code == 102) {
      Utilities.sleep(5000);
      response = UrlFetchApp.fetch(apiURL + "/ws/?phrases=" + cell + '&accurate=1', optionsForAPI);
      dataJson = JSON.parse(response);
    } else {
      break;
    }
  }
  return dataJson[0].ws
}
// end ф-ии вордстатс