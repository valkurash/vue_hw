<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>
                    <router-link :to="`/user/${user.id}`">{{ user.id }}</router-link>
                </td>
                <td>
                    {{ user.firstName }}
                </td>
                <td>
                    {{ user.lastName }}
                </td>
                <td>
                    {{ user.company }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: 'usersTable',
    props: {
        users: {
            type: Array,
            required: true
        },
    },
};
</script>
