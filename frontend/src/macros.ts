/** @OnlyCurrentDoc */

function Header() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(spreadsheet.getCurrentCell().getRow(), 1, 1, 10).activate();
  spreadsheet.getActiveRangeList().setBackground('#afeeee')
  .setFontColor('#ffffff')
  .setFontWeight('bold');
  spreadsheet.getActiveSheet().setFrozenRows(1);
};
