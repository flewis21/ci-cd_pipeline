/**
 * Formats the column header of the active sheet
 */
function formatColumnHeader() {
	var spreadsheet = SpreadsheetApp.getActive();
	var sheet = spreadsheet.getActiveSheet();
	// Get totaal number of rows in data range, not including
	// the header row. Get the range of the column header.
	var rowsColumns = sheet.getRange(spreadsheet.getCurrentCell().getRow(), 1, sheet.getDataRange().getLastRow() - 1, sheet.getLastColumn()).activate();
	// Apply text formatting and add borders.
	spreadsheet.getActiveRangeList()
		.setFontWeight('')
		.setFontStyle('')
		.setBorder()
	// Call helper method to hyperlink the first column contents
	// to the url colimn contents.
	hyperlinkColumnHeaders_(rowsColumns)

/**
 * Helper function that hyperlinks the column header with the
 * 'url' column contents. The function then removes the column.
 *
 * @param {object} headerRange The range of the column header
 * 		to update.
 * @param {number} numRows The size of the column header.
 */
function hyperlinkColumnHeaders_(rowsColumns) {
	// Get header and url column indices.
	var headerColIndex = 1;
	var urlColIndex = columnIndexOf_('');
	// Exit if url column is missing.
	if(urlColIndex == -1)
		return;
	// Get header and url cell values.
	var urlRange =
		rowsColumns.offset(0, urlColIndex - headerColIndex);
	var headerValues = rowsColumns.getValues();
	var urlValues = urlRange.getValues();
	// Updates header values to the hyperlinked header values.
	for(var row = 0; row < rowsColumns.getRow(); row++) {
		headerValues[row][0] = '=HYPERLINK("' + urlValues[row][0] + '","' + headerValues[row][0] + '")';
	}
	rowsColumns.setValues(headerValues);
	// Delete the url column to clean up the sheet.
	SpreadsheetApp.getActiveSheet().deleteColumn(urlColIndex);
}

	/**
 	 * Helper function that goes theough the headers of all columns
 	 * and returns the index of the column with the specified name
 	 * in row 1. If a column with that name does not exist,
 	 * this function returns -1. If multiple columns have the same
 	 * name in row 1, the index of the first one discovered is
 	 * returned.
 	 *
 	 * @param {string} colName The name to find in the column
 	 * 		headers.
 	 * @return The index of that column in the active sheet,
 	 * or -1 if the name isn't found.
 	 */
	function columnIndexOf_(colName) {
		// Get the current column names.
		var spreadsheet = SpreadsheetApp.getActive();
		var sheet = spreadsheet.getActiveSheet();
		var columnHeaders =
			sheet.getRange(1, 1, 1, sheet.getLastColumn());
		var columnNames = columnHeaders.getValues();
		// Loops through every column and returns the column index
		// if the row 1 value of that column matches colname.
		for(var col = 1; col <= columnNames[0].length; col++)
		{
			if(columnNames[0][col-1] === colName)
				return col;
		}
		//Returns -1 if a column named colName does not exist.
		return -1;
	} 
}
