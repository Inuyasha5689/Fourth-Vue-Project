new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0,
        link: 'http://google.com'
    },
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            return this.counter > 5 ? 'Greater than 5': 'Smaller than 5';
        },
        changeLink: function() {
            this.link = 'http://apple.com';
        }
    }
});