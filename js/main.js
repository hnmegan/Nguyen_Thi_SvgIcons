(() => {
// stub 
	console.log('fired'); 

	let mainHeadline = document.querySelector(".main-headline"),
		swapTextButton = document.querySelector(".switch-type"),


	function logMyId() {
		console.log(this.id);
	}


	function swapText(){
		mainHeadline.textContent = "I am a princess. All girls are. Even if they dress in rags, even if they think they aren't pretty, or smart, or young. They are still princesses. You are a princess!";
		mainHeadline.classList.toggle("selected");

	}


	swapTextButton.addEventListener("click", swapText);

	objectButton.addEventListener("click", logTheSVG)


})();