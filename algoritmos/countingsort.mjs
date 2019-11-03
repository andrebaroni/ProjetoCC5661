function countingSort(arr) {
	let passos = [],
	  z = 0,
	  count = [],
	  min = Math.min(...arr),
	  max = Math.max(...arr);
	for (var i = min; i <= max; i++) {
	  count[i] = 0;
	}
	for (var i = 0; i < arr.length; i++) {
	  count[arr[i]]++;
	  passos.push(arr.slice(0));
	   //console.log(passos);
	}
	for (var i = min; i <= max; i++) {
	  while (count[i]-- > 0) {
		arr[z++] = i;
		passos.push(arr.slice(0));
		 //console.log(passos);
	  }
	}
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
  }

  export default countingSort