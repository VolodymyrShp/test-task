<script>

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
        <tbody id="data-output">
            
        </tbody>

    </table>
</template>
/*fetch('database.json')
.then(function (response) {
    return response.json();
})
.then(function (users) {
    let placeholder = document.querySelector('#data-output');
    let out = ''
    for (let item of users) {
        out += `
        <tr>
            <td>${item.id}</td>
            <td>${item.login}</td>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td>${item.email}</td>
            <td></td>
            <td></td>
        </tr>
    `;
    }
    placeholder.innerHTML = out
})*/