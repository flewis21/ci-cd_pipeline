/**
 * Converts US dollars to Swiss francs.
 *
 * @param {number} dollars The total number of dollars.
 * @param {number} swissFrancs The converted total of Swiss francs.
 * @customFunction
 */
function USDTOCHF(dollars) {
	var swissFrancs = dollars * .99;
	return swissFrancs;
}
