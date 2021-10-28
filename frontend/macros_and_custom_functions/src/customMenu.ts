/**
 * A special function that runs when the spreadsheet is first
 * opened or reloaded. onOpen() is used to add custom menu
 * iteems to the spreadsheet.
 */
function onOpen() {
  // Get the spreadsheet's user-interface object.
  var ui = SpreadsheetApp.getUi();

  // Create and add a named menu and its items to the menu bar.
  ui.createMenu('')
    .addItem('', '')
    .addSeparator()
    .addItem('', '')
    .addItem('', '')
    .addSeparator()
    .addItem('', '')
    .addSubMenu(ui.createMenu('')
    			.addItem('')
    			.addItem('')
    			.addItem('')
    			)
    .addToUi();
}
