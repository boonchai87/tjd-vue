<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top" >
       <router-link to="/" class="navbar-brand">ThaiJavaDev.blogspot.com</router-link>
        <button class="navbar-toggler" type="button" 
          data-toggle="collapse" 
          data-target="#collapsibleNavbar" 
          aria-controls="collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
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
             
              <!--  <li class="nav-item">
                <a v-on:click="gotoPage('/retrive')" class="nav-link">retrive</a>
              </li>	
               <li class="nav-item">
                 <a v-on:click="gotoPage('/testLifeCycle')" class="nav-link">TestLifeCycle</a>
              </li>
              <li class="nav-item">
                  <a v-on:click="gotoPage('/testAxios')" class="nav-link">TestAxios</a>
              </li> -->
            </ul>
          </div>  
      </nav>
      <nav aria-label="breadcrumb" style="margin-top:70px;">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <!--
          <li class="breadcrumb-item"><a href="#">Library</a></li>
          <li class="breadcrumb-item active" aria-current="page">Data</li>
          -->
        </ol>
      </nav>
      <div class="container-fluid" style="margin-top:20px;">
        <router-view/>
      </div>
     <!-- Footer -->
      <br/>
      <footer class="page-footer font-small bg-info">
        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2020 Copyright<br/>
          <a href="https://thaijavadev.blogspot.com">https://thaijavadev.blogspot.com</a>
        </div>
        <!-- Copyright -->
      </footer>
      <!-- Footer -->
      <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!--div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">ผลลัพธ์การสุ่มเลือก</h4>
          </div-->
          <div class="modal-body" id="modalText">
            <h1>ข้าวผัด</h1>
          </div>
          <div class="modal-footer" >
            <button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-primary" onclick="doaction()">ลองใหม่อีกครั้ง</button>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center" id="spinner" style="display: none;">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
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
