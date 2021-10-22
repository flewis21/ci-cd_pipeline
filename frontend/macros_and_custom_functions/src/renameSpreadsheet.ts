function renameSpreadsheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet();
	mySS.rename("Define Sipoc and create value stream")
}

function duplicateAndOrganizeActiveSheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet();
	var sheet = mySS.getSheets()[0];
	var duplicateSheet = mySS.duplicateActiveSheet(sheet[]);
}
