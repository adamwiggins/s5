cycle = function() {
	setTimeout(function() {
		$.ajax({
			url: document.URL,
			success: function(data) { $('img').attr('src', data) },
			complete: function() { cycle() }
		})
	}, 5000)
}

$(document).ready(function() {
	cycle()
});
