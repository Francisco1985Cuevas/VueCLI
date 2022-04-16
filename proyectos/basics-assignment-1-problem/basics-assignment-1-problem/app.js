const app = Vue.createApp({
	data() {
		return {
			name: 'Maximilian',
			age: 31,
			imageUrl: 'http://upload.wikimedia.org/wikipedia/'
		};
	},
	methods: {
		calculateAge() {
			return this.age + 5;
		},
		calculateRandom() {
			return Math.random();
		}
	}
});

app.mount('#assignment');