var firstNum;
var secondNum;
var seconds = 10;
var score = 0;
var highScore = 0;
var timer = null;
var equationValue;

//function for equation
$(document).on('click','#startBtn',function () {
    console.log('Start button working');
    firstNum = Math.floor(Math.random() * 10) + 1;
    secondNum = Math.floor(Math.random() * 10) + 1;
    console.log(firstNum);
    console.log(secondNum);
    equationValue = firstNum + secondNum;
    $('.equation').html(firstNum + ' ' + '+' + ' ' + secondNum);
    countdown();
    inputFunc();
});

//function for timer
var countdown = function () {
    $('.counter').html(seconds  + ' seconds left');

    if(!timer) {
        timer = setInterval(function () {
            seconds--;
            $('.counter').html(seconds  + ' seconds left');

            if(seconds <= 0) {
                clearInterval(timer);
                timer = null;
                seconds = 0;
                console.log(seconds);
                $('.equation').html("GAME OVER");
                $('.counter').html("Time over");
            }
        },1000);
    }
}

//function for input
var inputFunc = function () {
    $('.input').keyup(function (e) {
    e.preventDefault();
    
    var inputVal = Number($('.input').val());
    if(inputVal === equationValue) {
        score += 10;
        $('.score span').html(score);
        seconds++;
        $('.counter').html(seconds  + ' seconds left');
        $('input').val('');
    }
})
};