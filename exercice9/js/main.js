$(document).ready(function() {
    $('.btn-success').click(function() {
        displaySecretText();
      });
})

function displaySecretText() {
    $('#text').css('display', 'block');
}