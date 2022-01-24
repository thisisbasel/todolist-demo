<template>
<div>

    <h1>Your To Do List</h1>
    
        <todo class="oneLine" v-for="task in tasks" :key="task.id" :id = "task.id"/>
    
    <input v-model="newTask" />
    <button @click="addTask" > Add Task </button>
    <br>
    <br>
    <router-link to="/done">Go to Done Page</router-link>
</div>
</template>
<script>
import {db} from "../firebaseConfig.js"
import todo from "../components/Todo.vue"
export default {
    components: {todo},
    name: "ToDos",
    data: function() {
        return {
            tasks: [],
            newTask: "",
        }
    },


    
    firestore: {
        tasks: db.collection("tasks").orderBy('dateTime', 'desc')
    },

    methods: {
        addTask: function() {
            const newTaskRecord = {task: this.newTask, dateTime: new Date()};
            db.collection("tasks").add(newTaskRecord)
        },
    },
}
</script>


<style scoped>
.oneLine {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
padding: 1% 30% 1% 30%;
}
</style>