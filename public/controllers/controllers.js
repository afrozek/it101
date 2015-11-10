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


			$scope.progress = [];
			$scope.stats = [{surah:1,length:7,memorized:[]},{surah:2,length:286,memorized:[]},{surah:3,length:200,memorized:[]},{surah:4,length:176,memorized:[]},{surah:5,length:120,memorized:[]},{surah:6,length:165,memorized:[]},{surah:7,length:206,memorized:[]},{surah:8,length:75,memorized:[]},{surah:9,length:129,memorized:[]},{surah:10,length:109,memorized:[]},{surah:11,length:123,memorized:[]},{surah:12,length:111,memorized:[]},{surah:13,length:43,memorized:[]},{surah:14,length:52,memorized:[]},{surah:15,length:99,memorized:[]},{surah:16,length:128,memorized:[]},{surah:17,length:111,memorized:[]},{surah:18,length:110,memorized:[]},{surah:19,length:98,memorized:[]},{surah:20,length:135,memorized:[]},{surah:21,length:112,memorized:[]},{surah:22,length:78,memorized:[]},{surah:23,length:118,memorized:[]},{surah:24,length:64,memorized:[]},{surah:25,length:77,memorized:[]},{surah:26,length:227,memorized:[]},{surah:27,length:93,memorized:[]},{surah:28,length:88,memorized:[]},{surah:29,length:69,memorized:[]},{surah:30,length:60,memorized:[]},{surah:31,length:34,memorized:[]},{surah:32,length:30,memorized:[]},{surah:33,length:73,memorized:[]},{surah:34,length:54,memorized:[]},{surah:35,length:45,memorized:[]},{surah:36,length:83,memorized:[]},{surah:37,length:182,memorized:[]},{surah:38,length:88,memorized:[]},{surah:39,length:75,memorized:[]},{surah:40,length:85,memorized:[]},{surah:41,length:54,memorized:[]},{surah:42,length:53,memorized:[]},{surah:43,length:89,memorized:[]},{surah:44,length:59,memorized:[]},{surah:45,length:37,memorized:[]},{surah:46,length:35,memorized:[]},{surah:47,length:38,memorized:[]},{surah:48,length:29,memorized:[]},{surah:49,length:18,memorized:[]},{surah:50,length:45,memorized:[]},{surah:51,length:60,memorized:[]},{surah:52,length:49,memorized:[]},{surah:53,length:62,memorized:[]},{surah:54,length:55,memorized:[]},{surah:55,length:78,memorized:[]},{surah:56,length:96,memorized:[]},{surah:57,length:29,memorized:[]},{surah:58,length:22,memorized:[]},{surah:59,length:24,memorized:[]},{surah:60,length:13,memorized:[]},{surah:61,length:14,memorized:[]},{surah:62,length:11,memorized:[]},{surah:63,length:11,memorized:[]},{surah:64,length:18,memorized:[]},{surah:65,length:12,memorized:[]},{surah:66,length:12,memorized:[]},{surah:67,length:30,memorized:[]},{surah:68,length:52,memorized:[]},{surah:69,length:52,memorized:[]},{surah:70,length:44,memorized:[]},{surah:71,length:28,memorized:[]},{surah:72,length:28,memorized:[]},{surah:73,length:20,memorized:[]},{surah:74,length:56,memorized:[]},{surah:75,length:40,memorized:[]},{surah:76,length:31,memorized:[]},{surah:77,length:50,memorized:[]},{surah:78,length:40,memorized:[]},{surah:79,length:46,memorized:[]},{surah:80,length:42,memorized:[]},{surah:81,length:29,memorized:[]},{surah:82,length:19,memorized:[]},{surah:83,length:36,memorized:[]},{surah:84,length:25,memorized:[]},{surah:85,length:22,memorized:[]},{surah:86,length:17,memorized:[]},{surah:87,length:19,memorized:[]},{surah:88,length:26,memorized:[]},{surah:89,length:30,memorized:[]},{surah:90,length:20,memorized:[]},{surah:91,length:15,memorized:[]},{surah:92,length:21,memorized:[]},{surah:93,length:11,memorized:[]},{surah:94,length:8,memorized:[]},{surah:95,length:8,memorized:[]},{surah:96,length:19,memorized:[]},{surah:97,length:5,memorized:[]},{surah:98,length:8,memorized:[]},{surah:99,length:8,memorized:[]},{surah:100,length:11,memorized:[]},{surah:101,length:11,memorized:[]},{surah:102,length:8,memorized:[]},{surah:103,length:3,memorized:[]},{surah:104,length:9,memorized:[]},{surah:105,length:5,memorized:[]},{surah:106,length:4,memorized:[]},{surah:107,length:7,memorized:[]},{surah:108,length:3,memorized:[]},{surah:109,length:6,memorized:[]},{surah:110,length:3,memorized:[]},{surah:111,length:5,memorized:[]},{surah:112,length:4,memorized:[]},{surah:113,length:5,memorized:[]},{surah:114,length:6,memorized:[]}];


			angular.forEach($scope.stats,function(surah){
				calcuatePercent(surah);
			})

			function calcuatePercent(surah){
				var surahLength = surah.length;
				//console.log(surah)
				var memorized = surah.memorized.length;
				//console.log(memorized)
				var percent = Math.floor((memorized/surahLength)*100);
				console.log(percent);
				$scope.progress.push(percent);
			}

			


			

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
	
