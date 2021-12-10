<template>
        <div>
          <h2>เพิ่มรายการ</h2>
          <form>
              <label for="email">ชื่อ:</label>
              <input type="text" class="form-control" id="name" v-model="name">
              
              <label for="email">Release ON:</label>
              <input type="text" class="form-control" id="name" v-model="released_on">
            
            <button type="button" class="btn btn-primary" @click="create()" v-show="mode=='create'">สร้าง</button>
            <button type="button" class="btn btn-primary" @click="update()" v-show="mode=='edit'">บันทึก</button>
            <button type="button" class="btn btn-primary" @click="gotoPage('movieList')">ยกเลิก</button>
          </form>
        </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
//import $ from 'jquery';

export default {
  name: 'movieEdit',
  data(){
      return {
        id:'',
        name:'',
        released_on:'2019-05-12',
        mode:'create',
      };
  },
  methods:{
       create(){
          var self = this;
          axios.post(this.restUrl+'movies', {
            name: this.name,
            released_on: this.released_on
          })
          .then(function (response) {
            var status = response.data.status;
            if( status=="success" ){
              alert("success");
              self.$router.push("movieList");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       },
       update(){
          var self = this;
          axios.put(this.restUrl+'movies/'+this.id, {
            name: this.name,
            released_on: this.released_on
          })
          .then(function (response) {
            alert("success");
            self.$router.push("movieList");
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          console.log(this.$route.query.id);
       },
       fetchData(){
         console.log(this.$route.query.id);
       }
  },
  computed: {
	
	},
	watch: {
     
  },
  created: function() {
    //alert(this.getUrlParameter('id'));
    //console.log(this.$router.query);
    //this.id = this.$router.params.id;
    /*if( this.id!="" ){
        alert(this.id);
       
    }*/
   // this.fetchData();
	},
	filters: {
		
  },
  mounted: function() {
      this.id = this.$route.query.id;
      if( this.id ){
        this.mode = 'edit';
        var self = this;
        axios.get(this.restUrl+"movies/"+this.id, {
          })
          .then(function (response) {
            var status = response.data.status;
            if( status=="success" ){
              //console.log(response.data.data.movies);
              var movie = response.data.data.movies;
              self.name = movie.name;
              self.released_on = movie.released_on;
            }else{
              alert("Not found");
              console.log(self.$route);
              self.$router.push("movieList"); 
            }
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          }); 
        }
  },
  beforeMounted: function() {
     console.log("before create"+this.$route.query.id);
  }
}
</script>