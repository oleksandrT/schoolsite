$(document).ready( function() {
	// info bar oat the top
	/*var infoDiv = document.createElement('div');
	$(infoDiv).addClass('infoDiv');	
	$(infoDiv).html( 'width: ' + $( window ).width() + 'px    ' + 'height: ' + $( window ).height()  + 'px' );
	$('body').append(infoDiv);*/

	$( window ).resize(function() {
		/*$(infoDiv).html( 'width: ' + $( window ).width() + 'px    ' + 'height: ' + $( window ).height()  + 'px' );*/
		// end of info bar
		slidesLength = $('.slider ul li').length
		step = $(slides[0]).width()
		$('.slider ul').css({
			width: function() {
				listWidth = 100*slidesLength + '%'
				return listWidth
			}
		})

		slideWidth = 100 / slidesLength
		for (var j = 0; j < slidesLength; j++) {
			$(slides[j]).css('width', slideWidth + '%')
		}
	})

	var slider = $('.slider ul'),
		slidesLength = $('.slider ul li').length,
		slides = $('.slider ul li'),
		listWidth = 0,
		i = 0,
		step = $(slides[0]).width(),
		prev = {}
	$('.slider ul').css({
		width: function() {
			listWidth = 100*slidesLength + '%'
			return listWidth
		}
	})

	slideWidth = 100 / slidesLength

	for (var j = 0; j < slidesLength; j++) {
		$(slides[j]).css('width', slideWidth + '%')
	}

	$('.next').on('click', moveToRight )

	$('.prev').on('click', moveToLeft )

	$('.menu-icon').on('click', function() {
		$('.sidebar').addClass('open')
	})

	$('.close-icon').on('click', function() {
		$('.sidebar').removeClass('open')
	})

	var animation = setInterval(moveToRight, 5000)


	function moveToRight() {
		var current = $('.visible'),
			next = current.next()
		if (next.hasClass('banner')) {
			next.addClass('visible')
			slider.css({
				'marginLeft': function() {
					var str = slider.css('marginLeft'),
						last = 0
					if ( str.indexOf('px') != -1 ) { last = str.indexOf('px') }
					else if ( str.indexOf('%') != -1 ) { last = str.indexOf('%') }
					else { last = 0 }
					numb = +(str.substring(0, last))
					return numb - step
				}
			})
			current.removeClass('visible')
		}
		else {
			$('.slider ul li:first').addClass('visible')
			$('.slider ul').css({'margin-left':'0'})
			current.removeClass('visible')
		}
	}

	function moveToLeft() {
		var current = $('.visible')
		prev = current.prev()
		if ( prev.hasClass('banner') ) {
			prev.addClass('visible')
			slider.css({
				'marginLeft': function() {
					var str = slider.css('marginLeft'),
						last = 0
					if ( str.indexOf('px') != -1 ) { last = str.indexOf('px') }
					else if ( str.indexOf('%') != -1 ) { last = str.indexOf('%') }
					else { last = 0 }
					numb = +(str.substring(0, last))
					return numb + step
				}
			})
			current.removeClass('visible')
		}
		else {
			$('.slider ul li').last().addClass('visible')

			$('.slider ul').css({
				'marginLeft':function() {
					return -($('.slider ul').width() - step)
				}
			})
			current.removeClass('visible')
		}
	}


})