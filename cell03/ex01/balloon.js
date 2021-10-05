function	balloon_inflation()
{
	var	width;
	var	height;
	let	color;
	let	new_color;

	width = document.getElementById("balloon").offsetWidth + 10;
	height = document.getElementById("balloon").offsetHeight + 10;
	color = window.getComputedStyle(document.getElementById("balloon")).backgroundColor;
	document.getElementById('balloon').style.width = width + "px";
	document.getElementById('balloon').style.height = height + "px";
	if (color == 'rgb(255, 0, 0)')
		new_color = 'rgb(0, 255, 0)';
	else if (color == 'rgb(0, 255, 0)')
		new_color = 'rgb(0, 0, 255)';
	else if (color == 'rgb(0, 0, 255)')
		new_color = 'rgb(255, 0, 0)';
	document.getElementById('balloon').style.backgroundColor = new_color;
	if (width > 420 || height > 420)
	{
		document.getElementById('balloon').style.width = "200px";
		document.getElementById('balloon').style.height = "200px";
	}
}

function	balloon_deflation()
{
}
