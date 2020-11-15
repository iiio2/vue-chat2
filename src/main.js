import Vue from 'vue'
import App from './App.vue';
import VueChatScroll from 'vue-chat-scroll'; 

Vue.use(VueChatScroll); 

import router from './router'; 


new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
