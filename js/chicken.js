//首页 轮播
TouchSlide({
	slideCell: "#slideBox",
	mainCell: ".bd ul",
	titCell: ".hd ul",
	effect: "leftLoop",
	autoPage: true
});

// tab切换
TouchSlide({
	slideCell: "#leftTabBox"
});
$('#batch-tab .hd li').click(function() {
	var index = $(this).index();
	$(this).css({
			'background': '#4CBDAC',
			'color': '#fff'
		})
		.siblings().css({
			'background': '#fff',
			'color': '#4CBDAC'
		});
	$('#batch-tab .bd > ul').eq(index).show().siblings().hide();
});
// 回到顶部
$('.gotop').click(function() {
	$(document.body).animate({
		scrollTop: 0
	}, 300);
});

// 返回上一页
$('.back').click(function() {
	window.location.href = window.history.go(-1);
});


// 数量加1
$('.plus').click(function() {
	var oQuantity = $(this).prev('input'),
		num = oQuantity.val();
	$(oQuantity).val(++num);
	$(oQuantity).prev().css({
		'color': '#8e8888',
		'cursor': 'pointer'
	});
});
// 数量减1
$('.minus').click(function() {
	var oQuantity = $(this).next('input'),
		num = oQuantity.val();
	if (num > 2) {
		$(oQuantity).val(--num);
	} else if (num > 1) {
		$(oQuantity).val(--num);
		$(this).css({
			'color': '#d8d4d4',
			'cursor': 'default'
		});
	} else {
		$(this).css({
			'color': '#d8d4d4',
			'cursor': 'default'
		});
	}
});
// input手动改动
$('.quantity-div input').keyup(function() {
	var num = Number($(this).val());
	if ((typeof num == "number") && num >= 1) {
		if (num > 1) {
			$(this).prev().css({
				'color': '#8e8888',
				'cursor': 'pointer'
			});
		} else if (num == 1) {
			$(this).prev().css({
				'color': '#d8d4d4',
				'cursor': 'default'
			});
		}
		$(this).val(num);
	} else {
		$(this).prev().css({
			'color': '#d8d4d4',
			'cursor': 'default'
		});
		$(this).val(1);
	}
});


// 月、日等的点击切换
$('body').on('click', '.square-ul li,.square-ul div', function() {
	$(this).addClass('on')
		.siblings().removeClass('on');
});
$('body').on('click','.date-show',function(){
	if($(this).text() === '展开'){
		$(this).text('收起')
	}else{ 
		$(this).text('展开')
	}
	$('.month-type4 li:gt(6)').slideToggle().css('display','inline-block') 
});

$('body').on('click','.batch-top-tab div',function(){
	$(this).addClass('on').removeClass('off')
		.siblings().removeClass('on').addClass('off');
});