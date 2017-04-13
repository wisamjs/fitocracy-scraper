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
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
    .wait(2000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
    .wait(2000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
    .wait(2000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .wait(1000)
  .scrollTo(0, 0)
  .wait(1000)
  .scrollTo(10000000, 0)
  .evaluate(function () {
      var setId = 0;
      var workoutId = 0;
      var result = {};
      var workingExercises = [];
      var workingSets = [];
      var exercises = [];
      var dates = [];
      var workoutIds = [];
      var workouts = [];
      var defaultType = 'lb';


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

      function getWorkingSet(weight, reps, time, units) {

            if (weight && reps && !time) {
              //Regular set
              return {
                id: setId,
                weight: weight,
                units: units,
                reps: reps
              }

            } else if (!weight && reps && !time) {
              //bodyweight Sets
                return {
                id: setId,
                weight: 0,
                units: units,
                reps: reps
              }

            } else if (!weight && !reps && time) {
              //timed Set

              return {
                id: setId,
                time: time
              }

            }

            return {

            }
      }

      function isComment(reps, time) {
        return !reps && !time;

      }
      
      document.querySelectorAll('.stream_item')
      .forEach(function(element) {
        var date = element.querySelector('.stream-item-headline').querySelector('.gray_link').text;
        var workoutExercises = [];
        if (isUniqueWorkoutDate(date)){
          var dateId = addToWorkoutDates(date);
        } else {
          var dateId = getIdForDate(date);
        }

        var exercises = element.querySelectorAll('.stream-item-content .action .action_detail>li');

        exercises.forEach(function(exercise, id) {
          var name = exercise.querySelector('.action_prompt').textContent;
          var setElements = exercise.querySelectorAll('ul li');
          var sets = [];
          var comments = '';
          
          if (isUniqueExercise(name)) {
            var exerciseId = addToExercises(name);
          } else {
            var exerciseId = getIdForExercise(name);
          }

          setElements.forEach(function(element) {
            var setText = element.textContent;

            var repsArray = setText.match(/(\d*) reps/g) || [];
            var timeArray = setText.match(/(\d*):(\d*):(\d*)/g) || [];
            var weightArray = setText.match(/(\d*) lb/g) || [];

            var repsText = repsArray[0] || '';
            var timeText = timeArray[0] || '';
            var weightText = weightArray[0] || '';

            var weight = parseInt(weightText.slice(0,-3));
            var units = weightText.slice(-2) || defaultType;
            var reps = parseInt(repsText.slice(0,-5));

            if (isComment(reps, timeText)) {
              //Do something with comment
              comments = setText;
            } else {
              var set = getWorkingSet(weight, reps, timeText, units);
              setId++;
            }

            sets.push(setId);
            if (set){
              set.exerciseId = exerciseId;
              set.workoutId = workoutId;
              // set.dateId = dateId;
              workingSets.push(set);
            }

          })

          workoutExercises.push({
            id: id,
            exerciseId: exerciseId,
            setIds: sets,
            comments: comments
          })
        })

        workout = {
          id: workoutId,
          dateId: dateId,
          exercises: workoutExercises
        }

        workouts.push(workout);
        workoutId++;
      })

      result = {
        workouts: workouts,
        exercises: exercises,
        workingSets: workingSets,
        dates: dates
      }

    return result;
  })
  .end()
    .then(function (result) {
      fs.writeFile('data.json', JSON.stringify(result, null, '\t'), 'utf8');
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
