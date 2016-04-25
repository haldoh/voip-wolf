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
		port: 5000,
		jwtSecret: 'localJwtSecret',
		morgan: 'REQ :remote-addr - :remote-user  ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time'
	},

	// Heroku configuration parameters
	heroku: {
		mode: 'heroku',
		endpoint: endpoint.heroku,
		port: process.env.PORT,
		jwtSecret: process.env.JWT_SECRET,
		morgan: 'REQ :remote-addr - :remote-user  ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time'
	}
};

// Return the correct configuration parameters based on environment
module.exports = process.env.NODE_ENV ? config[process.env.NODE_ENV] : config.local;