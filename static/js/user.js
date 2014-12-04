$(document).ready(function() {
    $('.user-menu').delegate('.nav-item', 'click', function(event) {
        var container = $(this).closest('li');
        container.find('.submenu').toggle(200);
        event.preventDefault();
    });
    $('.user-information').delegate('a.info-ops', 'click', function(event) {
        var container = $(this).closest('.info-item');
        container.toggleClass('info-form-active');
        container.find('.info-form').toggle(200);
    });
    $('#div').hih
});