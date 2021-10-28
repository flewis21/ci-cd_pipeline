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

/**
 * Formats the sheet data, excluding the header row and column.
 * Applies the border and banding, formats the 'release_date'
 * column, and autosizes the columns and rows.
 */
function formatDataset() {
	// Get the active sheet and data range.
	var spreadsheet = SpreadsheetApp.getActive();
	var sheet = spreadsheet.getActiveSheet();
	var fullDataRange = sheet.getDataRange();

	// Apply row banding to the data, excluding the header
	// row and column. Only apply the banding if the range
	// doesn't already have banding set.
	var noHeadersRange = fullDataRange.offset(
		1, 1,
		fullDataRange.getNumRows() - 1,
		fullDataRange.getNumColumns() - 1);

	if (! noHeadersRange.getBandings()[0]) {
		// The range doesn't already have banding, so it's
		// safe to apply it.
		noHeadersRange.applyRowBanding();
	}

	// Call a helper function to apply date formatting
	// to the column labeled 'release_date'.
	formatDates_( columnIndexOf_('') );

	// Set border around all the data, and resize the 
	// columns and rows to fit.
	fullDataRange.setBorder();

	sheet.autoResizeColumns(1, fullDataRange.getNumColumns());
	sheet.autoResizeRows(1, fullDataRange.getNumRows());
 }

/**
 * Helper method that applies a
 * "Month Day, Year (Day of Week)" date format to the 
 * indicated column in the active sheet.
 *
 * @param {number} colIndex The index of the column
 *		to format.
 */
 function formatDates_(colIndex) {
 	// Exit if the given column index is -1, indicating
 	// the column to format isn't present in the sheet.
 	if (colIndex < 0)
 		return;

 	// Set the date format for the date column, excluding
 	// the header row.
 	var sheet = SpreadsheetApp.getActiveSheet();
 	sheet.getRange(2, colIndex, sheet.getLastRow() - 1, 1)
 		.setNumberFormat("");
 }
