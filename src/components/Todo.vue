<template>
    <div v-if="!task.completed"><router-link :to="{name:'TodoView', params: {id: task.id}}"> {{ task.task }}</router-link>  </div>
</template>

<script>
import {db} from "../firebaseConfig.js"
export default {
    name: "Todo",
    props: ["id"],
    data: function() {
        return {
            task: null,
        };
    },
    firestore: function() {
        return {
            task: db.collection("tasks").doc(this.id)
        }
    }
}
</script>

<style scoped>
.clickable {
    cursor: pointer;
    color:red;
}
</style>