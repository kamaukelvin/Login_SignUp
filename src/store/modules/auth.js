/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import axios from "axios";

export default {
    namespaced: true,
  state: {
    token: null,
     user: null,
  },
  getters: {
      getAuthentication(state){
          return state.token && state.user
      },
      getUser(state){
          return state.user
      }
  },
  mutations: {

      SET_TOKEN(state, token){
          state.token= token
      },
      SET_USER(state, user){
          state.user= user
      },
      
  },
  actions: {
    //   hit the sign in endpoint and receive a token
      async signIn({dispatch},credentials){
        //   we cant pass this.state in the post request, we have to give a name e.g credentials 
        const response = await axios.post('auth/signin',credentials)
        // pass the token received to the validate token method using dispatch
    return  dispatch('validateToken', response.data.token)
      },


    //   authenticate the token received and get the user information
    async validateToken({commit, state}, token){

        // if there is a token we can commit to the mutation SET_TOKEN
        if(token){
            commit ('SET_TOKEN',token)
        }

        // at this point if the state.token is null we dont send the request to authenticate
        if (!state.token){
            return
        }
        
         try{
             const response= await axios.get('auth/me')

            //  committing the user data to the SET_USER mutation
            commit('SET_USER', response.data)
         }
         catch (e){
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
               
         }

    },
// the signout method is not asynchrous coz we want to set the token & user to null once we are sure they are logged out
    signOut({commit}){
        return axios.post('auth/signout').then(()=>{
            commit('SET_TOKEN', null)
                commit('SET_USER', null) 
        })
    }
  }
};


// Notes

// 1. dispatch is used by an action to pass data to another action
// 2. commit is used  by an action to pass data to a mutation
// 3. standard way of denoting mutations is using all caps and underscore
// 4. mutations always take the state as  parameter, and the the data we want to mutate