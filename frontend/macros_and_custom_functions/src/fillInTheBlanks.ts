/**
 * Fills in missing title and author data using Open Library API
 * calls.
 */
function fillInTheBlanks() {
	// Constants that identify the index of the title, author,
	// and ISBN columns (in the 2D bookValues array below).
	var TITLE_COLUMN = 0;
	var AUTHOR_COLUMN = 1;
	var ISBN_COLUMN = 2;

	// Get the existing book information in the active sheet. The data
	// is placed into a 2D array.
	var dataRange = SpreadsheetApp.getActiveSpreadsheet()
		.getDataRange();
	var bookValues = dataRange.getValues();

	// Examine each row of data (excluding the header row).
	// If the ISBN is present, and a title or author is missing,
	// use the fetchBookData_(ISBN) method to retrieve the
	// missing data from the Open Library API. Fill in the
	// missing titles or authors when they're found.
	for(var row = 1; row < bookValues.length; row++) {
		var isbn = bookValues[row][ISBN_COLUMN];
		var title = bookValues[row][TITLE_COLUMN];
		var author = bookValues[row][AUTHOR_COLUMN];

		if(isbn != "" && (title === "" || author === "") ) {
			// Only call the API if you have an ISBN number and 
			// either the title or author is missing.
			var bookData = fetchBookData_(isbn);

		// Sometimes the API doesn't return the information needed.
		// In those cases, don't attempt to update the row.
		if (!bookData || !bookData.details) {
			continue;
		} 

		// The API might not return a title, so only fill it in
		// if the response has one and if the title is blank in
		// the sheet.
		if(title === "" && bookData.details.title) {
			bookValues[row][TITLE_COLUMN] = bookData.details.title;
		}

		// The API might not return an author, so only fill it in
		// if the response has one and if the author is blank in
		// the sheet.
		if(author === "" && bookData.details.authors
			&& bookData.details.authors[0].name) {
				bookValues[row][AUTHOR_COLUMN] =
					bookData.details.authors[0].name;
			}
		}
	}
	// Insert the updated book data values into the spreadsheet.
	dataRange.setValues(bookValues);
}
