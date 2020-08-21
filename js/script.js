function ibg(){
	$.each($('.ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

// Full Screen Height for IE11
$(window).resize(function(){
	mainblock()
})

function mainblock(){
	var h = $(window).outerHeight()
	$('.mainblock').css('minHeight',h);
}
	mainblock()


if ($('.gallery').length>0) {
	baguetteBox.run('.gallery',{
		animation: 'fadeIn',
    	noScrollbars: true,
	})
}

$('.filter__item').click(function(){
	var x = $(this).data('filter')
	if (x==1) {
		$('.portfolio__column').show()
	}
	else {
		$('.portfolio__column').hide()
		$('.portfolio__column.f_'+x).show()
	}
	$('.filter__item').removeClass('active')
	$(this).addClass('active')
	return false
})


$(window).scroll(function(){
	var s = 0-$(this).scrollTop()/3;
	$('.mainblock__image').css('transform','translate3d(0,'+s+'px,0)')
})

$('.goto').click(function(){
	let target = $(this).attr('href')
	target = '.'+target.slice(1)
	$('html,body').animate({ scrollTop: $(`${target}`).offset()['top'] }, 1000);
	return false; 
});




