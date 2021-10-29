/**
 * Wrapper function that passes arguments to create a
 * resource sheet describing the characters from Episode IV.
 */
function createPeopleSheetIV() {
	createResourceSheet_('');
}

/**
 * Wrapper function that passes arguments to create a
 * resource sheet describing the characters from Episode V.
 */
function createPeopleSheetV() {
	createResourceSheet_('');
}

/**
 * Wrapper function that passess arguments to create a
 * resource sheet describing the characters from Episode VI.
 */
function createPeopleSheetVI(){
	createResourceSheet_('');
}

/**
 * Creates a formated sheet filled with user specified
 * information from the Star Wars API. If the sheet with
 * this data exists, the sheet is overwritten witn the API
 * information.
 *
 * @param {string} resourceType The type of resource.
 * @param {number} idNumber The identification number of the film.
 * @param {number} episodeNumber The Star Wars film episode number.
 * 		This is only used in the sheet name.
 */
function createResourceSheet_(
	resourceType, idNumber, episodeNumber) {

		// Fetch the basic film data from the API.
		var filmData = fetchApiResourceOgject_("" + idNumber);

		// Extract the API URLs for each resource so the code can
		// call the API to get more data about each individually.
		var resourceUrls = filmData[resourceType];

		// Fetch each resource from the API individually and push
		// them into a new object list.
		var resourceDataList = [];
		for(var i = 0; i < resourceUrls.length; i++) {
			resourceDataList.push(
				fetchApiResourceObject_(resourceUrls[i])
			);
		}

	// Get the keys used to reference each part of the data within
	// the resources. The keys are assumed to be identical for
	// each object since they're all the same resource type.
	var resourceObjectKeys = Object.keys(resourceDataList[0]);

	// Create the sheet with the appropriate name. It
	// automatically becomes the active sheet when it's created.
	var resourceSheet = createNewSheet_("" + episodeNumber + " " + resourceType);

	// Add the API data to the new sheet, using each object
	// key as a column header.
	fillSheetWithData_(resourceSheet, resourceObjectKeys, resourceDataList);

	// Format the new sheet using the same styles the
	// 'Quick Formats' menu items apply. These methods all
	// act on the active sheet, which is the one just created.
	formatRowHeader();
	formatColumnHeader();
	formatDataset();

}	

/**
 * Helper function that retrieves a JSON object containing a 
 * response from a public API.
 *
 * @param {string} url The URL of the API object being fetched.
 * @return {object} resourceObject the JSON object fetched
 * 		from the URL request to the API.
 */
function fetchAPI
