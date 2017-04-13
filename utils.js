
module.exports = function() {
	function mapsTo(name, arr){
		switch(name) {
			case 'Back Squat':
				return arr.filter(function(exercise){
					return exercise.name === 'Barbell Squat';
				})
			case 'Deadlift':
				return arr.filter(function(exercise){
					return exercise.name === 'Barbell Deadlift';
				})
			case 'Overhead Press':
				return arr.filter(function(exercise){
					return exercise.name === 'Standing Barbell Shoulder Press (OHP)';
				})
			case 'Bench Press':
				return arr.filter(function(exercise){
					return exercise.name === 'Barbell Bench Press';
				}) 
			case 'Pendlay Row':
				return arr.filter(function(exercise){
					return exercise.name === 'Bent Over Barbell Row';
				})
			case 'Pull-up':
				return arr.filter(function(exercise){
					return exercise.name === 'Pull-up';
				})
    	default:
				return []
		}
	}

	return {
		mapsTo: mapsTo
	}
}()