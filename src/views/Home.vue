<template>
    <div class="Home">
        <h1>To Do List App for HM2</h1>
        <h3>Sign-In Above to Get Started</h3>
    </div>
</template>

<script>
    import { auth } from "@/firebaseConfig"
    export default {
        name: "Home",
        
        beforeCreate: function() {
            auth.onAuthStateChanged(user => {
                if (user) {
                    this.$router.push("/todos")
                }
            })
        },
    }
</script>

<style scoped>
</style>