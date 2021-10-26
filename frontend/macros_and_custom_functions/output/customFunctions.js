// Compiled using ci-cd_pipeline 1.0.0 (TypeScript 4.4.4)
/**
 * Converts US dollars to Swiss francs.
 *
 * @param {number} dollars The total number of dollars.
 * @return {number} swissFrancs The converted total of Swiss francs.
 * @customFunction
 */
function USDTOCHF(dollars) {
  const swissFrancs = dollars * 0.99;
  return swissFrancs;
}
