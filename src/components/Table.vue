<template>
    <table class="table table-hover">
        <thead>
            <slot name="thead"></slot>
        </thead>

        <tbody>
            <tr v-for="item in items" :key="item.id">
                <slot name="row" v-bind="item"></slot>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    name: 'usersTable',
    props: {
        items: {
            type: Array,
            required: true
        },
    },
};
</script>
