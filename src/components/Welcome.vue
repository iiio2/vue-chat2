<template>
    <div class="container">
        <h3 class="text-center mb-4">Welcome!</h3>
        <div class="card py-5">
        <div class="card-body">
        <form @submit.prevent="enterChat">
            <div class="form-group text-center">
            <label for="name">Write Your Name</label>
            <input type="text" name="name" class="form-control" v-model="name" />
            </div>
            <p class="text-danger text-center">{{ feedback }}</p>
            <input type="submit" class="btn btn-success btn-lg" value="Submit" />
        </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Welcome', 
    data(){
        return {
            name:'',
            feedback:'',  
        }
    }, 
    methods:{
        enterChat(){
            if(this.name.trim().length == 0){
                this.feedback = 'Please write your name'
                return; 
            }
            if(this.name.trim()){
                this.$router.push({name:'Chat', params:{name:this.name}})
                this.name = ''; 
                this.feedback = '';
            }
        }
    }
}
</script>

<style scoped>
    input[type=text]{
        width:50%; 
        display:block; 
        margin: 0 auto; 
    }
    input[type=submit]{
        display:block; 
        margin:0 auto; 
    }
</style>