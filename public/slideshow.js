cycle = function() {
	$.ajax({
		url: document.URL,
		success: function(data) {
			var oldImg = $('img')
			oldImg.fadeOut(1000)
			setTimeout(function() {
				var newImg = $('<img>')
				newImg.attr('src', data)
				setTimeout(function() {
					newImg.hide()
					oldImg.replaceWith(newImg)
					$('img').fadeIn(1000)
					setTimeout(function() { cycle() }, 3000)
				}, 1000)
			}, 1010)
		}
	})
}

$(document).ready(function() {
	cycle()
});
