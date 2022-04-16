const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      //event.preventDefault();
      alert("Submitted!");
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      //this.counter--
      this.counter = this.counter - 1;
    },
    addNum(num) {
      this.counter = this.counter + num;
    },
    reduceNum(num) {
      this.counter = this.counter - num;
    }
  }
});

app.mount('#events');
