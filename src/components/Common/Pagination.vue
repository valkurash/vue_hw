<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <a class="page-link" href="#" @click.prevent="prevPage">&laquo;</a>
            <li class="page-item" v-for="page in pageList" :key="page" :class="liActive(page)">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{page}}</a>
            </li>
            <a class="page-link" href="#" @click.prevent="nextPage">&raquo;</a>
        </ul>
    </nav>
</template>

<script>

export default {
    name: 'tablePagination',
    props: {
        totalItems: {
            type: Number,
            required: true
        },
        rowsPerPage: {
            type: Number,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    },
    computed: {
        pageList() {
            return Math.ceil(this.totalItems / this.rowsPerPage);
        },
    },
    methods: {
        prevPage() {
            if (this.value > 1) { this.$emit('changePage', this.value - 1); }
        },
        nextPage() {
            if (this.value < this.pageList) { this.$emit('changePage', this.value + 1); }
        },
        changePage(page) {
            this.$emit('changePage', page);
        },
        liActive(page) {
            return this.value === page ? 'active' : '';
        }
    },
};
</script>
