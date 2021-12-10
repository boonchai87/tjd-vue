<template>
        <div>
          <table class="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
                <tr v-for="p in displayedPosts" :key="p.suffix">
                  <td>{{p.first}}</td>
                  <td>{{p.last}}</td>
                  <td>{{p.suffix}}</td>
                </tr>
          </tbody>
        </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#!" tabindex="-1" aria-disabled="true" v-if="page != 1" @click="page--">Previous</a>
                </li>
                <template v-for="pageNumber in pages.slice(page-1, page+5)">
                    <li class="page-item" :key="pageNumber">
                        <a class="page-link" href="#!" @click="page = pageNumber">{{pageNumber}}</a>
                    </li>
                </template>
                <li class="page-item" v-if="page < pages.length">
                  <a class="page-link" href="#!" @click="page++" >Next</a>
                </li>
              </ul>
            </nav>
        </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import $ from 'jquery';

export default {
  name: 'retrive',
  data(){
      return {
        posts : [],
        rows :[],
        page: 1,
        perPage: 10,
        pages: []
      };
  },
  methods:{
      setPages () {
        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
            this.pages.push(index);
        }
      },
      paginate () {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  this.posts.slice(from, to);
      },
      delete(id){
         axios.delete(id);
      },
      showSpinner(){
         $('#sprinner').show();
      },
      hideSpinner(){
         $('#sprinner').hide();
      },

  },
  computed: {
		displayedPosts() {
			return this.paginate();
		}
	},
	watch: {
		posts() {
			this.setPages();
		}
  },
  created: function() {
    this.showSpinner();
    //mock data
    for(let i = 0; i < 200; i++){
          this.posts.push({first: 'John'+i,
                last:'Doe'+i, 
                suffix:'#' + i});
    }
    this.hideSpinner();
	},
	filters: {
		
  },
   mounted: function() {
      
  },
}
</script>