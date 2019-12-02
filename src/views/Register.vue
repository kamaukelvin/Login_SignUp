<template>
  <div class="about">
     <div class="text-md-center">
    <template>
  <div class="text-md-center">
 
     <v-flex xs4 offset-xs4>
    <v-card  >
      
    <h2>Register</h2>
 <v-form @submit="registerMe">

    <v-container>
    <v-flex offset-xs2>
       <v-col cols="12" sm="10" md="10">
          <v-text-field
          v-model="register.username"
            label="Enter Username"
            outlined
          ></v-text-field>
        </v-col>
       <v-col cols="12" sm="10" md="10">
          <v-text-field
          v-model="register.email"
            label="Enter Email"
            placeholder="example@email.com"
            outlined
          ></v-text-field>
        </v-col>
       <v-col cols="12" sm="10" md="10">
          <v-text-field
          v-model="register.password"
            label="Enter Password"
             placeholder="********"
            outlined
            type="password"
          ></v-text-field>
        </v-col>
        <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Agree to the Terms and Conditions?"
      required
    ></v-checkbox> -->
     
    </v-flex>
      <v-btn type="submit">
      Register
    </v-btn>
    </v-container>
 </v-form>
 <p class="text">Already have an account <router-link to="/login"> <a class="link">Login here</a></router-link></p>
  </v-card>
     </v-flex>
  </div>
</template>
  </div>
  </div>
</template>
<script>
/*eslint-disable no-console */
import axios from "axios"

export default {

  data(){
    return{
      register:{
       name:"",
        email:"",
        username:""
      }
    }
  },
  methods:{
    registerMe(){
      axios.post("https://jsonplaceholder.typicode.com/users",this.register)
      .then(res=>{ 
         console.log (res.data) 
        // obtaining the token from api 
        let token = res.data.email

        // storing the token from the api
        // first parameter in round brackets is name of token in localstorage, can be any word you choose
        // second parameter is the token from api as set by the variable above
        localStorage.setItem('token',token)
        console.log(token)
      })
      .catch(err=>console.log(err))
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