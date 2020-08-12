var longcatShowButton = document.getElementById('longcatShowButton');
var longcatSection = document.getElementById('longcatSection');

function clickLongcatShowButton() {
	longcatSection.classList.remove('hidden');
	longcatShowButton.classList.add('hidden');
}

longcatShowButton.onclick = clickLongcatShowButton;