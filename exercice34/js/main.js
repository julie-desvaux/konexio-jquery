$(document).ready(function() {
    $('.btn-success').click(function() {
        if ($('input').val() === '') {
            alert("merci d'entrer le nom d'un pays dans l'input")
        } else {
            var country = $('input').val()
            $.ajax({
                url: `https://restcountries.eu/rest/v2/name/${country}`,
                success: function(data) {
                    $('#country').html(data[0].name);
                    $('#capital').html(data[0].capital);
                }
            })
        }
    })
})



