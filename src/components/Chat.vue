<template>
    <div class="container">
        <div class="card py-5">
            <div class="card-body">
                <h3>Chatting {{ name }}</h3>
                <ChatMessage :name="name" /> 
            </div>
        </div>
    </div>
</template>

<script>
import ChatMessage from './ChatMessage.vue'; 

export default {
    name:'Chat', 
    components:{
        ChatMessage, 
    },
    props:['name'], 
}
</script>

<style scoped>

</style>