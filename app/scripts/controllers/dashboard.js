'use strict';

/**
 * @ngdoc function
 * @name loginMoodleApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the loginMoodleApp
 */
angular.module('loginMoodleApp')
  .controller('DashboardCtrl', function ($scope, WS, $sce, $http) {

  	$scope.loginurl = $sce.trustAsResourceUrl(WS.LOGIN);

  	$scope.usernameMoodle = $.jStorage.get('username');
  	$scope.passwordMoodle = $.jStorage.get('password');

  	//console.log($scope.loginurl);
  	//console.log($scope.usernameMoodle+' '+$scope.passwordMoodle);

  	document.addEventListener("deviceready", onDeviceReady, false);

	function onDeviceReady() {

		var pageContent = '<html><head></head><body><form id="loginForm" action="'+$scope.loginurl+'" method="post">' +
		'<input type="hidden" name="username" value="' + $scope.usernameMoodle + '">' +
		'<input type="hidden" name="password" value="' + $scope.passwordMoodle + '">' +
		'</form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>';
		var pageContentUrl = 'data:text/html;base64,' + btoa(pageContent);

	   $scope.login = function() {

	   	window.cordova.InAppBrowser.open(
		    pageContentUrl ,
		    "_blank",
		    "hidden=no,location=no,clearsessioncache=yes,clearcache=yes"
		);

	   	/*var options = {
        username: $scope.usernameMoodle,
        password: $scope.passwordMoodle
		};

	    var script = 'var form = document.createElement("form");';
	     script += 'var url = "https://www.semantic.cl/learning/login/index.php;"';
	     script += 'form.method="post"';
	     script += 'form.setAttribute("action",url);';
	    for (var data in options) {
	      script += 'var hiddenField = document.createElement("input");';
	      script += 'hiddenField.setAttribute("type", "hidden");';
	      script += 'hiddenField.setAttribute("name","' + data +'");';
	      script += 'hiddenField.setAttribute("value","' + options[data] + '");';
	      script += 'form.appendChild(hiddenField);';
	    }
	    script += 'document.body.appendChild(form)';
		script += 'form.submit();';

		var ref = cordova.InAppBrowser.open($scope.loginurl, '_blank', 'location=yes');
		ref.addEventListener('loadstop', onLoadStopFunction);

		function onLoadStopFunction(params) {
		   ref.executeScript({ code: script }, executeScriptCallBack);
		}

		function executeScriptCallBack(params) {

		    if (params[0] == null) {

		        //error message
		        console.log('Error en login!')
		    }

		}*/

	    	
	    }

	    

	    
	    //$scope.loginurl = cordova.InAppBrowser.open(encodeURI(WS.LOGIN), '_system', 'location=yes');
	    //$scope.loginurl = cordova.InAppBrowser.open(WS.LOGIN, '_blank', 'location=yes');
	    //$scope.loginurl.addEventListener('loadstart', function(event) { alert(event.url); });

	}

	/*$http.post(WS.LOGIN,{
		username: $scope.usernameMoodle,
		password: $scope.passwordMoodle
	}).then( function(response) {
		console.log(response);
	}, function(error) {
		console.log(error);
	})*/

    
  });
