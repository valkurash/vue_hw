<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item" v-for="page in pageList" :key="page" :class="{ active: selectedPage===page }">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{page}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'usersTable',
    props: {
        totalItems: {
            type: Number,
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
        pageList() {
            return Math.ceil(this.totalItems / this.rowsPerPage);
        }
    },
    data() {
        return {

        }
    },
    methods: {
        changePage(page) {
            this.$emit('changePage', page)
        }

    },
};
</script>
