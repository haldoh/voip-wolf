/*
 * Copyright (C) 2016 Aldo Ambrosioni
 * ambrosioni.ict@gmail.com
 * 
 * This file is part of the voip-wolf project
 */

/*jslint node:true*/
/*jslint nomen:true*/
"use strict";

// Print a default message
module.exports.defaultMessage = function (req, res) {
	res.status(200).send('voip-wolf - Calls and messages layer for Wolf\'s applications.');
};