<template>
<div class="auth">

    <template v-if="!user">
      <a href @click.prevent="signInWithGoogle">Sign in w/ Google</a>
    </template>

    <template v-if="user">
      
      <img :src="user.photoURL" alt="avatar" style="width: 50px; height: 50px; border-radius: 50%;">
      <a href @click.prevent="signOut">Sign Out</a>
    </template>
  </div>
</template>

<script>
import { auth, provider } from "@/firebaseConfig";
export default {
    components: {},
    name: "Auth",
  data() {
    return {
      user: null
    };
  },
  beforeCreate: function() {
    auth.onAuthStateChanged(user => {
      if (user) {        
        this.user = user;
      }
    });
  },
  methods: {
    signInWithGoogle: function() {
      auth.signInWithRedirect(provider)
        .then(result => {
          this.user = result.user;
        })
        .catch(err => console.log(err));
    },
    signOut: function() {
      auth.signOut()
        .then(() => {
          this.user = null;
          this.$router.push('/')
        })
        .catch(err => console.log(err));
    }
  }
};
</script>