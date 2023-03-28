let dice = document.querySelector(".dice");
let id = document.querySelector(".id");
let advice = document.querySelector(".advice");

getAdvice();
dice.addEventListener("click", () => {
	getAdvice();
});

function getAdvice() {
	fetch("https://api.adviceslip.com/advice")
		.then((response) => {
			let data = response.json();
			return data;
		})
		.then((data) => {
			id.innerHTML = data.slip.id;
			advice.innerHTML = data.slip.advice;
		});
}
