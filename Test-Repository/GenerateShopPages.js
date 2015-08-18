/**
 * Module Description
 * This scheduled script runs daily to create HTML pages for the Shop.
 * Version    Date            Author           Remarks
 * 1.00       12 Sep 2013     athira
 *
 */

/**
 * @param {String}
 *            type Context Types: scheduled, ondemand, userinterface, aborted,
 *            skipped
 * @returns {Void}
 */
function scheduled(type) {

	var content = {};
	content['Accept'] = 'application/soap+xml,application/json, application/dime, multipart/related, text/*';
	content['Content-Type'] = 'application/x-www-form-urlencoded';

	// Generate Shop Main page
	try {
		var shopMainUrl = nlapiResolveURL('SUITELET',
				'customscript_generate_shop_main',
				'customdeploy_generate_shop_main', true);
		var shopMainResult = nlapiRequestURL(shopMainUrl, null, content);
	} catch (e) {
		if (e instanceof nlobjError) {
			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop Main HTML.',
					e.getCode() + '\n' + e.getDetails());

		} else {

			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop Main HTML.',
					e.toString());

		}
	}
	
	//Generate the Shop Category Pages. Add exception handling for each individual category page
	
	//New Releases
	
	try {
		var shopCategoryUrl = nlapiResolveURL('SUITELET',
				'customscript_generate_shop_category',
				'customdeploy_generate_shop_category', true);
		shopCategoryUrl += '&category='+534834;
		var shopCategoryResult = nlapiRequestURL(shopCategoryUrl, null, content);
	} catch (e) {
		if (e instanceof nlobjError) {
			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category new releases HTML.',
					e.getCode() + '\n' + e.getDetails());

		} else {

			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category new releases HTML.',
					e.toString());

		}
	}
	
	//Pre orders
	try {
		var shopCategoryUrl = nlapiResolveURL('SUITELET',
				'customscript_generate_shop_category',
				'customdeploy_generate_shop_category', true);
		shopCategoryUrl += '&category='+534836;
		var shopCategoryResult = nlapiRequestURL(shopCategoryUrl, null, content);
	} catch (e) {
		if (e instanceof nlobjError) {
			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category pre orders HTML.',
					e.getCode() + '\n' + e.getDetails());

		} else {

			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category pre orders HTML.',
					e.toString());

		}
	}
	
	//Best Sellers
	try {
		var shopCategoryUrl = nlapiResolveURL('SUITELET',
				'customscript_generate_shop_category',
				'customdeploy_generate_shop_category', true);
		shopCategoryUrl += '&category='+534835;
		var shopCategoryResult = nlapiRequestURL(shopCategoryUrl, null, content);
	} catch (e) {
		if (e instanceof nlobjError) {
			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category best sellers HTML.',
					e.getCode() + '\n' + e.getDetails());

		} else {

			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category best sellers HTML.',
					e.toString());

		}
	}
	
	//Deals
	try {
		var shopCategoryUrl = nlapiResolveURL('SUITELET',
				'customscript_generate_shop_category',
				'customdeploy_generate_shop_category', true);
		shopCategoryUrl += '&category='+534842;
		var shopCategoryResult = nlapiRequestURL(shopCategoryUrl, null, content);
	} catch (e) {
		if (e instanceof nlobjError) {
			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category deals HTML.',
					e.getCode() + '\n' + e.getDetails());

		} else {

			nlapiLogExecution(
					'ERROR',
					'An exception occurred while generating the Shop category deals HTML.',
					e.toString());

		}
	}
	
	//Staff Picks
	/*try {
		var shopCategoryUrl = nlapiResolveURL('SUITELET',
				'customscript_generate_shop_category',
				'customdeploy_generate_shop_category', true);
		shopCategoryUrl += '&category='+534837;
		var shopCategoryResult = nlapiRequestURL(shopCategoryUrl, null, content);
	} catch (e) {
		if (e instanceof nlobjError) {
			nlapiLogExecution(
					'debug',
					'An exception occurred while generating the Shop category staff picks HTML.',
					e.getCode() + '\n' + e.getDetails());

		} else {

			nlapiLogExecution(
					'debug',
					'An exception occurred while generating the Shop category staff picks HTML.',
					e.toString());

		}
	}*/
	

}
