function getRandomIntInclusive(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;

};
document.getElementById("RandomNum").innerHTML = getRandomIntInclusive(1, 9);
	document.getElementById("RandomNum1").innerHTML = getRandomIntInclusive(1, 3);
		document.getElementById("RandomNum2").innerHTML = getRandomIntInclusive(1, 3);
			document.getElementById("RandomNum3").innerHTML = getRandomIntInclusive(1, 3);