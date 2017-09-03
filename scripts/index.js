$(function () {
    $.fn.fullpage({
        verticalCentered: false,
        slidesColor: ['#000000', '#222222', '#222222', '#000000', '#222222', '#000000'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        menu: '.menu',
        controlArrowColor: '#222222',
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $('.section2').find('img').animate({
                    opacity: '1'
                }).fadeIn(2000);
                $('.section2').find('h1,h2').delay(1500).animate({
                    left: '50%'
                }, 1500, 'easeOutExpo');
                $('.section2').find('p:nth-child(1)').delay(1000).animate({
                    top: '300px',
                    left: '710px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('p:nth-child(2)').delay(1000).animate({
                    top: '390px',
                    left: '735px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('p:nth-child(3)').delay(1000).animate({
                    top: '275px',
                    left: '1060px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.section2').find('p:nth-child(4)').delay(1000).animate({
                    top: '370px',
                    left: '1055px',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.header__wrap').css('display', 'block');
            }

            if (index == 3) {
                $('.section3').find('p').delay(1000).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo');
                $('.section3').find('h2').delay(200).animate({
                    top: '0',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.header__wrap').css('display', 'block');
            }

            if (index == 4) {
                $('.section4').find('p').fadeIn(2000);
                $('.header__wrap').css('display', 'block');
            }

            if (index == 5) {
                $('.section5').find('p').fadeIn(3000);
                $('.section5').find('h2').delay(200).animate({
                    left: '50%',
                    opacity: '1'
                }, 1500, 'easeOutExpo');
                $('.header__wrap').css('display', 'block');
            }

            if (index == 6) {
                $('.section6').find('p').fadeIn(3000);
                $('.header__wrap').css('display', 'block');
            }
        },

        onLeave: function (index, direction) {
            if (index == 2) {
                $('.section2').find('h1,h2').delay(1000).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section2').find('p').delay(1000).animate({
                    opacity: '0',
                    top: '330px',
                    left: '900px'
                }, 1500, 'easeOutExpo');
                $('.header__wrap').css('display', 'none');
            }
            $('.section2').find('img').fadeOut(2000);

            if (index == 3) {
                $('.section3').find('p').delay(500).animate({
                    bottom: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section3').find('h2').animate({
                    top: '-30%',
                    opacity: '0'
                }, 1500, 'easeOutExpo');
            }

            if (index == 4) {
                $('.section4').find('p').fadeOut(2000);
            }

            if (index == 5) {
                $('.section5').find('p').fadeOut(3000);
                $('.section5').find('h2').animate({
                    left: '-120%',
                    opacity: '0'
                }, 1500, 'easeOutExpo');
            }

            if (index == 6) {
                $('.section6').find('p').fadeOut(2000);
            }
        }
    });

    //时间轴
    $(".year>h2>a").click(function (e) {
        e.preventDefault();
        $(this).parents(".year").toggleClass("close");
    });

    //控制音频的播放
    var audioBox = document.getElementById('audioBox');
    var audio = document.getElementById("audio");
    audio.play();
    audioBox.onclick = function () {
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
    }

});

















