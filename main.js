$(document).ready(function(){

	console.log("linked")
	var ducats = 10000;
	var $list = $('.history');
	var $textInput = $('#text_input').val();
	var $ul = $('#log');
	var loanAmount;
	var balanceCounter = ducats - loanAmount;
	console.log(balanceCounter);

	var submit = function(event){
		var $textInput = $('#text_input').val();
		if (event.keyCode === 13){
			console.log('pressed enter');
			console.log($textInput);
			var $li = $('<li>');
			if ($textInput === 'purse'){
				$ul.append($li);
				$li.text('ShylockBot pulls out his purse containing' + " " + balanceCounter + " " + 'ducats.');
				console.log($li);
				$('#text_input').val("");
			} else if ($textInput.indexOf('loan')!== -1) {
				lend(event);
			}
		}
	};

	var lend = function(event){
		var $textInput = $('#text_input').val();
		if (event.keyCode === 13){
			console.log('pressed enter');
			console.log($textInput);
			var $li = $('<li>');
				var loanArray = $textInput.split(" ");
				loanAmount;
				for (var i=0; i < loanArray.length; i++) {
					if(parseInt(loanArray[i])) {
					loanAmount=parseInt(loanArray[i]);
					break;
					}
					}
				$ul.append($li);
				$li.text('ShylockBot lends' + " " + loanAmount + " " + 'ducats');
				console.log($li);
				$('#text_input').val("");
			}
	}

var balanceCounter=ducats-loanAmount; //THIS IS NOT WORKING!!! //HELP!

$(document).on('keypress', submit);
























})