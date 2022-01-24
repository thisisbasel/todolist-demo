<template>

<div>
    <h1>Edit Your ToDo</h1>
  
    <router-link to="/todos">Back to ToDo</router-link>
    <br>

    <div class="textContent" v-if="task" > 
    
        {{task.task}}
    </div>

    <form v-if="this.$route.params.id" v-on:submit.prevent="updateTask(task)">
            <input v-model="task.task">
            <br>
            <p>Done<input type='checkbox' v-model='task.completed'></p>
            <button type="submit">Click to Update</button>
    </form>

    <div>(<span class="clickable" @click="doDelete">Delete</span>)</div>
    
    
</div>
</template>
<script>

import { db } from "../firebaseConfig.js"

export default {
    name: "todoView",
    
    props: ["id"],

    data: function() {
        return {
            task: {loading: true}
        };
    },

    beforeUpdate() {
        if (!this.task) {
            this.$router.push('/404'), 
            console.log("404")
            // you could, of course, also use the router to actually go to a 404 page if you wanted.
        }
    },

    firestore: function() {
        return {
            task: db.collection("tasks").doc(this.id)
        }
    },
    methods: {
        updateTask(task) {
            db.collection('tasks').doc(task.id).update(task);
            this.$router.push('/todos')
        },
        doDelete: function() {
            this.$firestoreRefs.task.delete(),
            this.$router.push('/todos')
        
        },
    }
    


}
</script>

<style scoped>
.clickable {
    cursor: pointer;
    color:red;
}
.textContent{
    padding: 5% 30% 5% 30%;
}
</style>