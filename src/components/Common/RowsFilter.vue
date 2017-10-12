<template>
    <div class="form-group col-md-8 row">
        <label class="col-md-2 col-form-label" for="rowsPerPage">Users per page:</label>
        <div class="col-md-4">
            <select class="form-control" id="rowsPerPage" :value="value" @input="updateValue">
                <option v-for="option in [2,5,10,20]" :value="option" :key="option">
                    {{ option }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>

export default {
    name: 'rowsFilter',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('input', event.target.value);
        },

    },
};
</script>
