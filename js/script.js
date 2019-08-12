$(function () {
    $('.logo h3').append(header);
    // to show the try again and show answer button
    let showOptions = 0;
    $('body').css({
        'background': bgColor
    });
    $('.mcqWrapper').css({
        'border': borderColor
    });
    const question = $('#question');
    const ansContainer = $('#ansContainer')
        // question container
    var showQuest = '';
    // option container
    let options = '';
    // navigation index
    let index = 0;

    function fetchData() {
        showQuest = "<h3 class='animated zoomIn'>" + data[index].question + "</h3>";
        question.html(showQuest);
        options = `<div class='ans corrAns animated fadeInUp' >
                            <label class="labelContainer">
                                <input type='radio' id='corrAns' value='${data[index].corrAns}' name='data'>
                                <span class="checkmark"></span>
                            </label>
                            <label for="corrAns" ><p>${data[index].corrAns}</p></label>
                         </div>
                         <div class='ans suggOne animated fadeInUp'>
                             <label class="labelContainer">
                                <input type='radio' id="optOne" value='${data[index].sugg1}' name='data'>
                                <span class="checkmark"></span>
                            </label>
                            <label for="optOne" ><p>${data[index].sugg1}</p></label>
                         </div>
                         <div class='ans suggTwo animated fadeInUp'>
                            <label class="labelContainer">  
                                <input type='radio' id="opt2" value='${data[index].sugg2}' name='data'>
                                <span class="checkmark"></span>
                            </label>
                            <label for="opt2"><p>${data[index].sugg2}</p></label>
                         </div>
                         <div class='ans suggThird animated fadeInUp'>
                           <label class="labelContainer">   
                               <input type='radio' id='opt3' value='${data[index].sugg3}' name='data'>
                               <span class="checkmark"></span>
                            </label>
                            <label for='opt3'><p>${data[index].sugg3}</p></label>
                         </div>`;
        ansContainer.html(options);
        $('#ansContainer .corrAns').css({
            'order': Math.floor((Math.random() * 4) + 1)
        });
        $('#ansContainer .suggThird').css({
            'order': Math.floor((Math.random() * 4) + 1)
        });
        $('#ansContainer .suggTwo').css({
            'order': Math.floor((Math.random() * 4) + 1)
        });
        $('#ansContainer .suggOne').css({
            'order': Math.floor((Math.random() * 4) + 1)
        });
    } //data function end here
    fetchData();
    // code for navigation
    $('.navigation').click(function () {
        let navid = $(this).attr('id');
        if (navid == 'prev') {
            index--;
            if (index < 0) {
                index = 0;
                return false;
            }
            console.log("prev index :" + index);
        }
        if (index == 0) {
            $('#prev').hide();
        }
        if (index == data.length - 1) {
            console.log("you are at last position...");
            return false;
        }
        if (navid == 'next') {
            index++;
            $('#prev').show();
            console.log("next index :" + index);
        }
        if (index == data.length - 1) {
            $('#next').hide();
        } else {
            $('#next').show();
        }
        $('.navButton').hide();
        $('.right').hide();
        // function to call data
        fetchData();
    });
    $('#ansContainer').on("click", '.ans input', function () {
        $('#ansContainer .ans input').attr("disabled", "disabled");
        $(this).removeAttr("disabled");
        $(this).next('label').css({
            'color': '#000'
        });
        let id = $(this).attr('id');
        if (id == 'corrAns') {
            $('.right').fadeIn();
            $('.wrong').fadeOut();
            $('.navButton').show();
            showOptions = 0;
        } else {
            if (showOptions == 1) {
                $('.viewAns').fadeIn();
                // console.log(showOptions)
            } else {
                $('.right').fadeOut();
                $('.wrong').fadeIn();
                // console.log(showOptions)
            }
        }
    });
    // try agian or reset puzzale
    $('#tryAgain').click(function () {
        showOptions = 1;
        $('.options div').fadeOut();
        $('#ansContainer .ans input').removeAttr("disabled").prop('checked', false);
        $('.ans label').css({
            'color': '#3e3e3e'
        });
    })
    //show the answers
    $('#viewAns').click(function () {
        showOptions = 0;
        $('.ans label').css({
            'color': '#3e3e3e'
        });
        $('#ansContainer .ans input').attr("disabled", "disabled");
        $('#corrAns').prop('checked', true).removeAttr("disabled");
        $('#corrAns').next().css({
            'color': '#000'
        });
        $('.viewAns').hide();
        $('.navButton').show();
    })
});