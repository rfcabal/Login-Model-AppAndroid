"use strict";angular.module("loginMoodleApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/dashboard",{templateUrl:"views/dashboard.html",controller:"DashboardCtrl",controllerAs:"dashboard"}).otherwise({redirectTo:"/"})}]),angular.module("loginMoodleApp").constant("WS",{NAME:"moodle_mobile_app",LOGIN:"https://www.semantic.cl/learning/login/index.php",GETTOKEN:"https://www.semantic.cl/learning/login/token.php",URL:"https://www.semantic.cl/learning/webservice/rest/server.php"}),angular.module("loginMoodleApp").controller("MainCtrl",["$http","$location","$scope","WS",function(a,b,c,d){c.login=function(){var e=c.username,f=c.password,g=({username:e,password:f,service:d.NAME},d.GETTOKEN+"?username="+e+"&password="+f+"&service="+d.NAME);a.post(g).then(function(a){a.data.token?($.jStorage.set("username",e),$.jStorage.set("password",f),b.path("/dashboard")):alert("Usuario y/o contraseña no válidos")})}}]),angular.module("loginMoodleApp").controller("DashboardCtrl",["$scope","WS","$sce","$http",function(a,b,c,d){function e(){var b='<html><head></head><body><form id="loginForm" action="'+a.loginurl+'" method="post"><input type="hidden" name="username" value="'+a.usernameMoodle+'"><input type="hidden" name="password" value="'+a.passwordMoodle+'"></form> <script type="text/javascript">document.getElementById("loginForm").submit();</script></body></html>',c="data:text/html;base64,"+btoa(b);a.login=function(){window.cordova.InAppBrowser.open(c,"_blank","hidden=no,location=no,clearsessioncache=yes,clearcache=yes")}}a.loginurl=c.trustAsResourceUrl(b.LOGIN),a.usernameMoodle=$.jStorage.get("username"),a.passwordMoodle=$.jStorage.get("password"),document.addEventListener("deviceready",e,!1)}]),angular.module("loginMoodleApp").run(["$templateCache",function(a){a.put("views/dashboard.html",'<div class="row text-center"> <!--<form action="{{loginurl}}" method="post" accept-charset="utf-8" name="form" id="form">\n		<input type="hidden" name="username" value="{{usernameMoodle}}">\n		<input type="hidden" name="password" value="{{passwordMoodle}}">\n		<button type="submit" class="btn btn-primary btn-sm" value="Login">Ingresar a plataforma</button>\n	</form> --> <br> <button class="btn btn-primary btn-sm" ng-click="login()">Entrar a moodle</button> </div> <br>'),a.put("views/main.html",'<div class="row"> <div class="col-md-6 col-md-offset-3"> <h4>Acceder a plataforma</h4> <form name="form" ng-submit="login()"> <div class="form-group"> <label for="username">Usuario</label> <input type="text" name="username" id="username" class="form-control" ng-model="username" required> </div> <div class="form-group"> <label for="password">Contraseña</label> <input type="password" name="password" id="password" class="form-control" ng-model="password" required> </div> <div class="form-actions"> <button type="submit" ng-disabled="form.$invalid" class="btn btn-primary">Entrar</button> </div> </form> </div> </div> <br>')}]);