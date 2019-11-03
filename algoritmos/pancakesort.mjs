function pancakeSort(arr) {
	let passos = [];
	for (var i = arr.length - 1; i >= 1; i--) {
	  var maxIdx = 0,
		max = arr[0];
	  for (var j = 1; j <= i; j++) {
		if (arr[j] > max) {
		  max = arr[j];
		  maxIdx = j;
		}
		passos.push(arr.slice(0));
		 //console.log(passos);
	  }
	  if (maxIdx == i) continue;
	  var newSlice;
	  if (maxIdx > 0) {
		newSlice = arr.slice(0, maxIdx + 1).reverse();
		for (var j = 0; j <= maxIdx; j++) {
		  arr[j] = newSlice[j];
		  passos.push(arr.slice(0));
		   //console.log(passos);
		}
	  }
	  newSlice = arr.slice(0, i + 1).reverse();
	  for (var j = 0; j <= i; j++) {
		arr[j] = newSlice[j];
		passos.push(arr.slice(0));
		 //console.log(passos);
	  }
	  passos.push(arr.slice(0));
	   //console.log(passos);
	}
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
  }

  export default pancakeSort