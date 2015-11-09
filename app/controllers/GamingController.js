'use strict';

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
					values: [1345, 207, 1480]
				}
			],
			xAxis: ['PSN', 'XBL', 'Steam']
		};

		$scope.trophyTypeChart = {
			columns: [
				{
					id: 'trophyType',
					name: 'Trophies',
					values: [1090, 215, 38, 2]
				}
			],
			xAxis: ['Bronze', 'Silver', 'Gold', 'Platinum']
		}

		$scope.trophyDayChart = {
			columns: [
				{
					id: 'trophyDay',
					name: 'Trophies',
					values: [199, 156, 146, 158, 115, 214, 328]
				}
			],
			xAxis: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
		}

		$scope.trophyTimeChart = {
			columns: [
				{
					id: 'trophyTime',
					name: 'Trophies',
					values: [59, 25, 16, 17, 14, 7, 6, 43, 20, 7, 17, 37, 46, 81, 71, 78, 78, 84, 129, 90, 103, 106, 83, 99]
				}
			],
			xAxis: [
				'12 AM',
				'1 AM',
				'2 AM',
				'3 AM',
				'4 AM',
				'5 AM',
				'6 AM',
				'7 AM',
				'8 AM',
				'9 AM',
				'10 AM',
				'11 AM',
				'12 PM',
				'1 PM',
				'2 PM',
				'3 PM',
				'4 PM',
				'5 PM',
				'6 PM',
				'7 PM',
				'8 PM',
				'9 PM',
				'10 PM',
				'11 PM'
			]
		}
	}
);
