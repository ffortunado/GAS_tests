function onOpen() {
  SpreadsheetApp.getUi().createAddonMenu()
      .addItem('Translate', 'openSidebar')
      .addToUi();
  Logger.log("fdjasfkjasdfkl")
}

function openSidebar() {
  // отрисовка боковой панели
  var html = HtmlService.createTemplateFromFile('right_sidebar')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle('Translate example')
      .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}

