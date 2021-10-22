function renameSpreadsheet() {
	var mySS = SpreadsheetApp.getActiveSpreadsheet();
	mySS.rename("Define Sipoc and create value stream")
}

function duplicateAndOrganizeActiveSheet() {
	var mySS = SpreadsheetApp.getActive().getSheetByName('Start');
		mySS.activate();
	var duplicatesheet = mySS.duplicateActiveSheet();
}
