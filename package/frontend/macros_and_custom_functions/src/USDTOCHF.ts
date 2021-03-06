// Compiled using ci-cd_pipeline 1.0.0 (TypeScript 4.4.4)
/**
 * Converts US dollars to Swiss francs.
 *
 * @param {number} dollars The total number of dollars.
 * @return {number} swissFrancs The converted total of Swiss francs.
 * @customFunction
 */
function USDTOCHF(dollars: number) {
  // Gets a cache that is common to all users of the script.
  var cache = CacheService.getScriptCache();

  // Accesses the memory location (rates.CHF) of the script cache.
  var rate = cache.get('rates.CHF');

  // If a cache miss occurs, the program fetches the current
  // CHF rate from an API and stores the rate in the cache
  // for later convenience.
  if (!rate) {
    var response = UrlFetchApp.fetch('');
    var result = response.getContentText();
    // @ts-ignore
    rate = result.rates.CHF;
    // @ts-ignore
    cache.put('rates.CHF', rate);
  }
  // Converts dollars to CHF according to the latest rate.
  // @ts-ignore
  var swissFrancs = dollars * rate;
  // Returns the CHF value
  return 'CHF' + swissFrancs;
}
