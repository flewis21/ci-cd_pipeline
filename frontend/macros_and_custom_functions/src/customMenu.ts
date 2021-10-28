/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is used to add custom menu
 * iteems to the spreadsheet.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('')
    .addItem('', '')
    .addSeparator()
    .addItem('', '')
    .addItem('', '')
    .addSeparator()
    .addItem('', '')
    .addToUi();
}
