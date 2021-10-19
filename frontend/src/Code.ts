function doGet(e) {
	var params = JSONStringify(e);
	return HtmlService.createHtmlOutput(params);
}
