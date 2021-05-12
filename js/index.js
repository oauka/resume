// slide
$('.slide_group').slick({
    autoplay:true,
    dots:true,
    autoplaySpeed:4000,
    pauseOnFocus:false,
    arrows:false,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [{
        breakpoint:768,
        settings: {
            arrows:false
        }
    }]
})

/////////////////////////////////////////////////////////////////////////////////////
// 메뉴 클릭 시 on
// var topNear = $('#content').offset().top
// var meNear = $('#me').offset().top
// var portNear = $('#portfolio').offset().top
// $('#nav .depth1 > li').on('click', function(e){
//     e.preventDefault()
//     var num = $(this).index()
//     switch(num) {
//         case 0 : $('html').stop().animate({ scrollTop:0 }, 500); break;
//         case 1 : $('html').stop().animate({ scrollTop:meNear }, 500); break;
//         case 2 : $('html').stop().animate({ scrollTop:portNear }, 500); break;
//         default : break;
//     }
// }) 

/////////////////////////////////////////////////////////////////////////////////////
// 스크롤
// $('.section').on('mousewheel', function(e, delta){
//     if (delta>0) {
//         var prev = $(this).prev().offset().top
//         $('html').stop().animate({
//             scrollTop:prev
//         }, 500, 'linear')
//     } else if (delta<0) {
//         var next = $(this).next().offset().top
//         $('html').stop().animate({
//             scrollTop:next
//         }, 500, 'linear')
//     }
// })

/////////////////////////////////////////////////////////////////////////////////////
// 능력치
function draw(jumsu, cname) {
    var count=0;
    var stop = setInterval(function(){
        count++
        if (count<=jumsu) {
            $(cname).find('.myscore').text(count+'%')
            .css({
                width:count+'%'
            })
        } else {
            clearInterval(stop)
            return false
        }
    },10)
}

var sct = $(window).scrollTop()
        if ( !$('.skill').hasClass('on') ) {
            draw(50, '.html')
            draw(40, '.css')
            draw(10, '.script')
            draw(10, '.jquery')
            draw(10, '.react')
            draw(70, '.photoshop')
            draw(60, '.illustrator')
            draw(20, '.aftereffect')
        }

$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if( sct >= 0 && sct < portNear ) {
        $('.depth1 > li').eq(0).addClass('on')
        .siblings().removeClass('on')
        if ( !$('.skill').hasClass('on') ) {
            $('.skill').addClass('on')
            draw(30, '.html')
            draw(20, '.css')
            draw(10, '.script')
            draw(5, '.jquery')
            draw(5, '.react')
            draw(70, '.photoshop')
            draw(60, '.illustrator')
            draw(20, '.aftereffect')
        }        
    } else if ( sct>=portNear && sct<contactNear ) {
        $('.depth1 > li').eq(1).addClass('on')
        .siblings().removeClass('on')
        $('.skill').removeClass('on').find('.myscore').css({
            width: '0%'
        })
    } else {
        $('.depth1 > li').eq(2).addClass('on')
        .siblings().removeClass('on')
        $('.skill').removeClass('on').find('.myscore').css({
            width: '0%'
        })
    }
})
// 
