const app = Vue.createApp({
    data() {
        return {
            title: 'Shopping List',
            newItem: '',
            newItemHightPriority: false,
            items: [],
            editing: false,
        }
    },computed:{
        reversedItems(){
            return [...this.items].reverse()
          }
    },
    methods: {
        addNewItem() {
            this.items.push({
                id: this.items.length + 1,
                label: this.newItem,
                highPriority: this.newItemHighPriority

            })
            this.newItem = ''
            this.newItemHighPriority = false
        },
        cancel() {
            this.editing = false
            this.newItemHighPriority = false
        },
        togglePurchased(item) {
            item.purchased = !item.purchased
        }
    }
})

app.mount('#app')