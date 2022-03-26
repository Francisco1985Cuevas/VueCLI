const app = Vue.createApp({
	data() {
		return {
			courseGoal: 'Finish the course and learn Vue!',
			vueLink: 'https://vuejs.org/'
		};
	}
});

app.mount('#user-goal');

/*
generar datos con interpolacion

generar datos
la sintaxis {{}} solo esta disponible para etiquetas html
Para pasar un valor dinamico a un atributo en HTML usamos la sintaxis de enlace de Vue, directiva Vue

v-bind : es un nombre reservado, detectado y entendido por Vue.js, una directiva es basicamente
una instruccion, una instruccion que le damos a Vue.js para que haga algo, v-bind le dice a Vue.js
que vincule, para que establezca el valor de algo. Que puede ser un atributo en un elemento HTML.

 */