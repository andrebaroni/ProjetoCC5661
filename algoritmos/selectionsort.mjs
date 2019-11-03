function selectionSort(arr) {
	let passos = [];
	for (let i = 0; i < arr.length; i++) {
		let menorIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			passos.push(arr.slice(0));
			 //console.log(passos);
			if (arr[j] < arr[menorIndex]) {
				menorIndex = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[menorIndex];
		arr[menorIndex] = temp;
		passos.push(arr.slice(0));
		 //console.log(passos);
	}
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
}

export default selectionSort