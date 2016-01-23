/**
js文件采用单例模式将原来的代码根据页面的结构分到不同的命名空间中，
相比原来的代码。这样写结构更清晰，维护起来更方便

**/

//定义页面各部分的高度
var index = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.newpUl = $('.newp-ul');
        me.conEle = $('.con');
        me.article = $('article');
        me.height = $(window).innerHeight();
    },
    bind: function() {
        var me = this;
        me.newpUl.height(me.height + 16);
        me.conEle.height(me.height);
        me.article.height(me.height - 32);
    }

};
//定义顶部标签
var topSet = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        //顶部标签-》登录
        me.navLogin = $('.menu-login');
        me.ulLogin = $('.login-list');
        //顶部标签-》设置
        me.navSet = $('.menu-set');
        me.ulSet = $('.menu-set-list');
        //顶部标签-》更多产品
        me.navNewp = $('.menu-newp');
        me.ulNewp = $('.newp-ul');
    },
    bind: function() {
        var me = this;
        me.navLogin.hover(function() {
            me.ulLogin.toggle();
        });
        me.navSet.hover(function() {
            me.ulSet.toggle();
        });
        me.navNewp.hover(function() {
            me.ulNewp.toggle();
        });
    }
};
//定义主体部分
var contentSet = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        //主体标题
        me.title = $('.main-title');
        //主体内容
        me.content = $('.main-content');
        //内容-》我的关注部分
        me.content.mine = $('.mine-title');
        me.content.mineUl = $('.mine-ul');
        me.content.mineArrowRight = $('.arrow-right');
        me.content.mineArrowDown = $('.arrow-down');
        //内容-》视频部分
        me.content.video = $('.video-control');
        me.content.videoType = $('.video-type');
        me.content.videoUserControl = $('.user-control');
        me.content.videoUserCollection = $('.user-collection');
        me.content.videoUserCollectionText = $('.user-collection-text');
        me.content.videoUserDelete = $('.user-delete');
        me.content.videoUserDeleteText = $('.user-delete-text');
        //内容-》购物部分
        me.content.shopping = $('.shopping-img');
        me.content.shoppingMask = $('.mask');


    },
    bind: function() {
        var me = this;
        me.title.each(function(index) {
            var liNode = $(this);
            liNode.click(function() {
                $('.actived-main-title').removeClass('actived-main-title');
                $('.actived-main-content').removeClass('actived-main-content');
                me.content.eq(index).addClass('actived-main-content');
                $('.float-main-title').eq(index).addClass('actived-main-title');
                liNode.addClass('actived-main-title');
                redioLocation();

            });
        });
        me.content.mine.click(function() {
            me.content.mineUl.toggle();
            me.content.mineArrowRight.toggle();
            me.content.mineArrowDown.toggle();
        });
        me.content.video.each(function(index) {
            var liNode = $(this);
            liNode.hover(function() {
                me.content.videoType.eq(index).toggle();
                me.content.videoUserControl.eq(index).toggle();
            });
        });
        me.textShow(me.content.videoUserCollection, me.content.videoUserCollectionText);
        me.textShow(me.content.videoUserDelete, me.content.videoUserDeleteText);
        me.textShow(me.content.shopping, me.content.shoppingMask);
    },
    textShow: function(divName, textName) {
        divName.each(function(index) {
            var divNode = $(this);
            divNode.hover(function() {
                $(textName).eq(index).toggle();
            });
        });
    }

};
//定义显示更多部分
var mousewheelSet = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.nextMore = $('.next-more');
        me.moreNav = $('.more-nav');
        me.footer = $('footer');
    },
    bind: function() {
        var me = this;
        me.nextMore.click(function() {
            me.showMore();
        });
        $(window).bind('mousewheel', function(event, delta) {
            me.showMore();
            var dir = delta;
            if (dir > 0) {
                $('.float-main').show();
            } else {
                $('.float-main').hide();
            }
            redioLocation();
        });

    },
    showMore: function() {
        var me = this;
        me.nextMore.hide();
        contentSet.content.css('height', 'auto');
        me.moreNav.show();
        me.footer.css('bottom', '-60px');
    }
};
//定义返回顶部按钮部分
var backToTopSet = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.backToTop = $('.back-to-top');
        me.backIcon = $('.back-icon');
        me.backText = $('.back-text');
    },
    bind: function() {
        var me = this;
        me.backToTop.hide();
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                me.backToTop.fadeIn();
            } else {
                me.backToTop.fadeOut();
            }
        });
        me.backToTop.click(function() {
            me.toTop();
        });
        me.backToTop.hover(function() {
            me.backShow();
        });
    },
    backShow: function() {
        var me = this;
        me.backIcon.toggle();
        me.backText.toggle();
    },
    toTop: function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    }

};
//定义浮动搜索部分
var floatCotentSet = {
    init: function() {
        this.render();
        this.bind();
    },
    render: function() {
        var me = this;
        me.floatNav = $('.float-nav');
        me.floatSearch = $('.float-search-inner');
        me.floatIcon = $('.float-search-icon');
        me.floatTitle = $('.float-main-title');
    },
    bind: function() {
        var me = this;
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 300) {
                me.floatNav.show();
            } else {
                me.floatNav.hide();
            }
        });
        me.floatSearch.focus(function() {
            $(this).css('border-color', '#38f');
        });
        me.floatSearch.focusout(function() {
            $(this).css('border-color', '#b8b8b8');
        });
        me.floatIcon.click(function() {
            location.reload();
        });
        me.floatTitle.each(function(index) {
            var liNode = $(this);
            liNode.click(function() {
                $('.actived-main-title').removeClass('actived-main-title');
                $('.actived-main-content').removeClass('actived-main-content');
                contentSet.content.eq(index).addClass('actived-main-content');
                contentSet.title.eq(index).addClass('actived-main-title');
                liNode.addClass('actived-main-title');
                $('body,html').animate({
                    scrollTop: 300
                }, 500);
                redioLocation();
            });
        });
    }
};
//定义其他部分
var redioLocation = function() {
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
};
$(function() {
    index.init();
    topSet.init();
    contentSet.init();
    mousewheelSet.init();
    backToTopSet.init();
    floatCotentSet.init();

});
