function	is_valide_value(num1, num2)
{
	if (Number.isInteger(num1) != false
			|| Number.isInteger(num2) != false
			|| parseInt(num1) < 0
			|| parseInt(num2) < 0)
		return (false);
	else
		return (true);
}

function	calculation()
{
	var	operator;
	var	num1;
	var	num2;

	operator = document.querySelector('#operator').value;
	num1 = document.getElementById("num1").value;
	num2 = document.getElementById("num2").value;
	if (is_valide_value(num1, num2) == false)
		return ("Error :(");
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	if (isNaN(num1) || isNaN(num2))
		return ("Error :(");
	if ((operator == "divide" || operator == "modulo") && num2 == 0)
		return ("It’s over 9000!");
	if (operator == "add")
		return (num1 + num2);
	else if (operator == "subtract")
		return (num1 - num2);
	else if (operator == "multiply")
		return (num1 * num2);
	else if (operator == "divide")
		return (num1 / num2);
	else if (operator == "modulo")
		return (num1 % num2);
	else
		return ("Error :(");
}

function	solve()
{
	var	result;

	result = calculation();
	alert(result);
	console.log(result);
}

function	spam()
{
	alert("Please, use me...");
}

setInterval(spam, 30000)
