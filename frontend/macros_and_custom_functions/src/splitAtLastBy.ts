/** 
 * Reformats title and author columns by splitting the title column
 * at the last instance of the string " by ", if present.
 */
function splitAtLastBy() {
	// Get the active (currently highlighted) range.
	var activeRange = SpreadsheetApp.getActiveRange();
	var titleAuthorRange = activeRange.offset(
		0, 0, activeRange.getHeight(), activeRange.getWidth() + 1
	);

	// Get the current values of the selected title column cells.
	// This is a 2D array.
	var titleAuthorValues = titleAuthorRange.getValues();

	// Update values where " by " substrings are found. Assumes 
	// the presence of a " by " indicates a "title by authors" 
	// pattern.
	for (var row = 0; row < titleAuthorValues.length; row++) {
		var indexOfLastBy =
			titleAuthorValues[row][0].lastIndexOf(" by ");

		if(indexOfLastBy >= 0) {
			// Found a " by ", so split and update the values in
			// the values array.
			var titlesAndAuthors = titleAuthorValues[row][0];

			// Update the title value in the array.
			titleAuthorValues[row][0] =
				titlesAndAuthors.slice(0, indexOfLastBy);

			// Update the author value in the array.
			titleAuthorValues[row][1] =
				titlesAndAuthors.slice(indexOfLastBy + 4);
		}
	}

	// Put the updated values back into the spreadsheet.
	titleAuthorRange.setValues(titleAuthorValues);
}
