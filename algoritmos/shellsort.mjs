function shellSort(arr) {
	let passos = [],
	  lacunas = [100, 50, 20, 10, 5, 1];
	  passos.push(arr.slice(0));
	   //console.log(passos);
	for (let g in lacunas) {
	  let lacuna = lacunas[g];
	  for (let i = lacuna; i < arr.length; i++) {
		let temp = arr[i];
		for (var j = i; (j >= lacuna) & (arr[j - lacuna] > temp); j -= lacuna) {
		  arr[j] = arr[j - lacuna];
		  passos.push(arr.slice(0));
		   //console.log(passos);
		}
		arr[j] = temp;
		passos.push(arr.slice(0));
		 //console.log(passos);
	  }
	}
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
  }

  export default shellSort