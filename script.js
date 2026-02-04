var pText = $('p').text();
console.log(pText);
$('p').click(function () {
    $(this).addClass('color');
})