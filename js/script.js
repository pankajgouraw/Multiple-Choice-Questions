$(function(){
     let showOptions =0;
     const question = $('#question');
     const ansContainer = $('#ansContainer')

     // show the first mcq
     let checkQuestion = data[0].question.split(".").pop(); 
     // console.log(checkQuestion);

     var showQuest = '';

     // check question type
     if(checkQuestion == 'mp4'){
    		showQuest = "<video controls src="+data[0].question+"/>";
        }else if(checkQuestion == 'png'){
        	showQuest = "<img src="+data[0].question+"/>";
        }else{
        	showQuest = "<h3>"+data[0].question+"</h3>";
        }
    question.html(showQuest);


    // check answertype
    let corrAns='';
    let sugg1='';
    let sugg2='';
    let sugg3='';

    checkCorrAns = data[0].corrAns.split(".").pop();
    checkSugg1 = data[0].sugg1.split(".").pop();
    checkSugg2 = data[0].sugg2.split(".").pop();
    checkSugg3 = data[0].sugg3.split(".").pop();

    // check correct ans
         if(checkCorrAns == 'mp4'){
    		corrAns = `<div class='ans corrAns'>
							<input type='radio' id='corrAns' value='${data[0].corrAns}' name='data'>
							label for="corrAns" ><video controls src="${data[0].corrAns}"/></label>
			             </div>`;
        }else if(checkCorrAns == 'png'){
        	corrAns = `<div class='ans corrAns'>
							<input type='radio' id='corrAns' value='${data[0].corrAns}' name='data'>
							<label for="corrAns" ><img src="${data[0].corrAns}"/></label>
			             </div>`;
        }else{
        	corrAns =`<div class='ans corrAns'>
							<input type='radio' id='corrAns' value='${data[0].corrAns}' name='data'>
							<label for="corrAns" ><p>${data[0].corrAns}</p></label>
			             </div>`;
        }

       ansContainer.append(corrAns);

       // suggestion one

        if(checkSugg1 == 'mp4'){
    		sugg1 = `<div class='ans suggOne'>
							<input type='radio' id="optOne" value='${data[0].sugg1}' name='data'>
							<label for="optOne" ><video controls src="${data[0].sugg1}"/></label>
			             </div>`;
        }else if(checkSugg1 == 'png suggOne'){
        	sugg1 = `<div class='ans'>
							<input type='radio' id="optOne" value='${data[0].sugg1}' name='data'>
							<label for="optOne" ><img src="${data[0].sugg1}"/></label>
			             </div>`;
        }else{
        	sugg1 =`<div class='ans suggOne'>
							<input type='radio' id="optOne" value='${data[0].sugg1}' name='data'>
							<label for="optOne" ><p>${data[0].sugg1}</p></label>
			             </div>`;
        }

       ansContainer.append(sugg1);

        // suggestion two

        if(checkSugg2 == 'mp4'){
    		sugg2 = `<div class='ans suggTwo'>
							<input type='radio' id="opt2" value='${data[0].sugg2}' name='data'>
							<label for="opt2"><video controls src="${data[0].sugg2}"/></label>
			             </div>`;
        }else if(checkSugg2 == 'png'){
        	sugg2 = `<div class='ans suggTwo'>
							<input type='radio' id="opt2" value='${data[0].sugg2}' name='data'>
							<label for="opt2"><img src="${data[0].sugg2}"/></label>
			             </div>`;
        }else{
        	sugg2 =`<div class='ans suggTwo'>
							<input type='radio' id="opt2" value='${data[0].sugg2}' name='data'>
							<label for="opt2"><p>${data[0].sugg2}</p></label>
			             </div>`;
        }

       ansContainer.append(sugg2);


       // suggestion three

        if(checkSugg3 == 'mp4'){
    		sugg3 = `<div class='ans suggThird'>
							<input type='radio' id='opt3' value='${data[0].sugg3}' name='data'>
							<label for='opt3'><video controls src="${data[0].sugg3}"/></label>
			             </div>`;
        }else if(checkSugg3 == 'png'){
        	sugg3 = `<div class='ans suggThird'>
							<input type='radio' id='opt3' value='${data[0].sugg3}' name='data'>
							<label for='opt3'><img src="${data[0].sugg3}"/></label>
			             </div>`;
        }else{
        	sugg3 =`<div class='ans suggThird'>
							<input type='radio' id='opt3' value='${data[0].sugg3}' name='data'>
							<label for='opt3'><p>${data[0].sugg3}</p></label>
			             </div>`;
        }

       ansContainer.append(sugg3);

    
       $('#ansContainer .corrAns').css({'order':Math.floor((Math.random() * 4) + 1)});
       $('#ansContainer .suggThird').css({'order':Math.floor((Math.random() * 4) + 1)});
       $('#ansContainer .suggTwo').css({'order':Math.floor((Math.random() * 4) + 1)});
       $('#ansContainer .suggOne').css({'order':Math.floor((Math.random() * 4) + 1)});


   
     $('#ansContainer .ans input').click(function(){
     	$('#ansContainer .ans input').attr("disabled","disabled");
     	$(this).removeAttr("disabled");

         let id =  $(this).attr('id');
         if(id=='corrAns'){
         	$('.right').fadeIn();
         	$('.wrong').fadeOut();
         }else{
         	if(showOptions==1){
         		$('.viewAns').fadeIn();
         	}else{
         		$('.right').fadeOut();
         	    $('.wrong').fadeIn();
         	}

         }
     });



     // try agian or reset puzzale

     $('#tryAgain').click(function(){
     	showOptions = 1;
     	$('.options div').fadeOut();
     	$('#ansContainer .ans input').removeAttr("disabled").prop('checked', false);
     })

     //show the answers
     $('#viewAns').click(function(){
     	$('#ansContainer .ans input').attr("disabled","disabled");
     	$('#corrAns').prop('checked', true).removeAttr("disabled");
     	$('.viewAns').fadeOut();
     })

});