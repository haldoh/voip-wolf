/*
 * Copyright (C) 2016 Aldo Ambrosioni
 * ambrosioni.ict@gmail.com
 * 
 * This file is part of the voip-wolf project
 */

/*jslint node:true*/
/*jslint nomen:true*/
"use strict";

var endpoint = {
	local: 'http://192.168.0.8:5000',
	heroku: 'https://voip-wolf.herokuapp.com'
};

// Configuration object
var config = {

	// Local configuration parameters
	local: {
		mode: 'local',
		endpoint: endpoint.local,
		port: 3200,
		jwtSecret: 'localJwtSecret',
		token: 'localhost_web_token',
		morgan: 'REQ :remote-addr - :remote-user  ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time',
		twilio: {
			account_sid: process.env.TWILIO_ACCOUNT_SID,
			auth_token: process.env.TWILIO_AUTH_TOKEN
		}
	},

	// Heroku configuration parameters
	heroku: {
		mode: 'heroku',
		endpoint: endpoint.heroku,
		port: process.env.PORT,
		jwtSecret: process.env.JWT_SECRET,
		token: process.env.VOIP_TOKEN,
		morgan: 'REQ :remote-addr - :remote-user  ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time',
		twilio: {
			account_sid: process.env.TWILIO_ACCOUNT_SID,
			auth_token: process.env.TWILIO_AUTH_TOKEN
		}
	}
};

// Return the correct configuration parameters based on environment
module.exports = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config.local;