sap.ui.define(['sap/ui/core/UIComponent'],
	function(UIComponent) {
	"use strict";
//new comment added by Shyam
	//Check backward Pull request functionality
	//changed line by Shyam -2 
	
	
	var Component = UIComponent.extend("sap.m.sample.Button.Component", {

		metadata : {
			rootView : "sap.m.sample.Button.Page",
			dependencies : {
				libs : [
					"sap.m"
				]
			},
			config : {
				sample : {
					stretch : true,
					files : [
						"Page.view.xml",
						"Page.controller.js"
					]
				}
			}
		}
	});

	return Component;

});