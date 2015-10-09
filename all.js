$( document ).ready(function() {
   
   var correct_answ = new Array('', 'Chart', 'Gauge', 'Conversation', 'Book', 'Globe', 'Share', 'Establish a common standard', 'Bring learning to life', 'Let talent speak for itself');
   var selected_answ = new Array('', '', '', '', '', '', '', '', '', '');
   
   var select = $('.select_p');
   
   select.click(function(){
	   if($(this).hasClass('active')){
		   $(this).removeClass('active');
		   $(this).next().animate({
			   opacity:0
		   },700,function(){
			   $(this).next().css('display','none');
			   })
		    
	   }
	   
	   else{
		   $(this).addClass('active');
		   $(this).next().css('display','block').animate({
			   opacity:1
		   },700,function(){})
	
	   }
	  
   });
   
   $('.choose p').click(function(){
	   var choosen_option = $(this).text();
		$(this).parent().parent().prev('.select_p').text(choosen_option)
		var id_answ = $(this).parent().parent().prev('.select_p').data("id");
		selected_answ[id_answ] = choosen_option;
   })
	
	var site_number = 1;
	
	$('#exercise_1, #prev').click(function(){
		if($(this).hasClass('active')){}
		else{
			$('#exercise_1').addClass('active')
			$('#exercise_1').css('color', 'orange')
			$('#exercise_2').removeClass('active');
			$('#exercise_2').css('color', '#000');
			
			$('#exp_2').animate({
				opacity:0
			},700, function(){
				$('#exp_2').css('display','none');
				$('#exp_1').css('display','block').animate({
				opacity:1
				},700, function(){}
				)
				$('.middle_content > p').text('Excercise 1');
				$('#check_2').css('display','none');
				$('#check_1').css('display','block');
			}
			)
			$('#next').removeClass('clicked')
			$('#prev').removeClass('clicked');
			
			
			site_number = 1;
		}
	})
	
	$('#exercise_2, #next').click(function(){
		if($(this).hasClass('active')){}
		else{
			$('#exercise_2').addClass('active')
			$('#exercise_2').css('color', 'orange')
			$('#exercise_1').removeClass('active');
			$('#exercise_1').css('color', '#000');
			
			$('#exp_1').animate({
				opacity:0
			},700, function(){
				$('#exp_1').css('display','none')
				$('#exp_2').css('display','block').animate({
				opacity:1
				},700, function(){}
				)
				$('.middle_content > p').text('Excercise 2');
				$('#check_2').css('display','block');
				$('#check_1').css('display','none');
			}
			)
			$('#prev').addClass('clicked')
			$('#next').addClass('clicked')
			site_number = 2;
			
			
		}
	})
	
	
	$('.check p').click(function(){
		if($(this).hasClass('checked')){
			if(site_number == 1){
				$('#exp_1 .select_p').removeClass('red green orange');
				$('#exp_1 .select_p').text('Select a label');
				$('#exp_1 .middle_text').text('Label the images');
			}
			else{
				$('#exp_2 .select_p').removeClass('red green orange');
				$('#exp_2 .select_p').text('Select some answers');
				$('#exp_2 .middle_text').text('Label the images');
			}
			$(this).removeClass('checked');
			$(this).text('Check answers');
			
			
			selected_answ = new Array('', '', '', '', '', '', '', '', '', '');
		}
		
		else{
			
			if(site_number == 1){
			   for(i=1; i<=6;i++){
				   if(selected_answ[i] == correct_answ[i]){
						$('#select_'+i).addClass('green')
					   
				   }
				   else if(selected_answ[i] == ''){
					  $('#select_'+i).addClass('orange')
					 
				   }
				   else{
					  $('#select_'+i).addClass('red')
				   }
			   }

			}
			
			else{
				for(i=7; i<=9;i++){
				   if(selected_answ[i] == correct_answ[i]){
						$('#select_'+i).addClass('green')
					   
				   }
				   else if(selected_answ[i] == ''){
					  $('#select_'+i).addClass('orange')
					 
				   }
				   else{
					  $('#select_'+i).addClass('red')
				   }
			   }
			}
			
			
				$(this).addClass('checked');
				$(this).text('Try again');
				if(site_number == 1){
					$('#exp_1 .middle_text').text('Check your answers');
				}
				else{
					$('#exp_2 .middle_text').text('Check your answers');
				}
		}
		})  
	
	





	
   $(document).click(function(event) {
			if(!$(event.target).hasClass('select_p')){
				$('.choose_wrap').css('display', 'none');
				$('.choose_wrap').css('opacity', 0);
				select.removeClass('active');
			}
		});

});




