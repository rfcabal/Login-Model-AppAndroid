'use strict';

/**
 * @ngdoc function
 * @name moodleAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moodleAppApp
 */
angular.module('loginMoodleApp')

  .constant('WS', {
  	
  		NAME: 'moodle_mobile_app',
  		LOGIN: 'https://www.semantic.cl/learning/login/index.php',
	  	GETTOKEN: "https://www.semantic.cl/learning/login/token.php",
	  	URL: "https://www.semantic.cl/learning/webservice/rest/server.php"

	  })