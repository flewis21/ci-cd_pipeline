/**
 * Creates a template book list.
 */
function copyBook() {
  // Gets the active sheet.
  var sheet = SpreadsheetApp.getActiveSheet();

  // Gets a different spreadsheet from Drive using
  // the spreadsheet's ID.
  var bookSS = SpreadsheetApp.openById('');

  // Gets the sheet, data range, and values of the
  // spreadsheet stored in bookSS.
  var bookSheet = bookSS.getSheetByName('');
  // @ts-ignore
  var bookRange = bookSheet.getDataRange();
  var bookListValues = bookRange.getValues();

  // Add those values to the active sheet in the current
  // spreadsheet. This overwrites any values already there.
  sheet.getRange(1, 1, bookRange.getHeight(), bookRange.getWidth()).setValues(bookListValues);

  // Rename the destination sheet and resize the data
  // columns for easier reading.
  sheet.setName('');
  sheet.autoResizeColumns(1, 3);
}
