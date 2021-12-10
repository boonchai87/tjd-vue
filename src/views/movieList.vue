<template>
        <div>
          <button type="button" class="btn btn-primary" @click="gotoPage('movieEdit')">เพิ่มรายการ</button>
          <table class="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Released On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                <tr v-for="p in rows" :key="p.id">
                  <td>{{p.name}}</td>
                  <td>{{p.released_on}}</td>
                  <td>
                      <input type="button" @click="edit(p.id)" value="แก้ไข" class="btn btn-secondary"/>
                      <input type="button" v-on:click="deleteObject(p.id)" value="ลบ" class="btn btn-danger"/>
                  </td>
                </tr>
          </tbody>
        </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link"  tabindex="-1" aria-disabled="true" v-if="page != 1" @click="fetchData(page-1)">Previous</a>
                </li>
                <template v-for="pageNumber in pages.slice(page-1, page+5)">
                    <li class="page-item" :key="pageNumber">
                        <a class="page-link"  @click="fetchData(pageNumber)">{{pageNumber}}</a>
                    </li>
                </template>
                <li class="page-item" v-if="page < pages.length">
                  <a class="page-link" @click="fetchData(page+1)" >Next</a>
                </li>
              </ul>
            </nav>
        </div>
</template>

<script>
import axios from "axios";
import $ from 'jquery';

export default {
  name: 'movieList',
  data(){
      return {
        posts : [],
        rows :[],
        page: 1,
        perPage: 10,
        pages: [],
        numberOfPages:0
      };
  },
  methods:{
       fetchData(pageNumber){
          this.showSpinner();
          this.page = pageNumber;
          this.paginate();
          this.hideSpinner();
       },
      setPages () {
        //let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        console.log(" set Page"+ this.numberOfPages);
        this.pages=[];
        for (let index = 1; index <= this.numberOfPages; index++) {
            this.pages.push(index);
        }
      },
      paginate () {
        let page = this.page;
        let perPage = this.perPage;
        //let from = (page * perPage) - perPage;
        //let to = (page * perPage);
        //return  this.posts.slice(from, to);
         let self = this;
            axios.get(this.restUrl+"movies",{
                params: {
                    pageNo:page,
                    pageSize:perPage
                }
            })
            .then(function (response) {
              console.log(response.data);
              //this.rows=response.data.movies;
              self.rows = response.data.data.movies;
              self.numberOfPages = response.data.pages;
              console.log(response.data.pages);
              //https://stackoverflow.com/questions/45216998/accessing-vue-jss-data-from-axios
              console.log(response.data.data.movies);
              self.setPages();
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
      },
      deleteObject(id){
          var ans = confirm("delete ?");
          var self = this;
         if( ans ){
              axios.delete(this.restUrl+"movies/"+id,{

              }).then(function (response) {
                    console.log(response.data);
                    if( response.data.status =="success" )
                      alert("delete completed");
                      //self.$router.push("movieList");
                      self.fetchData(self.page);
                    //console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
                  .finally(function () {
                    // always executed
                  });
            }
      },
      view(){
          // load data
          this.router.push("view");
      },
      edit(id){
            this.$router.push({ path: 'movieEdit', query: { id: id } });
      },
      showSpinner(){
         $('#sprinner').show();
      },
      hideSpinner(){
         $('#sprinner').hide();
      },

  },
  computed: {
	
	},
	watch: {
		
  },
  created: function() {
    //mock data
    this.fetchData(1);
   },
   filters: {
		
  },
   mounted: function() {
      
  },
}
</script>