$(function() {
    $('#inner-page').load('../html/header.html');
});

$(function() {
    $('.arrow').click(function() {
        $(this).toggleClass('animation');
        $('#tea-nav li').toggleClass('slide');
    })
});
// sandwich bar
$(window).load(function() {
    $('.menu').click(function() {
        $('.menu-list').addClass('active').find('ul').addClass('active');
        $('body').addClass('active');

    })
    $('.menu-list').click(function() {
        $('.menu-list').removeClass('active');
        $('body').removeClass('active');
    })
    $('.menu-list ul li.close').click(function() {
        $('.menu-list').removeClass('active');
        $('body').removeClass('active');
    })
    $('.menu-list ul').click(function() {
        //阻止泡泡往外找
        event.stopPropagation();
    })

});
// 切換圖片

$(function() {
    var big_img = $('.big-img img');
    var first_img = $('.mini-imgs ul li:first-child img').attr('src');
    big_img.attr('src', first_img);
    $('.mini-imgs ul li img').click(function() {
        var mini_img = $(this).attr('src');
        big_img.attr('src', mini_img);
    })
});

//  光箱
$(function() {
    $('.lightbox-group img').click(function() {
        var img_src = $(this).attr('src');
        $('body').append('<div class="overlay"><img src="' + img_src + '"></div>').addClass('active');
        $('.overlay').click(function() {
            $(this).remove();
            $('body').removeClass('active');
        })
    })


});