<template>
  <div class="about">
     <div class="text-md-center">
    <template>
     
  <div class="text-md-center">
 
     <v-flex xs4 offset-xs4>

       <!-- SUCCESS MESSAGE MOVED TO LOGIN COMPONENT BY PROPS -->
        <!-- <div v-if="registerForm.successMessage" class="success-message">{{registerForm.successMessage}}</div> -->
    <v-card  >
      
    <h2>Register</h2>
 <v-form @submit.prevent="validateBeforeSubmit">

    <v-container>
    <v-flex offset-xs2>
       <v-col cols="12" sm="10" md="10">
           <span class="form-error">{{ errors.first('firstname') }}</span>
          <v-text-field
          v-validate="'required'"
          name="firstname"
          :class="{'input-error': errors.has('firstname')}"
          v-model="registerForm.firstname"
          label="Enter First Name"
          outlined
          type="text"
          ></v-text-field>
        
          
 
         
        </v-col>
       <v-col cols="12" sm="10" md="10">
          <span class="form-error">{{ errors.first('lastname') }}</span>
          <v-text-field
            v-validate="'required'"
            name="lastname"  
            :class="{'input-error': errors.has('lastname')}"
            v-model="registerForm.lastname"
            label="Enter Last Name"
            outlined
            type="text" 
          ></v-text-field>
       
        </v-col>

       <v-col cols="12" sm="10" md="10">
          <span class="form-error">{{ errors.first('email') }}</span>
          <v-text-field
            name="email"
            :class="{'input-error': errors.has('email')}"
           v-validate="'required|email'"
            v-model="registerForm.email"
            label="Enter Email"
            placeholder="example@email.com"
            outlined
            type="email"
          
          ></v-text-field>
        
         
        

        </v-col>
       <v-col cols="12" sm="10" md="10">
            <span class="form-error">{{ errors.first('password') }}</span>
          <v-text-field
            name="password"
            :class="{'input-error': errors.has('password')}"
          v-validate="'required|min:6'"
            v-model="registerForm.password"
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
      <v-btn type="submit" :disabled="registerForm.loading">
      Register
      <span v-if ="registerForm.loading">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </span>
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
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
  import {mapActions} from "vuex"
export default {

  data(){
    return{
      registerForm:{
       firstname:"",
       lastname:"",
        email:"",
        password:"",
        successMessage:"",
        loading: false
      
      }
    }
  },
  methods:{
    ...mapActions({
         register: 'auth/register'
    }),

    // This method ensures that the form is not submitted if it has errors until they are corrected
        validateBeforeSubmit() {
      this.$validator.validate().then((result) => {
        if (result) {
      this.registerMe();
       
        }

        // alert('Correct them errors!');
      });
    },
    async registerMe(){
       this.registerForm.loading = true
      this.register(this.registerForm).then(()=>{
         this.registerForm.loading = false
      this.registerForm.successMessage = "Registered Successfully!"

      // how i redirected before adding a success message

    //  this.$router.replace({
    //    name: 'Login' })

    // passing parameters to different routes while redirecting 
    // dataSuccessMessage is the props that we will be passing down to a different route
     this.$router.replace({
       name: 'Login', params:{dataSuccessMessage: this.registerForm.successMessage} })



    
   })
     
    }
  }
}


</script>

 <style scoped>

 .form-error{
   font-size: 12px;
   color: #a94442;

 }
 .input-error{
border: 1px solid red;
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



//  Notes

// 1. the :class in the text-field binds the class input-error with the text-field
// 2. it generally says if the text-field has errors the class input-error is active