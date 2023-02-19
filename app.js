let sketch = document.getElementById("sketch");
let randomGenerator = false;
let color = 'green';

let input = document.getElementById('color');
input.addEventListener('change', ()=>{
		color = input.value;
		randomGenerator = false;
		random.style.backgroundColor = 'floralwhite';
		random.style.color = 'black';
		erase.style.backgroundColor = 'floralwhite';
		erase.style.color = 'black';
})

let eraseClick = ()=>{
	color = 'white';
	randomGenerator = false;
	erase.style.backgroundColor = '#B26E63';
	erase.style.color = 'white';
	random.style.backgroundColor = 'floralwhite';
	random.style.color = 'black';

}

let randomClick = ()=>{
	randomGenerator = true;
	random.style.backgroundColor = '#B26E63';
	random.style.color = 'white';
	erase.style.backgroundColor = 'floralwhite';
	erase.style.color = 'black';
}

let erase = document.getElementById("erase");
erase.addEventListener('click',eraseClick);

let random = document.getElementById('random');
random.addEventListener('click', randomClick);


for(let i = 0 ; i < 200 ; i++){
	let box = document.createElement('div');
	box.className = 'box';
	sketch.append(box);
	box.addEventListener("mouseover", (event)=>{
		if(randomGenerator !== true){
			event.target.style.backgroundColor = color;
		}
		else{
			color = "#" + randomColor();
			event.target.style.backgroundColor = color;
		}
	})
}

function randomColor(){
	let maxVal = 0xFFFFFF;
	let randomNumber = Math.random() * maxVal;
	randomNumber = Math.floor(randomNumber);
	return randomNumber.toString(16);
}

