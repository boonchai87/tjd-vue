<template>
  <div>
  <!--begin content -->
      Home
  <!--end content -->
</div>
</template>
<script>

// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  data() {
      return {
       
      };
  },
  methods: {
      
  },
	computed: {
	
	},
	watch: {
		
	},
	created(){
   
	},
	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}
}
</script>