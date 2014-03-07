$(document).ready( function() {
	var banners = $('.banner'),
	i = 1;
	$('.next').on('click', function() {
		var current = $('.visible'),
			first = $('.banner')[0];
		if (i < banners.length) {
			next = current.next()
			i++
		}
		else {
			next = $(first)
			i = 1
		}
		current.removeClass('visible')
		next.addClass('visible')
	});
	$('.prev').on('click', function() {
		var current = $('.visible'),
			first = $('.banner')[0];
		if (i > 1) {
			next = current.prev()
			i--
		}
		else {
			i = banners.length
			next = $('.banner')[i-1]
		}
		current.removeClass('visible')
		$(next).addClass('visible')
	});

	$('.read').on('mouseover', function(e) {
		console.log($(this).find('.imgTitle'))
		var current = $(this).find('.imgTitle')
		$(current).show()
		$(this).on('mouseout', function() {
			$(current).hide()
		})
	} )

});