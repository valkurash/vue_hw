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
            <tr v-for="(user, index) in usersList" :key="user.id">
                <td>
                    <a :href="'/user/' + user.id">{{ user.id }}</a>
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
        rowsPerPage: {
            type: Number,
            required: true
        },
        selectedPage: {
            type: Number,
            required: true
        }
    },
    computed: {
        usersList() {
            return this.users.map((e, i) => (i % this.rowsPerPage === 0) ? this.users.slice(i, i + this.rowsPerPage) : null).filter((e) => e)[this.selectedPage - 1]
        },
    },
};
</script>
