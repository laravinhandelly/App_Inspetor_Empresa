/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/moovi/teste/zui5empresainspetorv2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
