function mergeSort(arr, passos = [], esqIndex = 0, dirIndex = 100) {
	
	if (arr.length == 1) {
		passos.push(arr.slice(0));
		//console.log(passos);
		return passos;
	}
	var metade = Math.floor(arr.length / 2),
	esq = arr.slice(0, metade),
	dir = arr.slice(metade);
	passos.push(arr.slice(0));
	//console.log(passos);
	mergeSort(esq, passos, esqIndex, metade);
	mergeSort(dir, passos, metade, dirIndex);
	mergeSortRec(arr, esq, dir, passos, esqIndex, dirIndex);
	passos.push(arr.slice(0));
	//console.log(passos);
	return passos;
  }

  function mergeSortRec(arr, esq, dir, passos, esqIndex, dirIndex) {
	var a = 0;
	while (esq.length && dir.length) {
	  arr[a++] = dir[0] < esq[0] ? dir.shift() : esq.shift();
	  //console.log(passos);
	  passos.push(arr.slice(0));
	}
	while (esq.length) {
	  arr[a++] = esq.shift();
	  //console.log(passos);
	  passos.push(arr.slice(0));
	}
	while (dir.length) {
	  arr[a++] = dir.shift();
	  //console.log(passos);
	  passos.push(arr.slice(0));
	}
	passos.push(arr.slice(0));
	//console.log(passos);
	return passos;
  }
  
  export default mergeSort