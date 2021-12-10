<template>
  <div>
     <div v-if="loading" class="loading">
      Loading...
    </div>
    <form class="form-signin">
  <h1 class="h3 mb-3 font-weight-normal">Please Sign In</h1>
  <label for="inputEmail">Email address</label>
  <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address">
  <label for="inputPassword" >Password</label>
  <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" >
  <br/>
  <button class="btn btn-lg btn-primary btn-block" type="button" v-on:click="login()">Sign in</button>
</form>
  </div>
</template>
<script>
import axios from "axios";

export default {
   name: 'login',
   data() {
      return {
        email: "neng87@gmail.com",
        password: "123",
      }
   },
   methods: {
      login(){
          var self = this;
          axios.post(this.restUrl+'users/authenticate', {
            email: this.email,
            password : this.password,
          })
          .then(function (response) {
            if( response.data.status=="success" ){
                console.log(response.data.data);
                if (response.data.data) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(response.data.data));
                    //axios.defaults.headers.common['x-access-token'] = response.data.data.token;
                }
                self.$router.push('movieList');
            }else{
                alert(response.data.message);
            }
          })
          .catch(function (error) {
            alert("Back End Error Please Contract Administrator");
            console.log(error);
          });
      },
   }

}
</script>