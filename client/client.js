Session.set('work', 50);
Session.set('rest', 10);
Session.set('reps', 10);

Session.set('workout', []);


Template.timerNew.helpers({
  work: function () {
    return Session.get('work');
  },
  rest: function () {
    return Session.get('rest');
  },
  reps: function () {
    return Session.get('reps');
  }
});

Template.timerViz.helpers({
  workout: function () {
    return Session.get('workout');
  }
});

function buildWorkout(){

}

Template.timerNew.events({
  'change .timer-new input': function (event) {

    var workout = [];

    // Update the value
    Session.set(event.target.name, event.target.value);

    // Build the workout array
    for (var i = 0; i < Session.get('reps'); i++){
      workout.push({ work: Session.get('work'),  rest: Session.get('rest') })
    }

    // Assign it
    Session.set('workout', workout);

  }
});
