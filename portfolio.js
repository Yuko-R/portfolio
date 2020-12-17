$(function(){
$('.tab-nav a').on('click', function(){
	console.log($(this).text());
	if ($(this).hasClass('active')){
		return false;
	}

	$('.tab-nav a').removeClass('active');
	$(this).addClass('active');

	console.log(this.hash);
	$('.tab-content > div').removeClass('active');

	$('.tab-content > div').filter(this.hash).addClass('active');

    return false;
    
});

$(window).on('scroll', function(){
    let summary = $('.summary_love').offset().top;
    let footer_fadein = $('.footer_text').offset().top;

    let wh = $(window).height();

    let now_position = $(window).scrollTop();

    if (summary <= wh + now_position){
        // 見せる
        $('.summary_love').removeClass('hide');
    }　else　{
        // 隠しておく
        $('.summary_love').addClass('hide');
    }

    if (footer_fadein <= wh + now_position){
        // 見せる
        $('.footer_fade').removeClass('hide');
    }　else　{
        // 隠しておく
        $('.footer_fade').addClass('hide');
    }

});

});