'use strict';

var CONSTANTS = require('./constants');
var username = CONSTANTS.username;
var password = CONSTANTS.password;
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });
var url = 'https://www.fitocracy.com/';
var loginModal = 'html > body.theme-minimal > div.container:nth-child(3) > div.navbar.navbar-default:nth-child(1) > div.navbar-inner:nth-child(1) > div.navbar-header.pull-right:nth-child(3) > a.button:nth-child(1)';
var usernameField = 'form#login-modal-form > div.login-details:nth-child(2) > div.input-group:nth-child(1) > input.form-control:nth-child(2)';
var passwordField = 'form#login-modal-form > div.login-details:nth-child(2) > div.input-group:nth-child(2) > input.form-control:nth-child(2)';
var loginButton='form#login-modal-form > button:nth-child(3)';
var profile = '#profile';
var activities ='#profile-activities-tab';
var fs = require('fs');

nightmare
  .goto(url)
  .click(loginModal)
  .wait(2000)
  .insert(usernameField, username)
  .insert(passwordField, password)
  .click(loginButton)
  .wait(3000)
  .click(profile)
  .wait(1000)
  .click(activities)
  .wait(2000)
  .evaluate(function () {
      var exercises = [];
    var dates = [];
    var workouts = [];


    function addToExercises(name) {
      var id = exercises.length;
      exercises.push({
        id: id,
        name: name
      });

      return id;
    }

    function addToWorkoutDates(date) {
      var id = dates.length;
      dates.push({
        id: id,
        date: date
      });
      return id;
    }

    function getIdForDate(date) {
      var request = dates.filter(function(workout) {
        return workout.date === date;
      });

      if (request.length) {
        return request[0].id;
      } else {
        return null;
      }
    }

    function getIdForExercise(name) {
      var request = exercises.filter(function(exercise) {
        return exercise.name === name;
      });

      if (request.length) {
        return request[0].id;
      } else {
        return null;
      }
    }

    function isUniqueExercise(name) {

      return exercises.filter(function (exercise) {
        return exercise.name === name;
      }).length === 0;

    }

    function isUniqueWorkoutDate(date){
      return dates.filter(function(workout){
        return workout.date === date;
      }).length === 0;
    }
    
    document.querySelectorAll('.stream_item')
    .forEach(function(element, workoutId) {
      var date = element.querySelector('.stream-item-headline').querySelector('.gray_link').text;
      var workoutExercises = [];
      if (isUniqueWorkoutDate(date)){
        var dateId = addToWorkoutDates(date);
     } else {
        var dateId = getIdForDate(date);
     }

      var exercises = element.querySelectorAll('.stream-item-content .action .action_detail>li');

      exercises.forEach(function(exercise, id){
        var name = exercise.querySelector('.action_prompt').textContent;
        var content = '';
        var contentElements = exercise.querySelectorAll('ul li');

        contentElements.forEach(function(element){
          content += element.textContent;
        })

      var reps = content.match(/(\d*) reps/g);
      var weights = content.match(/(\d*) lb/g) || '';
      var words = content.match(/((\D )\D*)/g) || [];
      var comments = words[words.length - 1] || '';
      var readableComments = comments.replace(/  /g, '');
      if (weights && reps) {

        var sets = weights.map(function(weight, i) {
          return {
            weight: parseInt(weight.slice(0,-3)),
            reps: reps[i],
            unit: weight.slice(-2)
          }

        })
      } else if (!weights && reps) {
        var sets = {
          weight: 0,
          unit: 'bodyweight',
          reps: reps
        }
      } else if (!reps && weights) {
        var sets = {
          weight: parseInt(weight.slice(0,-3)),
          unit: weight.slice(-2),
          reps: null
        }
      } else {
        var sets = {weight: null, reps: null, unit: null}
      }

        if (isUniqueExercise(name)){
          var exerciseId = addToExercises(name);
        } else {
          var exerciseId = getIdForExercise(name);
        }

        workoutExercises.push({
          id: id,
          exerciseId: exerciseId,
          sets: sets
        })
      })

      workout = {
        id: workoutId,
        dateId: dateId,
        exercises: workoutExercises
      }

      workouts.push(workout);

  })



  return {
    workouts: workouts,
    exercises: exercises,
    dates: dates

  }
})
  .end()
    .then(function (result) {
      fs.writeFile('data.json', result, 'utf8');
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
