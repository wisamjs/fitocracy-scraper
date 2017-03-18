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
    var result = [];
      var contentTest;
    document.querySelectorAll('.stream_item')
    .forEach(function(element) {
      var exercises = [];

      var date = element.querySelector('.stream-item-headline').querySelector('.gray_link').text;
      var workout = element.querySelectorAll('.stream-item-content .action .action_detail>li');

      workout.forEach(function(exercise){
        var name = exercise.querySelector('.action_prompt').textContent;
        var content = '';
        var contentElements = exercise.querySelectorAll('ul li');

        contentElements.forEach(function(element){
          content += element.textContent;
        })

      var reps = content.match(/\d reps/g);
      var weights = content.match(/(\d*) lb/g);
      var words = content.match(/((\D )\D*)/g) || [];
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

      var exercise = {
        name: name,
        comments: comments,
        sets:sets
      }
      exercises.push(exercise)

    } )

    result.push({
      date: date,
      exercises: exercises
    })


  })


  return JSON.stringify(result);
})
  .end()
    .then(function (result) {
      fs.writeFile('data.json', result, 'utf8');
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
