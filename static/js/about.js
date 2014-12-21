$(document).ready(function() {
    $('.callcenter-qa-list').delegate('.qa-btn', 'click', function(event) {
        var item = $(this).closest('.qa-item');
        var btn = item.find('.qa-btn');
        if (item.hasClass('qa-open')) {
            btn.html('查看<span>﹀</span>');
        } else {
            btn.html('收起<span>︿</span>');
        }
        item.find('.qa-answer').toggle(300);
        item.toggleClass('qa-open');
    });
});