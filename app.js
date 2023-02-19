let sketch = document.getElementById("sketch");

for(let i = 0 ; i < 200 ; i++){
	let box = document.createElement('div');
	box.className = 'box';
	sketch.append(box);
	box.addEventListener("click", (event)=>{
		event.target.style.backgroundColor = 'pink';
	})
}


