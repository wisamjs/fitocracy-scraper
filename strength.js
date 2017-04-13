'use strict';
var data = require('./data');
var utils = require('./utils');
var CONSTANTS = require('./constants');
var username = CONSTANTS.username;
var password = CONSTANTS.password;
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });
var url = 'http://symmetricstrength.com/lifter/wisamjs';
var fs = require('fs');

nightmare
  .goto(url)
  .select('select#form-rep-max', 5)
  .wait(1000)
  .evaluate(function () {

		var levels = [];
		var exercises = [];
		var standards = [];

		document.querySelectorAll('thead th')
		.forEach(function(level, levelId) {
			if(levelId) {
				var levelName = level.textContent;
				levels.push({
					name: levelName,
					id: levelId - 1
				})
			}

			document.querySelectorAll('tbody tr')
			.forEach(function(row, exerciseId) {
				if (!exercises[exerciseId]){
					var exerciseName = row.querySelector('td').textContent.replace(/[ \t]+$/g,'');
					exercises.push({
						name: exerciseName, 
						id: exerciseId
					})
			}

					weightForExercise = row.querySelectorAll('td')
					.forEach(function(weight,i) {
						if (i && levelId === i) {
						standard = weight.textContent;

						standards.push({
							standard: standard,
							levelId: levelId,
							exerciseId: exerciseId
						})
					}
					})
			});
		})

		return {
			levels: levels,
			exercises: exercises,
			standards: standards
		}
})
  .end()
  .then(function (result) {
      fs.writeFile('strength.json', JSON.stringify(result, null, '\t'), 'utf8');

  })
  .catch(function (error) {
      console.error('Error:', error);
  });









