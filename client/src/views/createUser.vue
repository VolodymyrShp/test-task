<script>
import axios from 'axios'
import { ref } from 'vue'
import router from '../router'
let user = [].length
const getUser = axios.get('http://localhost:8080/users').then(response => user = response.data.users)
export default {
    data() {
        return {
            id: '',
            login: '',
            first_name: '',
            last_name: '',
            email: '',
            
        }
    },
    methods: {
        submitForm() { 
            let id = user.length + 1
            axios.post('http://localhost:8080/user/create', {
                id: id,
                login: this.login,
                first_name: this.name,
                last_name: this.last,
                email: this.email,
            }).then(response => {
                this.success = 'Data saved successfully';
                this.response = JSON.stringify(response, null, 2)
                if(id){
                    router.push({path: '/'})
                }
            }).catch(error => {
                this.response = 'Error: ' + error.response.status
            })
            this.id = '',
            this.login = '',
            this.name = '';
            this.last = '',
            this.email = '';
            
        }
    }
}
</script>
<template>
    <form action="" @submit.prevent="submitForm">
        <label for="login">Login:</label>
        <input type="login" id="login" v-model="login">
        <label for="name">First Name:</label>
        <input type="text" id="name" v-model="name">
        <label for="last">Last Name:</label>
        <input type="text" id="last" v-model="last">
        <label for="email">Email:</label>
        <input type="email:" id="email" v-model="email">
        <div>
            <button class="Form-cancel" @click="$router.push('/')">Cancel</button>
            <button class="Form-save" type="submit">Save</button>
        </div>
    </form>



</template>
