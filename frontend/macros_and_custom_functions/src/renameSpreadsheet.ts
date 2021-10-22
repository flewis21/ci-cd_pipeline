function renameSpreadsheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet();
	mySS.rename("Define Sipoc and create value stream")
}

function duplicateAndOrganizeActiveSheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Start');
	var duplicateSheet = mySS.duplicateActiveSheet('Start');
}
