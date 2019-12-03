<template>
  <div class="text-md-center">
  
    <v-flex  xs4 offset-xs4>
    <v-card>
        <h2>Login</h2>
 <v-form @submit.prevent="submit">

    <v-container>
      <v-flex offset-xs2>
       <v-col cols="12" sm="10" md="10">
          <v-text-field
          v-model="login.email"
            label="Enter Email"
            placeholder="example@email.com"
            outlined
          ></v-text-field>
        </v-col>
       <v-col cols="12" sm="10" md="10">
          <v-text-field
            v-model="login.password"
            label="Enter Password"
             placeholder="********"
            outlined
            type="password"
          ></v-text-field>
        </v-col>
      </v-flex>
       <v-btn type="submit">
      Login
    </v-btn>
    
    </v-container>
 </v-form>
 <p class="text">Don't have an account <router-link to="/register"> <a class="link">Register here</a></router-link></p>
  </v-card>
    </v-flex>
  </div>
</template>

<script>
/*eslint-disable no-console */
import {mapActions} from "vuex"
export default {

  data(){
    return{
   login:{
      email:"",
      password:""
    }
    }
 
  },
  methods:{
    ...mapActions({
      signIn: 'auth/signIn'
    }),
   
   submit(){
   this.signIn(this.login).then(()=>{
  
     this.$router.replace({
       name: 'Dashboard'
     }).catch(()=>console.log('Failed'))
   })
    }
}
}
</script>
<style scoped>
.v-card{
  margin-top: 5em;
}
h2{
  padding: .75em;
}
.v-btn{
  margin-bottom:2em;
}
.text{
 padding-bottom: 2em;
}
.link{
  color: #1976d2
}
a:not([href]):not([tabindex]) {
    color: #1976d2;
    text-decoration: none;
}
a:not([href]):not([tabindex]):hover {
    color: #1976d2;
    text-decoration: underline;

}

</style>