var CONSTANTS = require('./constants');
var username = CONSTANTS.username;
var password = CONSTANTS.password;
var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });
var url = 'https://www.fitocracy.com/';
var loginModal = 'html > body.theme-minimal > div.container:nth-child(3) > div.navbar.navbar-default:nth-child(1) > div.navbar-inner:nth-child(1) > div.navbar-header.pull-right:nth-child(3) > a.button:nth-child(1)';
var usernameField = 'form#login-modal-form > div.login-details:nth-child(2) > div.input-group:nth-child(1) > input.form-control:nth-child(2)';
var passwordField = 'form#login-modal-form > div.login-details:nth-child(2) > div.input-group:nth-child(2) > input.form-control:nth-child(2)';
var loginButton='form#login-modal-form > button:nth-child(3)';
var profile = '#profile';
var activities ='#profile-activities-tab';

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
    var result = [];

    document.querySelectorAll('.stream_item')
    .forEach(function(element) {
      var workouts = [];

      var date = element.querySelector('.stream-item-headline').querySelector('.gray_link').text;

      var workout = element.querySelectorAll('.stream-item-content .action .action_detail>li');

      workout.forEach(function(element){
        var exercise = element.querySelector('.action_prompt').textContent;
        var lift='';
        var lifts = element.querySelectorAll('ul li');

        lifts.forEach(function(element){
          lift += element.textContent;
        })

      var reps = lift.match(/\d reps/g);
      var weights = lift.match(/(\d*) lb/g);
      var words = lift.match(/((\D )\D*)/g) || [];
      var comments = words[words.length - 1] || '';
      var readableComments = comments.replace(/  /g, '');

      if (weights && reps) {

        var sets = weights.map(function(weight, i) {
          return {
            weight: weight,
            reps: reps[i],
          }

        })
      } else if (!weights && reps) {
        var sets = {
          weight: null,
          reps: reps
        }
      } else if (!reps && weights) {
        var sets = {
          weight: weights,
          reps: null
        }
      } else {
        var sets = {weight: null, reps: null}
      }

      var workout = {
        exercise: exercise,
        comments: comments,
        lift:sets
      }
      workouts.push(workout)

    })

    result.push({
      date: date,
      workout: workouts
    })


  })

return result;
})
  .end()
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
