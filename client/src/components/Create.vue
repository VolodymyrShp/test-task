<template>
    <div>
        <form method="post">
            <label for="login">Login:</label>
            <input type="text" name="login" v-model="login">
            <label for="firstName">Firs Name:</label>
            <input type="text" name="firstName" v-model="firstName">
            <label for="lastName">Last Name:</label>
            <input type="text" name="lastName" v-model="lastName">
            <label for="email">Email:</label>
            <input type="text" name="email" v-model="email">
            <button>Cancel</button>
            <button @click="save">Save</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'Create',
    data() {
        return {
            posts: {
                login: null,
                fristName: null,
                lastName: null,
                email: null,
            }
        }
    },
    methods: {
        async save() {
            try {
                await axios.post('', {
                    login: this.login,
                    fristName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                });
                this.login='',
                this.firstName='',
                this.lastName='',
                this.email='',
                this.$router.push('/')

            } catch (erorr) {
                console.log(erorr)
            }
        }
    },
}
</script>