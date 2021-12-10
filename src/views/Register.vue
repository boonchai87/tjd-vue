<template>
  <div>
    <form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">Register</h1>
  <label for="inputName">Name</label>
  <input type="text" id="inputName" v-model="name" class="form-control" placeholder="Email address">

  <label for="inputEmail">Email address</label>
  <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" >
  
  <label for="inputPassword" >Password</label>
  <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" >
  <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="register()">Register</button>
</form>
  </div>
</template>
<script>
import axios from "axios";

export default {
   name: 'register',
   data() {
      return {
        name: "",
        email: "",
        password: "",
      }
   },
   methods: {
      register(){
          axios.post(this.restUrl+'users/register', {
            name: this.name,
            email: this.email,
            password : this.password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
   }

}
</script>