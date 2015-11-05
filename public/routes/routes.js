
//authenication for each page
angular.module('app')

	.run(function($rootScope,$location,loginService,$urlRouter,$state){
		

		$rootScope.$on('$stateChangeStart',function(event,toState,toParams){
			

			// //set variables up
			// 	//login required boolean
			// 	var requireLogin = toState.requireLogin;

			// 	//logged in boolean
			// 	var loggedIn = loginService.islogged();

			// //check if page	requires login and check if logged in
			// if(requireLogin == true && loggedIn == false){
			// 	event.preventDefault();
			// 	$state.go('signup');


				
				//event.preventDefault();
		// 	}//end if

		 }) //end on

	}) //end run



//routes

angular.module('app')
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		
		$urlRouterProvider.otherwise('/home/surah');
		//states
		$stateProvider

		.state('home',{
			url:'/home',
			templateUrl:'public/templates/home.html',
			controller:"homeCtrl"

		})

		.state('home.surah',{
			url:'/surah',
			templateUrl:'public/templates/surah.html',
			controller:"surahCtrl"

		})

		.state('home.surah/:num',{
			url:'/surah/:num',
			templateUrl:'public/templates/surah.html',
			controller:"surahCtrl"

		})








	//$locationProvider.html5Mode(true);
	//$urlRouterProvider.otherwise('/login');

	}])//end config


