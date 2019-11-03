function radixSort(arr) {
	let passos = [],
	  baldes = [[], [], [], [], [], [], [], [], [], []];
	  passos.push(arr.slice(0));
	   //console.log(passos);
	arr = arr.map(x => x.toString());
	let numDigits = Math.max(...arr.map(x => x.length));
	arr = arr.map(x => x.padStart(numDigits, "0"));
	for (var i = 0; i < numDigits; i++) {
	  for (var j = 0; j < arr.length; j++) {
		var num = parseInt(arr[j][arr[j].length - 1 - i]);
		baldes[num].push(arr[j]);
	  }
	  var res = [];
	  for (var j = 0; j < baldes.length; j++) {
		while (baldes[j].length) {
		  res.push(baldes[j].shift());
		  passos.push(res.slice(0));
		   //console.log(passos);
		}
	  }
	  arr = res;
	  passos.push(arr.slice(0));
	   //console.log(passos);
	}
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
  }

  export default radixSort