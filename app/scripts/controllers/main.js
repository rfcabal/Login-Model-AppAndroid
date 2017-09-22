'use strict';

/**
 * @ngdoc function
 * @name loginMoodleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the loginMoodleApp
 */
angular.module('loginMoodleApp')
  .controller('MainCtrl', function ($http, $location, $scope, WS) {

  	$scope.login = function() {

  		var username = $scope.username;
  		var password = $scope.password;

  		var data = {
  			username: username,
  			password: password,
  			service: WS.NAME
  		}

  		//console.log(username+' '+password);

  		// Esto despues hay que eliminarlo la request tiene que ser como corresponde
  		var req = WS.GETTOKEN + '?username=' + username + '&password=' + password + '&service=' + WS.NAME;

  		$http.post(req).then( function(response) {

  			//console.log(response.data.token);

  			if(response.data.token) {
  				$.jStorage.set('username', username);
  				$.jStorage.set('password', password);
  				$location.path('/dashboard');
  			} else {
  				alert('Usuario y/o contraseña no válidos');
  			}

  		})
  	}

  });
