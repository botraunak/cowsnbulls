function toggle_history(){
	console.log("Function is working");
	
	var display = $("#history_sidebar").css("display");
	console.log(display);
	if(display=="block")
	{
		
		$("#history_sidebar").addClass('fadeOutUpBig');
		$("#history_sidebar").fadeOut();
	}
	else
	{
		$("#history_sidebar").removeClass('fadeOutUpBig').show().addClass('fadeInDownBig');
	}
}	

function enter(e)
{
	if (e.keyCode == 13)
	{
		$('#submit').click();
	}
}


$(document).ready(function (){
	
	var l = words.length;
	l = parseInt((Math.random()*100)%l);
	var word = words[l]; // Getting Word

	function correct_answer()
	{
		$('.answer_animate').css('background-color','white');
		$('.answer_animate').addClass('green').addClass('full_bg');
		$('body').removeClass('red').addClass('green');
		$('.answer_animate').animate({opacity: 0},200,function(){
			$('.answer_animate').css('background-color','transparent');
			$('.answer_animate').css('opacity','1');
			$('.answer_animate').removeClass('full_bg');
		});
	}

	function wrong_answer()
	{
		$('.answer_animate').css('background-color','white');
		$('.answer_animate').addClass('red').addClass('full_bg');
		$('body').removeClass('green').addClass('red');
		$('.answer_animate').animate({opacity: 0},200,function(){
			$('.answer_animate').css('background-color','transparent');
			$('.answer_animate').css('opacity','1');
			$('.answer_animate').removeClass('full_bg');
		});
	}

	function give_alert(message){
		$('.alert').toggle();
		$('.close').toggle();
		$('#alert').text(message);
		$('.alert').addClass('animated');
		$('.alert').addClass('shake');
	}

	var tries = 0; // Number of tries
	var cows = 0; // Cows
	var bulls = 0; // Bulls

	
	$('.word').append('<input name="word"class="word_input" maxlength="4" onkeypress="enter(event);"/>');
	

	// Check on Submit Function
	$('#submit').click(function submit_func(){
		cows = 0;
		bulls = 0;
		if(tries<9)
		{
			var user_word = $('input[name="word"]').val();
			for(i = 0; i < word.length; i++)
			{
			
				if(user_word.length != word.length)
				{
					give_alert("You need to have exactly 4 letters in input");
					break;
				}

				for (var j = 0; j < word.length; j++)
				{
					if(user_word[i].toLowerCase() == word[j])
					{
						if(i == j)
						{
							bulls++;
							console.log("bull for : "+ word[j]);
						}
						else
						{	
							cows++;
							console.log("cow for : "+ word[j]);
						}
						break;
					}
				}				
			}


		$('#history_sidebar').append('<div class="item"><span>Word: </span><span class>'+user_word+'</span><br><span>Cows: </span><span>'+cows+' </span><span>Bulls: </span><span>'+bulls+'</span></div>');
		if (cows > 0 || bulls > 0)
		{
			correct_answer();
		}
		else
		{
			wrong_answer();
		}

		if(bulls==word.length)
		{
			$('#heading').text('Congratulations! You Won! :)');
		}
		else
		{
			$('#heading').text('Cows: '+cows+' Bulls: '+bulls);
		}

		}
		else
		{
			$('#heading').html('Sorry you lost! <br> Refresh page to play again');
			$('.word_input').fadeOut();	
			$('#submit').fadeOut();
		}

		tries++;
	});
	
	// Clearing input field on focus
	$('input[name="word"]').on('click focusin', function() {
    this.value = '';
	});
	
	// Close Alert button
	$('.close').click(function(){
		$('.alert').fadeOut();
		$(this).toggle();
	});



});

