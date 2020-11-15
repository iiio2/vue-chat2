import Vue from 'vue'; 
import VueRouter from 'vue-router'; 
import Welcome from "./components/Welcome.vue"; 
import Chat from './components/Chat.vue'; 

Vue.use(VueRouter); 


export default new VueRouter({
    mode:'history', 
    routes:[
        {path:'/', component: Welcome, name:'Welcome'},
        {path:'/chat', 
        component:Chat, 
        name:'Chat', 
        props:true, 
        beforeEnter:(to,from,next)=>{
            if(to.params.name){
                next(); 
            }else{
                next({name:'Welcome'})
            }
          }
        }  
    ]
})