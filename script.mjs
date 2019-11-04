//importando algoritmos e as cores dos blocos
import bubbleSort from './algoritmos/bubblesort.mjs'
import countingSort from './algoritmos/countingsort.mjs'
import mergeSort from './algoritmos/mergesort.mjs'
import heapSort from './algoritmos/heapsort.mjs'
import insertionSort from './algoritmos/insertionsort.mjs'
import pancakeSort from './algoritmos/pancakesort.mjs'
import radixSort from './algoritmos/radixsort.mjs'
import selectionSort from './algoritmos/selectionsort.mjs'
import shellSort from './algoritmos/shellsort.mjs'
import quickSortRec from './algoritmos/quicksort.mjs'
import cores from './estilos/estilos.mjs'

//Quantidade de valores nas listas
let numeroAleatorio = 40;
//Delay para visualizacao
const delay = 100;
//Largura dos blocos
let larguraBloco = 15;
let finais = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let corBranca = "#FFFFFF";
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
	output.innerHTML = this.value;
}
numeroAleatorio = slider.value;

if(slider.value > 70 && slider.value <= 95){
	larguraBloco = 10;
	document.getElementById('surface').width = larguraBloco*(slider.value)+ 230;
}else if(slider.value > 95 && slider.value <= 110){
	//document.getElementById('surface').width = 1650;
	larguraBloco = 9;
	document.getElementById('surface').width = larguraBloco*(slider.value)+ 250; 
}else if(slider.value > 110 && slider.value <= 130){
	//document.getElementById('surface').width = 1650;
	larguraBloco = 8;
	document.getElementById('surface').width = larguraBloco*(slider.value) + 250; 
}else if(slider.value > 130 && slider.value <= 200){
	larguraBloco = 5.2;
	document.getElementById('surface').width = larguraBloco*(slider.value) + 220;
}else if(slider.value > 200){
	larguraBloco = 3;
	document.getElementById('surface').width = larguraBloco*(slider.value) + 220;
}else{
	larguraBloco = 15;
	document.getElementById('surface').width = larguraBloco*(slider.value) + 220; //muda a largura do canvas de acordo com a quantidade de blocos
}


//Clase tela, cria o canvas 
class Tela {
	constructor(ctx, contador, nomes) {
		this.cores = cores;
		//algoritmos incluidos
		this.permitido = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		this.CTX = ctx;
		//Largura dos blocos
		this.blocoLargura = larguraBloco;
		//Altura dos blocos
		this.blocoAltura = 60;
		//Distancia dos blocos em relacao ao eixo Y do canvas
		this.distY = 200;
		//Distancia dos blocos em relacao ao eixo X do canvas
		this.distX = 10;
		//animacao inicia nula
		this.animacao = null;
		//passo inicial = 0
		this.passo = 0;
		//declaracao do contador
		this.contador = contador;
		//declaracao dos nomes
		this.nomes = nomes;
		this.atualizapasso = function() {
			this.contador.innerHTML = this.passo;
		};
		this.exibeNomes = function() {
			//Configura o a exibiçao dos nomes dos algoritmos
			this.CTX.font = "25px Arial";
			//Configura a exibicao das listas que cada algoritmo ordena
			for (let i = 0; i < this.nomes.length; i++) {
				//Exibindo os nomes dos algoritmos
				this.CTX.fillStyle = this.nomes[i][1]; //cores dos nomes dos algoritmos
				this.CTX.fillText(
					this.nomes[i][0] + "Sort:", 15, 40 + tela.blocoAltura / 2 + i * this.blocoAltura
				);
			}
		};

		this.exibeBloco = function(x, y, altura, cor) {
			//Cor de background dos blocos
			this.CTX.fillStyle = "#4682B4";
			//Forma os blocos da visualizacao
			this.CTX.fillRect(x, y, this.blocoLargura, this.blocoAltura);
			//Colore os blocos com a cor, depende do tamanho
			this.CTX.fillStyle = cor;
			//proporcao dos blocos
			let offset = this.blocoAltura - altura * 3;
			//insere os blocos em suas devidas posicoes
			this.CTX.fillRect(x, y + offset, this.blocoLargura, altura * 3);
		};
		
		this.exibeFrame = function(frame, y_axis) {
			// Exibe um quadro completo - todos os diferentes blocos de um instantâneo de uma lista
			for (let i = 0; i < frame.length; i++) {
				this.exibeBloco(
					//Distancia entre os blocos da mesma secao
					i * this.blocoLargura + this.distY,
					y_axis * this.blocoAltura + this.distX, frame[i], this.cores[this.cores.length - 1 - frame[i]]);
			}
		};
		//exibe os passos dos algoritmos de ordenacao
		this.exibepasso = function(suporte) {
			for (let i = 0; i < suporte.length; i++) {
				if (this.permitido[i] == 1){
					if (suporte[i].length - 1 >= this.passo) {
						this.exibeFrame(suporte[i][this.passo], i);
						this.nomes[i][1] = "#FFFFFF";
					} else {
						this.exibeFrame(suporte[i][suporte[i].length - 1], i);
						this.nomes[i][1] = "#4682B4";
					}
				}else {
					this.escondeFrame(suporte[i][0], i);
				}
			}
			//Atualiza a quantidade de passos na tela
			this.atualizapasso();
			//mostra os nomes dos algoritmos
			this.exibeNomes();
		};
		
		this.exibeSorts = function(suporte) {
			clearInterval(this.animacao);
			// percorre todos os tipos repetidamente, mostra um quadro por vez, ate que todos estejam concluidos
			this.animacao = setInterval(() => {
				let running = false;
				for (let i = 0; i < suporte.length; i++) {
					if (this.permitido[i] == 1){
						if (suporte[i].length - 1 >= this.passo){ 
						running = true;
						this.exibeFrame(suporte[i][this.passo], i);
						this.nomes[i][1] = "#FFFFFF";
						}else {
							this.exibeFrame(suporte[i][suporte[i].length - 1], i);
							this.nomes[i][1] = "#09ff00"; //se o algoritmo estiver concluido, muda o seu nome para verde
							if(finais[i] == 0){
								finais[i] = this.passo;
								document.getElementById("bubbleFim").innerHTML = finais[0];
								document.getElementById("insertionFim").innerHTML = finais[1];
								document.getElementById("selectionFim").innerHTML = finais[2];
								document.getElementById("quickFim").innerHTML = finais[3];
								document.getElementById("countingFim").innerHTML = finais[4];
								document.getElementById("heapFim").innerHTML = finais[5];
								document.getElementById("mergeFim").innerHTML = finais[6];
								document.getElementById("radixFim").innerHTML = finais[7];
								document.getElementById("shellFim").innerHTML = finais[8];
								document.getElementById("pancakeFim").innerHTML = finais[9];
							}
						}
					}else{
						this.escondeFrame(suporte[i][0], i);
					}
				}
				console.log(finais)
				this.passo += 1;
				this.atualizapasso();
				this.exibeNomes();
				if (running === false) {
					clearInterval(this.animacao);
				}
			}, delay);
		};

		this.zerar = function(suporte) { //zera tudo
			this.passo = 0;
			clearInterval(this.animacao); //reseta o setInterval da animacao
			this.exibepasso(suporte);
			for (let i = 0; i < this.nomes.length; i++) {
				this.nomes[i][1] = "#FFFFFF";
			}
			this.exibeNomes();
		};

		this.pausar = function() { //pausa a animação
			clearInterval(this.animacao);
		};
		
		this.escondeFrame = function(frame, y_axis){ //deixa os blocos invisiveis para não aparecer na tela
			for (let i = 0; i < frame.length; i++) {
				this.exibeBloco(
					i * this.blocoLargura + this.distY, y_axis * this.blocoAltura + this.distX, frame[i], "#4682B4");
			}
		}
	}
}

