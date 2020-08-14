var longcatShowButton = document.getElementById('longcatShowButton');
var longcatShowDiv = document.getElementById('longcatShowDiv');
var longcatSection = document.getElementById('longcatSection');

function clickLongcatShowButton() {
	longcatSection.classList.remove('hidden');
	longcatShowDiv.classList.add('hidden');
}

longcatShowButton.onclick = clickLongcatShowButton;
longcatShowDiv.onclick = clickLongcatShowButton;
