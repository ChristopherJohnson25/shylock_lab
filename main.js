$(document).ready(function(){
	console.log("linked")
	var ducats = 10000
	var $list = $('.history');
	var $textInput = $('#text_input').val();

	var submit = function(event){
		var $textInput = $('#text_input').val();
		if (event.keyCode === 13){
			var $li = $('<li>');
			console.log('pressed enter')
			console.log($textInput);
			if ($textInput === 'purse'){
				var $li = $('<li>');
				$('ul').append($li);
				$li.text('ShylockBot pulls out his purse containing' + " " + ducats + " " + 'ducats.');
				console.log($li);
			}
		}
	};



$(document).on('keypress', submit);
























})