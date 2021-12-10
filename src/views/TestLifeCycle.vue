<template>
  <div>
    <p> 
    <div style="border: 1px solid black">
      Test Input text
      <input type="text" v-model="username"/>
    </div>
    <div style="border: 1px solid black">
      test Method
      <input type="button" v-on:click="method1('dd')" value="TestMethod"/>
    </div>
     <div style="border: 1px solid black">
      demo list 
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
     </div>
   <div style="border: 1px solid black">
      test Axios
      <input type="button" v-on:click="testCallGet()" value="Test"/>
    </div>
    <div style="border: 1px solid black">
     testAsynchAwait
      <input type="button" v-on:click="testAsynchAwait()" value="Test"/>
    </div>
    <div style="border: 1px solid black">
     Filter
      {{ money | currencydecimal }}
    </div>
     <div style="border: 1px solid black">
     Mixin
      <input type="button" v-on:click="bar()" value="bar"/>
      <input type="button" v-on:click="foo()" value="foo"/>
      <input type="button" v-on:click="conflicting()" value="conflicting"/>
    </div>
    <paginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </paginate>
  </div>
</template>
<script>
import axios from "axios";

export default {
    name: "lifecycle",
    data() {
      return {
        username: "neng",
        number :5,
         items: [
            { message: 'Foo' },
            { message: 'Bar' }
          ],
          money:54545.4443,
      };
    },
    beforeCreate: function() {
      console.log("beforeCreated");
    },
    created: function() {
      console.log("created");
    },
    beforeMounted: function() {
      console.log("beforeMounted");
    },
    mounted: function() {
      console.log("mounted");
    },
    beforeUpdate: function() {
      console.log("beforeUpdate");
    },
    updated: function() {
      console.log("updated");
    },
    beforeDetroy: function() {
      console.log("beforeDetroy");
    },
    destroy: function() {
      console.log("destroy");
    },
    computed: {

    },
    methods: {
      method1(test){
          alert(test+this.username);
      },
      testCallGet(){
          // Optionally the request above could also be done as
          axios.get('https://api.coindesk.com/v1/bpi/currentprice.json', {
              params: {
                ID: 12345
              }
            })
            .then(function (response) {
              alert(response.data.disclaimer);
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            })
            .finally(function () {
              // always executed
            });
      },
      testPost(){
        // https://www.npmjs.com/package/axios
        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
          axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      async testAsynchAwait(){
        // Want to use async/await? Add the `async` keyword to your outer function/method.
        try {
          const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      },
      bar: function () {
        console.log('bar')
      },
      conflicting: function () {
        console.log('from self')
      },
      foo:function(){
        alert(this.authorized);
      },
      clickCallback(pageNum){
        alert(pageNum);
      }
    },
    watch: {
      
    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    }
};
</script>
