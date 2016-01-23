$(function() {
    var newpUl = $('.newp-ul');
    var conEle = $('.con');
    // var bgEle = $('.bg');
    var article = $('article');
    // 用来控制各区域的高度已适应不同的浏览器
    var height = $(window).innerHeight();
    newpUl.height(height + 16);
    conEle.height(height);
    article.height(height - 32);
    // 用来控制顶部导航栏的列表显示
    showNavList('.menu-login', '.login-list');
    showNavList('.menu-set', '.menu-set-list');
    showNavList('.menu-newp', '.newp-ul');
    // 用来控制article部分main的标签切换
    $('.main-title').each(function(index) {
        var liNode = $(this);
        liNode.click(function() {
            $('.actived-main-title').removeClass('actived-main-title');
            $('.actived-main-content').removeClass('actived-main-content');
            $('.main-content').eq(index).addClass('actived-main-content');
            $('.float-main-title').eq(index).addClass('actived-main-title');
            liNode.addClass('actived-main-title');
            redioLocation();
        });
    });
    // 用来控制float-main的标签事件
    $('.float-main-title').each(function(index) {
        var liNode = $(this);
        liNode.click(function() {
            $('.actived-main-title').removeClass('actived-main-title');
            $('.actived-main-content').removeClass('actived-main-content');
            $('.main-content').eq(index).addClass('actived-main-content');
            $('.main-title').eq(index).addClass('actived-main-title');
            liNode.addClass('actived-main-title');
            $('body,html').animate({
                scrollTop: 305
            }, 500);
            redioLocation();
        });
    });
    // 用来控制mine-title的菜单隐藏
    $('.mine-title').click(function() {
        $('.arrow-right').toggle();
        $('.mine-ul').toggle();
        $('.arrow-down').toggle();
    });
    // 用来控制hot-point部分的显示效果
    $('.hot-refresh').mouseover(function() {
        $('.hot-refresh-icon').css("background-position", "-23px -42px");
    });
    $('.hot-refresh').mouseout(function() {
        $('.hot-refresh-icon').css("background-position", "-23px -25px");
    });
    // 用来控制video部分的显示效果
    $('.video-control').each(function(index) {
        var liNode = $(this);
        liNode.mouseover(function() {
            $('.video-type').eq(index).toggle();
            $('.user-control').eq(index).toggle();

        });
        liNode.mouseout(function() {
            $('.video-type').eq(index).toggle();
            $('.user-control').eq(index).toggle();

        });
    });
    // 用来控制按钮的提示文字的显示
    showControlText('.user-collection', '.user-collection-text');
    showControlText('.user-delete', '.user-delete-text');
    showControlText('.shopping-img', '.mask');
    //用来控制滚动条事件
    $(window).bind('mousewheel', function(event, delta) {
        $('.next-more').hide();
        $('.main-content').css('height', 'auto');
        $('.more-nav').show();
        $('.footer').css("bottom", "-60px");
        var dir = delta;
        if (dir > 0) {
            $('.float-main').show();
        } else {
            $('.float-main').hide();
        }
        redioLocation();
    });

    //用来控制滚动更多的click事件
    $('.next-more').click(function() {
        $(this).hide();
        $('.main-content').css('height', 'auto');
        $('.more-nav').show();
        $('.footer').css("bottom", "-60px");
        redioLocation();
    });
    //用来控制返回顶部按钮
    goToTop();
    //用来控制返回顶部按钮的标签切换
    $('.back-to-top').mouseover(function() {
        $('.back-icon').toggle();
        $('.back-text').toggle();
    });
    $('.back-to-top').mouseout(function() {
        $('.back-icon').toggle();
        $('.back-text').toggle();
    });
    // 用来控制float-nav的显示
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 300) {
            $('.float-nav').show();
        } else {
            $('.float-nav').hide();
        }
    });
    // 用来控制float-search的边框
    $('.float-search-inner').focus(function() {
        $(this).css('border-color', '#38f');
    });
    $('.float-search-inner').focusout(function() {
        $(this).css('border-color', '#b8b8b8');
    });
    //用来控制search-icon点击事件
    $('.float-search-icon').click(function() {
        location.reload();
    });

});
//用来控制顶部导航栏的列表显示
function showNavList(navName, ulName) {
    $(navName).mouseover(function() {
        $(ulName).show();
    });
    $(navName).mouseout(function() {
        $(ulName).hide();
    });
}
// 用来控制按钮的提示文字的显示
function showControlText(divName, textName) {
    $(divName).each(function(index) {
        var divNode = $(this);
        divNode.mouseover(function() {
            $(textName).eq(index).toggle();
        });
        divNode.mouseout(function() {
            $(textName).eq(index).toggle();
        });
    });
}
//用来设置返回顶部的按钮
function goToTop() {
    var goToTop = $(".back-to-top").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            goToTop.fadeIn();
        } else {
            goToTop.fadeOut();
        }
    });
    goToTop.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
       redioLocation();
       console.log($(window).scrollTop()); 

        // return false;
    });
}
//用来设置音乐电台的位置
function redioLocation() {
    var cotentHeight = $('.actived-main-content').height();
    var redioEle = $('.music-redio');
    var totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    if (cotentHeight > 600) {
        redioEle.css('position', 'fixed');
    } else if (cotentHeight <= 600) {
        redioEle.css('position', 'absolute');
    } 
    if ($(document).height() == totalHeight) {
        redioEle.css('position', 'absolute');
    } 
    
}
