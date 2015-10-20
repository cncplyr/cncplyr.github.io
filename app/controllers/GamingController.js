myApp.controller('GamingController',
	function($scope) {
		$scope.platformsChart = {
			columns: [
				{
					id: 'games',
					name: 'Games',
					columnType: 'bar',
					values: [21, 32, 60, 21, 8, 45, 11, 35, 63, 23, 428, 83]
				}
			],
			xAxis: ['PS1','PS2','PS3','PS4','PSP','PS Vita','PSN Multi','XBox 360','PC Physical','Origin','Steam','PC Other Digital']
		};
		
		$scope.achievementsChart = {
			columns: [
				{
					id: 'achievements',
					name: 'Achievements',
					values: [1213, 207, 1349]
				}
			],
			xAxis: ['PSN', 'XBL', 'Steam']
		};
	}
);