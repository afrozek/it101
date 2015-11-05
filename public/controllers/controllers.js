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

.controller('surahCtrl',['$scope','$http','$stateParams','audioService','$location','$anchorScroll',function($scope,$http,$stateParams,audioService,$location,$anchorScroll){

	 


//1. GET CURRENT SURAH NUMBER FROM LINK
	$scope.num = $stateParams.num;

//2. GET THE SURAH ARABIC OBJECT 
	$scope.surah = $http.get('api/arabic_text/uthmani/' + $scope.num+  '.json').then(function(res){
		//return surah object
		$scope.surah = res.data.content.quran['quran-simple'];
	})

//3. GET THE SURAH ENGLISH TRANSLATION 
	$scope.translation = $http.get('api/translation/shakir/' + $scope.num ).then(function(res){
		//return the translation
		$scope.translation = res.data.Verse;
	})

	
//4. AUDIO LOGIC



	//playing status
	$scope.currentVerse;// use scope because it is used to highlight verse on front end.

	$scope.$watch('currentVerse', function() {
      console.log('hey, myVar has changed!');
      $location.hash($scope.currentVerse);
      $anchorScroll();
  	});
	
	
		//flagship function, clicked on from view
		$scope.clickedVerse = function(ayah){
			console.log('clicked');
			audioService.clickedVerse(ayah,$scope);

		}
	

		$scope.pausePlay = function(){
			audioService.pausePlay();
		}

		// $scope.$on("$stateChangeSuccess",function($scope){
		// console.log("changed surahs")
		// console.log($scope.audio);
	//});


}])//end surah ctrl


.controller('loginCtrl',['$scope','loginService',function($scope,loginService){
	$scope.login = function(loginForm){
		//login service, user object from form
		loginService.login(loginForm,$scope);
		$scope.loginStatus = "";
	}



}])
	
