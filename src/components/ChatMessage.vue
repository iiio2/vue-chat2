<template>
    <div>
        <div>
          <ul v-chat-scroll>
              <li v-for="message in messages" :key="message.id">
                  <span class="name">Name: {{ message.name }}</span>
                  <span class="message">Message: {{ message.message }}</span>
                  <span class="time">Time: {{ message.time }}</span>
              </li>
          </ul>  
        </div>
        <form @submit.prevent="addMessage">
            <div class="form-group">
                <input type="text" name="message" class="form-control" v-model="message" />
            </div>
        </form>
    </div>
</template>

<script>

import db from '../firebase/init'; 
import moment from "moment"; 

export default {
    props:['name'], 
    data(){
        return {
            message:'', 
            messages:[], 
        }
    },
    created(){
        db.collection('messages').orderBy('time').onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type == 'added'){
                    var doc = change.doc; 
                     this.messages.push({
                         id:doc.id, 
                         name:doc.data().name,
                         message:doc.data().message, 
                         time:moment(doc.data().time).format('lll'), 
                     })
                }
            })
        })
    },
    methods:{
        addMessage(){
            if(this.message.trim().length == 0){
                return; 
            }
            db.collection('messages').add({
                name:this.name, 
                message:this.message, 
                time:Date.now(), 
            }) 
            this.message = '';
        }, 
    }
}
</script>

<style scoped>
    span{
        display: block;
    }
    .name{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .message{
        font-size:1rem; 
    }
    .time{
        font-size:.85rem; 
    }
    ul{
        max-height: 300px;
        overflow: auto;
    }
    li{
        margin: 5px 0; 
        padding: 4px 8px; 
        border:none; 
        border-radius: 10px;
    }
    ul li:nth-of-type(even) {
        background: #dfe6e9;
    }
    ul li:nth-of-type(odd){
        background: #b2bec3;
    }
</style>