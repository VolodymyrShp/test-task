<script>

import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

export default {
    data() {
        return {
            user: {
                login: '',
                first_name: '',
                last_name: '',
                email: '',
            }
        }
    },
    methods: {
        async updateUsers() {
            const getUser = axios.put(`http://localhost:8080/user/edit/${this.$route.params.id}`, {
                id: this.$route.params.id,
                login: this.user.login,
                first_name: this.user.first_name,
                last_name: this.user.last_name,
                email: this.user.email
            })
            if ((await getUser).status === 200) {
                this.$router.push({ path: '/' })
            }
        }
    },
    async mounted() {
        const getUser = axios.get(`http://localhost:8080/user/${this.$route.params.id}`)
        this.user = (await getUser).data
    }
}
</script>
<template>
    <form action="">
        <label for="login">Login:</label>
        <input type="login" id="login" v-model="user.login">
        <label for="name">First Name:</label>
        <input type="text" id="name" v-model="user.first_name">
        <label for="last">Last Name:</label>
        <input type="text" id="last" v-model="user.last_name">
        <label for="email">Email:</label>
        <input type="email:" id="email" v-model="user.email">
    </form>
    <button class="Form-cancel" @click="$router.push('/')">Cancel</button>
    <button v-on:click="updateUsers" class="Form-save" type="submit">Save</button>
</template>