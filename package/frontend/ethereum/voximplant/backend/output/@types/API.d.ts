/// <reference types="google-apps-script" />
/**
 * Wrapper function that passes arguments to create a
 * resource sheet describing the characters from Episode IV.
 */
declare function createPeopleSheetIV(): void;
/**
 * Wrapper function that passes arguments to create a
 * resource sheet describing the characters from Episode V.
 */
declare function createPeopleSheetV(): void;
/**
 * Wrapper function that passes arguments to create a
 * resource sheet describing the characters from Episode VI.
 */
declare function createPeopleSheetVI(): void;
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
declare function createResourceSheet_(resourceType: any, idNumber: number, episodeNumber: string): void;
/**
 * Helper function that retrieves a JSON object containing a
 * response from a public API.
 *
 * @param {string} url The URL of the API object being fetched.
 * @return {object} resourceObject the JSON object fetched
 * 		from the URL request to the API.
 */
declare function fetchApiResourceObject_(url: any): any;
/**
 * Helper function that creates a sheet or returns an existing
 * sheet with the same name.
 *
 * @param {string} name The name of the sheet.
 * @return {object} The created or existing sheet
 *		of the same name. This sheet becomes active.
 */
declare function createNewSheet_(name: string): GoogleAppsScript.Spreadsheet.Sheet;
/**
 * Helper function that adds API data to the sheet.
 * Each object key is used as a column header in the new sheet.
 *
 * @param (object) resourceSheet The sheet object being modified.
 * @param {object} objectKeys The list of keys for the resources.
 * @param {object} resourceDataList The list of API
 * 	 resource objects containing data to add to the sheet.
 */
declare function fillSheetWithData_(resourceSheet: any, objectKeys: any, resourceDataList: any): void;
//# sourceMappingURL=API.d.ts.map
