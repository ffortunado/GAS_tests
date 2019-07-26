function calculate() {
  var spreadsheet_link = SpreadsheetApp.getActiveSpreadsheet();
  var sheetOption = spreadsheet_link.getSheetByName("Options");
  sheetOption = sheetOption.getRange(1, 1, sheetOption.getLastRow());
  var sheetCalc = spreadsheet_link.getSheetByName("Подсчет цен").getRange(1, 1);
  sheetOption.copyTo(sheetCalc, {contentsOnly:true});
}