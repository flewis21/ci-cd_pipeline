/**
	* A special function that runs when the spreadsheet is first
	* opened or reloaded. onOpen() is used to add custom menu
	* iteems to the spreadsheet.
	*/
function onOpen() {
	var ui = SpreadsheetApp.getUi();
	ui.createMenu('Book-list')
	.addItem('Load Book-list', 'loadBooklist')
	.addToUi();
}
