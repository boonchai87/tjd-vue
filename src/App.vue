<template>
    <!-- start containter -->
   <div class="container">
   <div class="jumbotron text-center" style="margin-bottom:0">
          <h1>My Vue </h1>
          <p>vue2.0</p> 
        </div>
        <!-- navigation -->
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample03"
              aria-controls="navbarsExample03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample03">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                   <a v-on:click="gotoPage('/')" href="#" class="nav-link">Home</a>
                </li>
                  <li class="nav-item">
                   <a v-on:click="gotoPage('/movieList')"  href="#" class="nav-link">Movie</a>
                  </li>
                  <li class="nav-item">
                   <a v-on:click="gotoPage('/login')" href="#" class="nav-link">Login</a>
                  </li>

                  <li class="nav-item">
                    <a v-on:click="gotoPage('/register')" href="#" class="nav-link">register</a>
                  </li>
                  <li class="nav-item">
                 <a v-on:click="logout()" href="#" class="nav-link">Logout</a>
              </li>
              </ul>
            </div>
          </nav>
        <!--navigation -->
        <div class="row">
          <div class="col">
          <!-- start content -->
              <router-view/>
            </div>
  </div>
  <br/>
  <!-- Footer -->
  <footer class="page-footer font-small bg-dark">
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3 text-light">© 2020 Copyright:
      <a href="https://thaijavadev.blogspot.com/" class="text-light" target="_blank">https://thaijavadev.blogspot.com</a>
    </div>
    <!-- Copyright -->
  </footer>
<!-- Footer -->
</div> <!--end container-->    
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  /*components: {
    HelloWorld
  }*/
  methods:{
        test(){
            return this.authorized;
        },
        openModal(){
                
        },
        closeModal(){

        },
        
    }
}

</script>

<style>
/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

</style>

