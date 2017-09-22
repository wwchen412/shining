$(function() {
    $('#inner-page').load('../html/header.html');
});

$(function() {
    $('.arrow').click(function() {
        $(this).toggleClass('animation');
        $('#tea-nav li').toggleClass('slide');
    })
})
$(window).load(function() {
    $('.menu').click(function() {
        $('.menu-list').addClass('active').find('ul').addClass('active');

    })
    $('.menu-list').click(function() {
        $('.menu-list').removeClass('active');
    })
    $('.menu-list ul li.close').click(function() {
        $('.menu-list').removeClass('active');
    })
    $('.menu-list ul').click(function() {
        //阻止泡泡往外找
        event.stopPropagation();
    })

})