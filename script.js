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
    createEquation();
    countdown();
    inputFunc();
});

//function to create equation
var createEquation = function () {
    firstNum = Math.floor(Math.random() * 10) + 1;
    secondNum = Math.floor(Math.random() * 10) + 1;
    console.log(firstNum);
    console.log(secondNum);
    equationValue = firstNum + secondNum;
    $('.equation').html(firstNum + ' ' + '+' + ' ' + secondNum);
}

//function for timer
var countdown = function () {
    seconds = 10;
    $('.counter').html(seconds  + ' seconds left');
    if(!timer) {
        timer = setInterval(function () {
            seconds--;
            $('.counter').html(seconds  + ' seconds left');

            if(seconds <= 0) {
                clearInterval(timer);
                timer = null;
                score = 0;
                seconds = 0;
                console.log(seconds);
                $('.score span').html(score);
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
        createEquation();
    }

    if(score > highScore) {
        highScore = score;
        $('.highScore span').html(highScore);
    }
})
};