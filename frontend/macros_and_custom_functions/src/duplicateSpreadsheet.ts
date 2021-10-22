function duplicateAndOrganizeActiveSheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet();
	var activeSheet = SpreadsheetApp.getActiveSheet();
	var duplicateSheet = mySS.duplicateActiveSheet();

	// Change the name of the new sheet.
	duplicateSheet.setName('Sheet_' + duplicateSheet.getSheetId());

	// Format the new sheet.
	duplicateSheet.autoResizeColumns(1, 5);
	duplicateSheet.setFrozenRows(2);
}
