<template>

<div>
    
    <h1>Your Completed Tasks</h1>

        <doneTodo class="doneTodo" style="text-decoration: line-through" v-for="task in tasks" :key="task.id" :id = "task.id"/>
        <br>
        <br>

        <router-link to="/todos">Go to ToDo list</router-link> 
 
</div>

</template>
<script>
import {db} from "../firebaseConfig.js"
import DoneTodo from "../components/DoneTodo.vue"
export default {
    components: {DoneTodo},
    name: "Store",
    data: function() {
        return {
            tasks: [],
            newTask: "",

        }
    },
    
    firestore: {
        tasks: db.collection("tasks").orderBy('dateTime', 'desc')
    },
    
}
</script>


<style scoped>
.doneTodo {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
padding: 1% 30% 1% 30%;
}
</style>
