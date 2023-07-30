let slider = document.querySelector("#coffeeAmt");
let output = document.querySelector("#coffeeNum");

slider.oninput = function() {
	let label = ""
	slider.value === 1 ? label = " cup" : label = " cups"
	output.innerText = slider.value + label;
};

document.querySelector("#coffeeAmt").addEventListener("input", calcCoffee);

function calcCoffee() {
	const x = document.querySelector("#coffeeAmt").value
	const tbsp = x*2
	const water = x*6
		
	switch (tbsp % 8) {
		case 0:
			document.querySelector("#groundCoffeeAmount").innerText = tbsp + " tablespoons" + " | " + tbsp/16 + " cup";
			break;
		case 2: 
			document.querySelector("#groundCoffeeAmount").innerText = tbsp + " tablespoons";
			break;
		case 4:
			document.querySelector("#groundCoffeeAmount").innerText = tbsp + " tablespoons";
			break;
		case 6:
			document.querySelector("#groundCoffeeAmount").innerText = tbsp + " tablespoons";
			break;
	};
	
	switch (water % 8) {
		case 0:
			document.querySelector("#waterAmount").innerText = water + " fluid ounces" + " | " + water/8 + " cup";
			break;
		case 2: 
			document.querySelector("#waterAmount").innerText = water + " fluid ounces"
			break;
		case 4:
			document.querySelector("#waterAmount").innerText = water + " fluid ounces"
			break;
		case 6:
			document.querySelector("#waterAmount").innerText = water + " fluid ounces"
			break;
	};
	
	const resultDiv = ["#groundCoffeeAmount", "#waterAmount"];
	resultDiv.forEach((item) => {
		document.querySelector(item).classname = "result";
	});
};

calcCoffee();