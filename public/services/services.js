angular.module('app')

	.factory('loginService',['$http','$location','sessionService','$state',function($http,$location,sessionService,$state){
		
		loginService = {};

		loginService.login = function(loginFormscope){
			var $promise = $http.post('api/userAuth.php',loginForm);
			$promise.then(function(res){
				console.log($scope);

				//set user id variable
				var uid = res.data;

				if(uid){
					console.log(uid);
				$scope.loginStatus = "Authenticated!"
					sessionService.set('user',uid);
					$location.path('/members');
				}
				else{
					console.log("login failed");
				$scope.loginStatus = "Wrong username or password!";
					$location.path('/login');
				}
			})
		}//end login

		//logout
		loginService.logout = function(){
			sessionService.destroy('user');
			$location.path('/login');
		}

		//check if logged in
		loginService.islogged = function(){
			if(sessionService.get('user')) return true;
			else return false;
		}


		//return service
		return loginService;

	}])

	.factory('sessionService',['$http',function(http){

		sessionService = {};

			sessionService.set = function(key,value){
				return sessionStorage.setItem(key,value);
			}

			sessionService.get = function(key){
				return sessionStorage.getItem(key);
			}

			sessionService.destroy = function(key){
				return sessionStorage.removeItem(key);
			}

		return sessionService;
		


	}])

	.factory('audioService',[function(){

	var audioService = {};
	audioService.playing = false;


	audioService.clickedVerse = function(ayah,scope){
		//console.log(ayah,scope);
	//pause current audio if any, and play
		if(audioService.playing){
			audioService.audio.pause()
		} 
		playVerse(ayah,scope); //play verse that was just clicked on
		audioService.playing = true; //set playing to true
	}

	audioService.pausePlay = function(){
			if(audioService.playing){
				pause();
				audioService.playing = false;
			} 
			else{
				play();
				audioService.playing = true;
			}
		}

	function playVerse(ayah,scope){
 				var surah = ayah.surah;
				scope.currentVerse = ayah.ayah;
			console.log("playVerse: " + scope.currentVerse);
				newAyahAudio(surah,scope.currentVerse);
				audioService.audio.play();
				
				//keep playing verse when each verse ends
				keepPlaying(surah,scope);
			}

	function newAyahAudio(surah,ayah){
			//get verse from folder and create new audio object
			audioService.audio = new Audio('audio/'+ surah + '/' + ayah + '.mp3');
			audioService.audio.volume = 0.1;

		}

	function keepPlaying(surah,scope){
			audioService.audio.addEventListener("ended", function() 
		     {		
		          audioService.audio.currentTime = 0;
		          console.log("keepPlaying: " + scope.currentVerse);
		          scope.currentVerse++;
		          scope.$apply();

		          newAyahAudio(surah,scope.currentVerse);
				  audioService.audio.play();

				  //rescursive
				  keepPlaying(surah,scope);
		          
		     });
		}//end keep playing function

	function pause(){
		audioService.audio.pause();
	}

	function play(){
		audioService.audio.play();
	}

	

	return audioService;

	}])





