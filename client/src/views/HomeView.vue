<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
    setup() {
        const users = ref("");
        axios.get("http://localhost:8080/users", {
            headers: {
                "Accept-Type": "application/json;",
            }
        })
            .then(res => users.value = res.data.users);
        return {
            users,
        };
    },
}
</script>
<template>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Login</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody id="data__output">
            <tr v-for='user in users'>
                <td>{{ user.id }}</td>
                <td>{{ user.login }}</td>
                <td>{{ user.first_name }}</td>
                <td>{{ user.last_name }}</td>
                <td>{{ user.email }}</td>
                <td><button @click="$router.push(`edit/${user.id}`)">Edit</button></td>
                <td><button @click="$router.push(`user/delete/${user.id}`)">Delete</button></td>
            </tr>
        </tbody>
    </table>
    <button @click="$router.push('create')">Create New User</button>
</template>
