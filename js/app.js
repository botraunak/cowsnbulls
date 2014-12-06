	

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

	var tries = 30; // Number of tries
	var cows = 0; // Cows
	var bulls = 0; // Bulls

	// Loop to initialize input fields
	for (var i = 0; i < word.length; i++) {
		$('.word').append('<input name="letter'+i+'"class="word_input" maxLength="1" />');
	};

	// Check on Submit Function
	$('#submit').click(function (){
		cows = 0;
		bulls = 0;
		for(i = 0; i < word.length; i++)
		{
			
			if($('input[name="letter'+i+'"]').val().length != 1)
			{
				give_alert("You need to have exactly one letter in all submit fields");
				break;
			}

			for (var j = 0; j < word.length; j++)
			{
				if($('input[name="letter'+i+'"]').val().toLowerCase() == word[j])
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
			$('#heading').text('Cows: '+cows+' and Bulls: '+bulls);
		}

		
	});


	// Close Alert button
	$('.close').click(function(){
		$('.alert').fadeOut();
		$(this).toggle();
	});
});