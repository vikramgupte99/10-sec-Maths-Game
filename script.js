var firstNum;
var secondNum;

//function for equation
$(document).on('click','#startBtn',function () {
    console.log('Start button working');
    firstNum = Math.floor(Math.random() * 10) + 1;
    secondNum = Math.floor(Math.random() * 10) + 1;
    console.log(firstNum);
    console.log(secondNum);
    $('.equation').html(firstNum + ' ' + '+' + ' ' + secondNum);
});
