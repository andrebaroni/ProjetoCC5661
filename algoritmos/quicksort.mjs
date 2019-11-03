function quickSort(arr, passos, comeco = 0, fim = -1) {
	if (fim == -1) {
		fim = arr.length - 1; 
	}
	if (comeco >= fim) {
		passos.push(arr.slice(0));
		 //console.log(passos);
		return; 
	} else {
		let pivot = fim; 
		let maior = pivot - 1; 
		let menor = comeco; 
		while (menor <= maior) {
			passos.push(arr.slice(0));
			 //console.log(passos);
			if (arr[menor] <= arr[pivot]) {
				menor += 1; 
			} else {
				let temp = arr[menor]; 
				arr[menor] = arr[maior];
				arr[maior] = temp;
				maior -= 1;
				passos.push(arr.slice(0));
				 //console.log(passos);
			}
		}
		passos.push(arr.slice(0));
		 //console.log(passos);
		let temp = arr[pivot]; 
		arr[pivot] = arr[menor];
		arr[menor] = temp; 
		quickSort(arr, passos, comeco, maior);
		quickSort(arr, passos, menor + 1, pivot);
	}
}

function quickSortRec(arr) {
	let passos = [];
	quickSort(arr, passos);
	return passos;
}

export default quickSortRec