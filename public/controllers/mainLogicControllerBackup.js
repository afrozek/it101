angular.module('app')


.controller('mainCtrl',['$scope',function($scope){

	$scope.title = "main";

}])

.controller('homeCtrl',['$scope','$state',function($scope,$state){

	$scope.title = "home";

	$scope.surahList = {surahs:["Al-Fatiha", "Al-Baqarah", "Ale Imran", "An-Nisa",
				"Al-Maidah", "Al-Anam", "Al-Araf", "Al-Anfal", "At-Tawbah", "Yunus",
				"Hud", "Yusuf", "Ar-Rad", "Ibrahim", "Al-Hijr", "An-Nahl", "Al-Isra",
				"Al-Kahf", "Maryam", "Taha", "Al-Anbya", "Al-Haj", "Al-Muminun",
				"An-Nur",
				"Al-Furqan", "Ash-Shuara", "An-Naml", "Al-Qasas", "Al-Ankabut",
				"Ar-Rum",
				"Luqman", "As-Sajdah", "Al-Ahzab", "Saba", "Fatir", "Ya-Sin",
				"As-Saffat",
				"Sad", "Az-Zumar", "Ghafir", "Fussilat", "Ash-Shuraa", "Az-Zukhruf",
				"Ad-Dukhan", "Al-Jathiyah", "Al-Ahqaf", "Muhammad", "Al-Fath",
				"Al-Hujurat", "Qaf", "Adh-Dhariyat", "At-Tur", "An-Najm", "Al-Qamar",
				"Ar-Rahman", "Al-Waqiah", "Al-Hadid", "Al-Mujadila", "Al-Hashr",
				"Al-Mumtahanah", "As-Saf", "Al-Jumuah", "Al-Munafiqun", "At-Taghabun",
				"At-Talaq", "At-Tahrim", "Al-Mulk", "Al-Qalam", "Al-Haqqah",
				"Al-Maarij",
				"Nuh", "Al-Jinn", "Al-Muzzammil", "Al-Muddaththir", "Al-Qiyamah",
				"Al-Insan", "Al-Mursalat", "An-Naba", "An-Naziat", "Abasa",
				"At-Takwir",
				"Al-Infitar", "Al-Mutaffifin", "Al-Inshiqaq", "Al-Buruj", "At-Tariq",
				"Al-Ala", "Al-Ghashiyah", "Al-Fajr", "Al-Balad", "Ash-Shams",
				"Al-Layl",
				"Ad-Duhaa", "Ash-Sharh", "At-Tin", "Al-Alaq", "Al-Qadr", "Al-Bayyinah",
				"Az-Zalzalah", "Al-Adiyat", "Al-Qariah", "At-Takathur", "Al-Asr",
				"Al-Humazah", "Al-Fil", "Quraysh", "Al-Maun", "Al-Kawthar",
				"Al-Kafirun",
				"An-Nasr", "Al-Masad", "Al-Ikhlas",
				"Al-Falaq", "An-Nas"
			]};

	$scope.openSurah = function(index){
		//console.log(index)
		$state.go('home.surah/:num',{num:index});
	}

}])

.controller('surahCtrl',['$scope','$http','$stateParams',function($scope,$http,$stateParams){

	//number of surah passed in the link
	$scope.num = $stateParams.num;

	//      var x = "cat";
	// $scope.$on("$stateChangeSuccess",function(){
	// 	console.log("changed surahs")
	// 	console.log(x);
	// 	console.log($scope.audio)
	// });  
	
	$scope.hey = function(){
		$scope.person = "afroze";
	}
	//surah translation
	$scope.translation = $http.get('api/translation/shakir/' + $scope.num ).then(function(res){
		//console.log(res.data.Verse);
		$scope.translation = res.data.Verse;
	})

	//main audio controls
	function pause() {
		$scope.audio.pause();
	}

	$scope.play = function(){
		if($scope.audio)
		$scope.audio.play();
	}

	//first pause any other audio from surahs
	//pause();

	//playing status
	$scope.playing = false;

	//retrive the proper surah and resolve
	var promise = $http.get('api/arabic_text/uthmani/' + $scope.num+  '.json').then(function(res){
		
		//get surah object
		$scope.surah = res.data.content.quran['quran-simple'];


		//flagship function
		$scope.playVerse = function(ayah){
			//console.log(ayah);

			if($scope.playing == true){
				$scope.audio.pause();
				playVerse();
				console.log('play');
			}
			else playVerse();

			
			function playVerse(){
				//current surah
				var surah = ayah.surah;
				console.log(surah);
				//current ayah/verse
				$scope.currentVerse = ayah.ayah;

				//get verse from folder and create new audio object
				$scope.audio = new Audio('audio/'+ surah + '/' +$scope.currentVerse + '.mp3');
				$scope.audio.volume = 0.1;
				$scope.audio.play();

				//set playing status
				$scope.playing = true;
				
				//keep playing verse when each verse ends
				keepPlaying(surah);
			}

			function keepPlaying(surah){
				$scope.audio.addEventListener("ended", function() 
			     {		
			          $scope.audio.currentTime = 0;
			          console.log("ended currentVerse: " + $scope.currentVerse)

			           $scope.currentVerse++;
			           console.log($scope.currentVerse);
			           $scope.$apply();

			          $scope.audio = new Audio('audio/'+ surah + '/' +$scope.currentVerse + '.mp3');
			          $scope.audio.volume = 0.1;
					  $scope.audio.play();

					  //rescursive
					  keepPlaying();
			          
			     });
			}//end keep playing function
			
		}//end play verse function


		
	})//end resolve
		

}])//end surah ctrl


.controller('loginCtrl',['$scope','loginService',function($scope,loginService){
	$scope.login = function(loginForm){
		//login service, user object from form
		loginService.login(loginForm,$scope);
		$scope.loginStatus = "";
	}

	console.log('dog');

}])
	
