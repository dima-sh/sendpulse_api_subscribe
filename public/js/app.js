$(document).ready(function(){
    $("#subscribeForm").on('submit', function(e){
        e.preventDefault();

        var dataObj = {};
        dataObj.email = $('#subscriberEmail').val();
        dataObj.name = $('#subscriberName').val();

        if (!dataObj.email || !dataObj.name) {
            alert('Empty fields');
            return false;
        }

        console.log(dataObj);

        $.ajax({
            type: 'POST',
            data: dataObj,
            url: '/subscribe',
            success: function(data) {
                alert('OK! ' + JSON.stringify(data));
            },
            error: function(data) {
                alert('Error: ' + JSON.stringify(data));
            }
        });
    });
});
