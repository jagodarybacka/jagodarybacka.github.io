function subheaderChange() {
	var subheader = document.querySelector('.subheader');
	var headersArray = ['Javascript Developer', 'Design lover', 'Traveler'];
	if (subheader) {
		var i = 0;
		setInterval(function() {
			subheader.innerHTML = headersArray[i]; 
			i < headersArray.length-1 ? i++ : i = 0;
		}, 3000);	
	}
}

function background() {
	var index = document.querySelector('#index');
	var pattern = Trianglify({
		height: window.innerHeight,
		width: window.innerWidth,
		cell_size: 30 + Math.random() * 100
	});
	var canvas = pattern.canvas();
	var url = canvas.toDataURL('image/jpeg');
	index.style.background = 'url(' + url + ')';
}

function textCloud() {
	var colorPalette = ['#191919', '#2f2f2f', '#464646', '#555f66', '#725f6a', '#616b6a', '#856168'];
	var textSize = ['2rem', '2.5rem', '3rem', '3.5rem', '4rem'];
	var textWeight = ['400', '700', '900'];
	var spans = document.querySelectorAll('.text-cloud');
	Array.from(spans).forEach(function(element) {
		element.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
		element.style['font-size'] = textSize[Math.floor(Math.random() * textSize.length)];
		element.style['font-weight'] = textWeight[Math.floor(Math.random() * textWeight.length)];
	});
}

function config() {
	background();
	subheaderChange();
	textCloud();
}

window.onload = config();
