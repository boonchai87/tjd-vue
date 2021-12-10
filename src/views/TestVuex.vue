<template>
  <div>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    countLink:{{ countLinks }}
  </div>
</template>

<script>
// https://coursetro.com/posts/code/144/A-Vuex-Tutorial-by-Example---Learn-Vue-State-Management
export default {
  name: "testVuex",
  data() {
    return {
      //username: "neng",
    };
  },
  computed: {
    count: function() {
      return this.$store.state.count;
    },
    countLinks:function(){
      return this.$store.getters.countLinks;
    }
  },
  methods: {
    increment() {
       //this.$store.commit("increment");
       this.$store.dispatch('increment2');
    },
    decrement() {
       this.$store.commit("decrement");
    }
  }
};
</script>
