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
var router = require('express').Router();

var auth = require('../controllers/auth');
var voip = require('../controllers/voip');

router.route('/call_token')
	//GET - Return a token to do and receive VoIP calls
	.get(auth.checkApiToken, auth.checkUserToken, voip.getCallToken);

module.exports = router;