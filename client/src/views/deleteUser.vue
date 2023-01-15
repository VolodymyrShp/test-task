<script >
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()
export default {
    methods: {
        userDelete() {
            let result = axios.delete(`http://localhost:8080/user/delete/${this.$route.params.id}`)
            if (this.$route.params.id) { this.$router.push({ path: '/' }) }
        }
    }
}

</script>

<template>

    <div class="popup__delete-confirm">
        <div class="popup__inner">
            <p>Are you sure</p>
            <hr>
            <button class="close" @click="$router.push('/')">No</button>
            <button v-on:click="userDelete" class="yes">Yes</button>
        </div>
    </div>

</template>
