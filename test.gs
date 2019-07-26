function myFunction() {
  // получение текущего листа
  var spreadsheet_link = SpreadsheetApp.getActiveSpreadsheet();
  var sheetOption = spreadsheet_link.getSheetByName("Options");
  var sheetOptionValues = sheetOption.getRange("A2:A").getValues();
  var sheetResult = spreadsheet_link.getSheetByName("Подсчет цен");
  // var sheerResultValues = sheetResult.getDataRange().getValues();
  var cellSheetResult;
  // делаем for от второй строки, в первой заголовок, ограничение 1000 слов
  var countResultRow = 2;
  for (var key in sheetOptionValues) {
    cellSheetResult = sheetResult.getRange(1, countResultRow);
    countResultRow++;
    // когда доходим до пустой строки, то выходим
    if (sheetOptionValues[key][0] == "") {
      break
    }
    cellSheetResult.setValue(sheetOptionValues[key][0]);
    // sendWs(sheetOptionValues[key][0]);
    Logger.log(sheetOptionValues[key][0]);
  }
}

function testCopySheet() {
  var spreadsheet_link = SpreadsheetApp.getActiveSpreadsheet();
  var sheetOption = spreadsheet_link.getSheetByName("Options");
  sheetOption = sheetOption.getRange(1, 1, sheetOption.getMaxRows(), sheetOption.getMaxColumns());
  var sheetCalc = spreadsheet_link.getSheetByName("Подсчет цен").getRange(1, 1);
  sheetOption.copyTo(sheetCalc, {contentsOnly:true});
}

// для кэша
// поиск в столбце
function getSheet() {
  var spreadsheet_link = SpreadsheetApp.getActiveSpreadsheet();
  var sheetOption = spreadsheet_link.getSheetByName("Подсчет цен");
  var colomnValues = sheetOption.getRange(2, 1, sheetOption.getLastRow()).getValues();
  Logger.log(colomnValues);
  var searchResult = colomnValues.findIndex("столы");
  Logger.log(searchResult);
}


Array.prototype.findIndex = function(search){
  if(search == "") return false;
  for (var i=0; i<this.length; i++)
    // к результату можно прибавить 2, т.к. тут идет нумерация с 0 и ещё - первая строка - заголовок
    if (this[i] == search) return i;

  return -1;
};
// поиск в столбце end