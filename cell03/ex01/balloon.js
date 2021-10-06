function	color_next(color)
{
	if (color == "rgb(255, 0, 0)")
		color = "rgb(0, 255, 0)";
	else if (color == "rgb(0, 255, 0)")
		color = "rgb(0, 0, 255)";
	else if (color == "rgb(0, 0, 255)")
		color = "rgb(255, 0, 0)";
	return (color);
}

function	color_previous(color)
{
	if (color == "rgb(255, 0, 0)")
		color = "rgb(0, 0, 255)";
	else if (color == "rgb(0, 255, 0)")
		color = "rgb(255, 0, 0)";
	else if (color == "rgb(0, 0, 255)")
		color = "rgb(0, 255, 0)";
	return (color);
}

function	balloon_inflation()
{
	var	width;
	var	height;
	var	color;

	width = document.getElementById("balloon").offsetWidth + 10;
	height = document.getElementById("balloon").offsetHeight + 10;
	color = window.getComputedStyle(document.getElementById("balloon")).backgroundColor;
	document.getElementById("balloon").style.width = width + "px";
	document.getElementById("balloon").style.height = height + "px";
	document.getElementById("balloon").style.backgroundColor = color_next(color);
	if (width > 420 || height > 420)
	{
		document.getElementById("balloon").style.width = "200px";
		document.getElementById("balloon").style.height = "200px";
	}
}

function	balloon_deflation()
{
	var	width;
	var	height;
	var	color;

	width = document.getElementById("balloon").offsetWidth - 5;
	height = document.getElementById("balloon").offsetHeight - 5;
	color = window.getComputedStyle(document.getElementById("balloon")).backgroundColor;
	if (width >= 200 || height >= 200)
	{
		document.getElementById("balloon").style.width = width + "px";
		document.getElementById("balloon").style.height = height + "px";
		document.getElementById("balloon").style.backgroundColor = color_previous(color);
	}
}
