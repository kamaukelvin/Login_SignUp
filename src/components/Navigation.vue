<template>
<div>
       <v-app-bar
      color="primary"
      dark
    >

      <v-toolbar-title>Login & SignUp</v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!getAuthentication">
        <router-link to="/login" tag="span">
      <v-btn >
      <a>Login</a>
      </v-btn></router-link> 
<router-link to="/register" tag="span">
      <v-btn>
          <a>Register</a>
      </v-btn></router-link> 
      </div >
      <div v-else >
      <v-btn @click.prevent="signOut">
          <a>SignOut</a>
      </v-btn>
      </div> 
    </v-app-bar>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
    name: 'Navigation',
    methods:{
      ...mapActions({
        signOutAction: 'auth/signOut'
      }),
      signOut(){
        
        this.signOutAction().then(()=>{
          this.$router.replace({
            name: 'Login'
          })
        })
      }
      
    },
    computed:{
      ...mapGetters({
        
        getAuthentication: 'auth/getAuthentication',
        getUser: 'auth/getUser'
      })

    }

}
</script>

<style scoped>
.v-btn a{
    color: #fff;
}
.v-btn{
    margin: 0 .75em;
}

</style>