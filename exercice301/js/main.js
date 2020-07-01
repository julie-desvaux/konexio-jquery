$(document).ready(function() {
    $('.btn-success').click(function() {
        $('#square').animate(backgroundColor())
    })
});

function backgroundColor() {
    $('#square').css('background-color', 'red')
}