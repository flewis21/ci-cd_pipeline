function renameSpreadsheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet();
	mySS.rename("Define Sipoc and create value stream")
}

function duplicateAndOrganizeActiveSheet() {
	var mySS = spreadsheetApp.getActiveSpreadsheet();
	var duplicateSheet = mySS.duplicateActiveSheet();
}
