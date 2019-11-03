function insertionSort(arr) {
	let passos = [];
	for (let i = 1; i < arr.length; i++) {
		let pos = i;
		let chave = arr[i];
		while (pos > 0 && chave < arr[pos - 1]) {
			passos.push(arr.slice(0));
			//console.log(passos);
			arr[pos] = arr[pos - 1];
			pos = pos - 1;
		}
		arr[pos] = chave;
		passos.push(arr.slice(0));
		//console.log(passos);
	}
	passos.push(arr.slice(0));
	//console.log(passos);
	return passos;
}

export default insertionSort