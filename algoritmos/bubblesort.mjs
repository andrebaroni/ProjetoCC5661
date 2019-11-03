function bubbleSort(arr) {
	let passos = [];
	let trocado = true;
	let i = arr.length - 1;
	while (trocado === true && i > 0) {
		trocado = false;
		for (let j = 0; j < i; j++) {
			passos.push(arr.slice(0));
			 //console.log(passos);
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				trocado = true;
				passos.push(arr.slice(0));
				 //console.log(passos);
			}
		}
		i -= 1;
	}
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
}

export default bubbleSort