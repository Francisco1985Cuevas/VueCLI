/*
//Para resolver este problema, usamos lo que en JavasCript 
//se llama el enfoque imperativo donde definimos paso a paso 
//que debe ejecutar el navegador...

const buttonEl = document.querySelector('button'); //obtenga el acceso al boton
const inputEl = document.querySelector('input'); //obtenga el acceso al elemento de entrada
const listEl = document.querySelector('ul'); //obtenga el acceso al elemento de la lista

//crea una funcion
function addGoal () {
	const enteredValue = inputEl.value;	//obtenga acceso al valor ingresado
	const listItemEl = document.createElement('li'); //cree un elemento de element List
	listItemEl.textContent = enteredValue; //agrega el contenido del texto
	listEl.appendChild(listItemEl); //agregue este elemento de lista al valor.
	inputEl.value = '';
}

//agregue un controlador de eventos de click al boton y ejecute esta funcion si hago click...
buttonEl.addEventListener('click', addGoal); //la funcion se ejecuta cuando ocurre un click
*/




//Vue.js presenta otro enfoque o otra manera de resolver este mismo problema..
//Definimos el resultado final deseado y los datos que necesitaremos en nuestra aplicacion Vue.js
//y lo dejaremos para ser visualizado.
Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: ''
		};
	},
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = '';
		}
	}
}).mount('#app');