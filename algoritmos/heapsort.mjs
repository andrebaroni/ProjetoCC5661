function heap_sort_rec(arr, passos) {
	heapify(arr, passos);
	let fim = arr.length - 1;
	while (fim > 0) {
	  troca(arr, 0, fim);
	  passos.push(arr.slice(0));
	  peneira(arr, 0, fim, passos);
	  fim--;
	}
  }
function troca(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
  }

function heapify(arr, passos) {
	let i = Math.floor(arr.length / 2 - 1);
	while (i >= 0) {
	  peneira(arr, i, arr.length, passos);
	  i--;
	}
  }
  
function peneira(arr, comeco, fim, passos) {
	let maxFilho, filho1, filho2;
	while (comeco < fim) {
		maxFilho = comeco;
		filho1 = 2 * comeco + 1;
		filho2 = filho1 + 1;
	  if (filho1 < fim && arr[filho1] > arr[maxFilho]) maxFilho = filho1;
	  if (filho2 < fim && arr[filho2] > arr[maxFilho]) maxFilho = filho2;
	  if (maxFilho == comeco) return;
	  troca(arr, comeco, maxFilho);
	  passos.push(arr.slice(0));
	   //console.log(passos);
	  comeco = maxFilho;
	}
  }
function heapSort(arr) {
	let passos = [];
	passos.push(arr.slice(0));
	heap_sort_rec(arr, passos);
	passos.push(arr.slice(0));
	 //console.log(passos);
	return passos;
  }

  export default heapSort