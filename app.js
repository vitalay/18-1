const App = {

  
    data() {
      return {
        
        placeholderString: 'Введите название',
        title: 'Список заметок',
        inputValue: '',
        notes: ['Первая заметка', 'Вторая заметка', 'Третья заметка']
      }
    },
    
    methods: {
    
         addHandler() {
            if (this.inputValue === '') {
                return
            }
             this.notes.push(this.inputValue)
           
             this.inputValue = ''

             
         },
        
         toUpperCase(item) {
             return item.toUpperCase()
         },
         removeNote(idx) {
             this.notes.splice(idx, 1)
            

         }
    
  },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }, 
    },
    watch: {
        doubleCountComputed() {
            console.log(this.doubleCountComputed)
        }
    }
  }

  Vue.createApp(App).mount('#app')