//Gerando o vetor com numeros aleatorios
function geraLista(num) {
	//criando um array vazio para receber os valores das ordenacoes
	let arr = [];
	for (let i = 1; i <= num; i++) {
		//Constroi os blocos com tamanhos aleatorios entre 1 e 20 e os colore com as cores dentro da classe Tela
		arr.push(Math.floor(Math.random() * 19 + 1));
	}
	//console.log(arr);
	return arr;
}

//chamada dos algoritmos
function rodar(arr) {
	//cria um array que recebera os passos de cada algoritmo
	let recebePassos = [];
	recebePassos.push(bubbleSort(arr.slice(0)));
	recebePassos.push(insertionSort(arr.slice(0)));
	recebePassos.push(selectionSort(arr.slice(0)));
	recebePassos.push(quickSortRec(arr.slice(0)));
	recebePassos.push(countingSort(arr.slice(0)));
	recebePassos.push(heapSort(arr.slice(0)));
	recebePassos.push(mergeSort(arr.slice(0)));
	recebePassos.push(radixSort(arr.slice(0)));
	recebePassos.push(shellSort(arr.slice(0)));
	recebePassos.push(pancakeSort(arr.slice(0)));
	return recebePassos;
}

function mostrarBlocos(boxes, tela){ //detecta se os sorts estão selecionados para aparecer
	for (let i =0; i < boxes.length; i++){
		if (document.querySelector(boxes[i]).checked){
			tela.permitido[i] = 1;
		} else {
			tela.permitido[i] = 0;
		}
	}
}

//Comandos da pagina

//Resetar tudo
document.querySelector("#Resetar").onclick = function() {
	mostrarBlocos(opVisualiza, tela)
	let listaAtual = geraLista(numeroAleatorio);
	passoAtual = rodar(listaAtual);
	tela.zerar(passoAtual);
};

//Rodar as visualizações dos algoritmos
document.querySelector("#Simular").onclick = function() {
	tela.exibeSorts(passoAtual);
};

//Pausar a simulação dos algoritmos
document.querySelector("#Pausar").onclick = function() {
	tela.pausar();
};

//Ver cada passo dos algoritmos para frente
document.querySelector("#Avanca").onclick = function() {
	tela.passo += 1;
	tela.exibepasso(passoAtual);
};

//Ver cada passo dos algoritmos para tras
document.querySelector("#Retrocede").onclick = function() {
	if (tela.passo > 0) {
		tela.passo -= 1;
	}
	tela.exibepasso(passoAtual);
};

//Verifica se as opcoes checkbox estao flegadas para visualizacao do algoritmo
let opVisualiza = ["#bubble_check", "#insertion_check","#selection_check","#quick_check", "#counting_check",
					"#heap_check", "#merge_check", "#radix_check", "#shell_check", "#pancake_check"]

for(var i = 0; i < opVisualiza.length; i++) {
    document.querySelector(opVisualiza[i]).addEventListener('change', function(){
        mostrarBlocos(opVisualiza, tela);
    });
}

//Execução do codigo
let passoAtual = []; 
//cria o canvas, recebe 3 parametros. A superficie, o contador e os nomes dos algoritmos
let tela = new Tela(
	document.querySelector("#surface").getContext("2d"),
	document.querySelector("#Contador"),
	[
		//Define os nomes dos algoritmos
		["Bubble", corBranca],
		["Insertion", corBranca],
		["Selection", corBranca],
		["Quick", corBranca],
		["Counting", corBranca ],
		["Heap", corBranca],
		["Merge", corBranca],
		["Radix", corBranca],
		["Shell", corBranca],
		["Pancake", corBranca]
	]
);

document.querySelector("#Resetar").click();