new Vue({
    el: '#app',
    data: {
        message: 'Vue.js',
        age: '32',
        isStudent: false,
        name: 'Daler',
        string: 'My name is Daler'
    },
    methods: {
        sayHello: function() {
            return 'Hello my name is ' + this.name
        }
    }
});