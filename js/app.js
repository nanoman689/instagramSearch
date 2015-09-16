angular.module('myApp', ['ngAnimate'])
.config(function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
})

.controller('myController', function($scope, $http, $sce) {




/*

https://api.instagram.com/v1/tags/{tag}/media/recent

callback: 'JSON_CALLBACK'
client_id: 'your_client_id'

user authorization url

https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code

Receive the redirect from Instagram

http://your-redirect-uri?code=CODE

CLIENT ID	97a493656416448891fba171c5f9747d
CLIENT SECRET	da103b22e88f4da9b234c3dbdd53a828
WEBSITE URL	http://www.basement9.com
REDIRECT URI	http://www.basement9.com
SUPPORT EMAIL	nanoman689@gmail.com

*/
