<template>
  <div id="app">
    <div class="container">
      <h2 class="text-center mt-4">{{ title }}</h2>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title:'Vue Chat' 
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');


  h1,h2,h3,h4,h5,p,a,label {
    font-family: 'Ubuntu', sans-serif;
  }

  ul{
    list-style: none;
  }

</style>
