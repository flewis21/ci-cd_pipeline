function doGet(e) {
	var params = JSON.Stringify(e);
	return HtmlService.createHtmlOutput(params);
}
