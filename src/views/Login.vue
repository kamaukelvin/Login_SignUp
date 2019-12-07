<template>
  <div class="text-md-center">
  
    <v-flex  xs4 offset-xs4>
        <div v-if="login.successMessage" class="success-message">{{login.successMessage}}</div>
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
       <v-btn type="submit" :disabled="login.loading">
        
      Login 
<span v-if ="login.loading">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </span>
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
// accept our successmessage props
props:{
  dataSuccessMessage:{
    type:String
  }
},
  data(){
    return{
   login:{
      email:"",
      password:"",
      successMessage: this.dataSuccessMessage,
      loading:false
    
    }
    }
 
  },
  methods:{
    ...mapActions({
      signIn: 'auth/signIn'
    }),
   
   submit(){
     this.login.loading = true
   this.signIn(this.login)
   .then(()=>{
      this.login.loading = false
     this.$router.replace({
       name: 'Dashboard'
     })
   })
   .catch(error=>{
      this.login.loading = false
     this.login.serverError = error.response,
     this.login.password = "",
     this.login.successMessage = ""
   })
    }
},

}
</script>
<style scoped>
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: forestgreen;
}
.v-btn__content {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    -webkit-box-pack: inherit;
    -ms-flex-pack: inherit;
    justify-content: inherit;
    line-height: normal;
    position: relative;
    padding: 0 7em;
}

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
.success-message{
  background-color:#dff0d8;
  color:#3c763d;
  margin-top: 12px;
  font-size: 16px;
  padding: 10px 16px;
  border-radius: 4px;
}
.v-btn [submit]
.disabled{
  background: lighten(#60BD4F, 25%);
  cursor:not-allowed; 
}


/* css spinner */
.lds-ring {
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  margin: 8px;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>