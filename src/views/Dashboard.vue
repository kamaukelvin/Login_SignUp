<template>
  <div>
      <h1>Welcome {{firstname}}</h1>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  
  computed:{
    ...mapGetters({
   getUser: 'auth/getUser'
  
    })

    
  }

}
</script>

<style>

</style>