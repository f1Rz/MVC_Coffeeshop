app.directive("datepicker", function () {
    return function (scope, element) {
        element.datetimepicker({
            lang: 'ru'
            //timepicker: false,
            //format: 'd.m.Y'
        });
    };
});