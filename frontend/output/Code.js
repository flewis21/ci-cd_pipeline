'use strict'
function doGet (e) {
  const params = JSON.stringify(e)
  return HtmlService.createHtmlOutput(params)
}
