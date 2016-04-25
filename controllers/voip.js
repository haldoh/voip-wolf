/*
 * Copyright (C) 2016 Aldo Ambrosioni
 * ambrosioni.ict@gmail.com
 * 
 * This file is part of the voip-wolf project
 */

/*jslint node:true*/
/*jslint nomen:true*/
"use strict";

// Requires
var twilio = require('twilio');

var config = require('../config/config');
var error = require('../config/error');
 

/** Return a capability token to do and receive VoIP calls
 */
module.exports.getCallToken = function(req, res, next) {

	// Create an object which will generate a capability token
	// Replace these two arguments with your own account SID
	// and auth token:
	var capability = new twilio.Capability(
		config.twilio.account_sid,
		config.twilio.auth_token
	);

	// Give the capability generator permission to accept incoming
	// calls to the ID "kevin"
	capability.allowClientIncoming('kevin');

	// Give the capability generator permission to make outbound calls,
	// Using the following TwiML app to request call handling instructions:
	capability.allowClientOutgoing('AP625177fde78b83e763b0a9ecfd3af88f');

	// Return the token
	return res.status(200).send({
		token: capability.generate()
	});
};