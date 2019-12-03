/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import store from "@/store"
import axios from "axios"

store.subscribe((mutation)=>{
switch (mutation.type){
    case 'auth/SET_TOKEN':
        if (mutation.payload){
            axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
            // storing our token to the sessionStorage
            sessionStorage.setItem('token',mutation.payload)
        } else{
            axios.defaults.headers.common['Authorization'] = null
            sessionStorage.removeItem('token')
        }
        // console.log(mutation.payload)
        break;
}
})

// NOTES

// 1. subscriber is used to pass in headers to our request instead of doing it manually with every request we make
// 2. THE code just says in case the mutation is of type SET_TOKEN pass in the headers as the token otherwise pass null as the headers
// 3. mutation.payload is the value of the mutation
// i.e for our mutation SET_TOKEN its value(payload)is the token 