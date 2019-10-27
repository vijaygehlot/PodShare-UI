$(document).ready(function () {
    $("select").change(function () {
        var selectedLocation = $(this).children("option:selected").val();
        console.log("You have selected the location - " + selectedLocation)
    });
    $(function () {
        var $datepicker = $('#datepicker');
        $datepicker.datepicker();
        $datepicker.datepicker('setDate', new Date());
    });
});

