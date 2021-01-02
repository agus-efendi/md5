let arg = {
    resultFunction: function (result) {

        let redirect = 'cek.php';
        $.redirectPost(redirect, {
            code: result.code
        });
    }
};

let decoder = $("canvas").WebCodeCamJQuery(arg).data().plugin_WebCodeCamJQuery;
// decoder.buildSelectMenu("select");
decoder.play();

$('select').on('change', function () {
    decoder.stop().play();
});

// jquery extend function
$.extend({
    redirectPost: function (location, args) {
        let form = '';
        $.each(args, function (key, value) {
            form += '<input type="hidden" name="' + key + '" value="' + value + '">';
        });
        $('<form action="' + location + '" method="POST">' + form + '</form>').appendTo('body').submit();
    }
});