<template>
    <div class="form-group offset-md-4 col-md-8 row">
        <label class="col-md-2 col-form-label" :for="id">{{placeholder}}</label>
        <div class="col-md-4">
            <input :type="type" class="form-control input-md" :id="id" :value="value" @input="updateValue" :placeholder="placeholder" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'commonField',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Enter value'
        },
        id: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
    },
    methods: {
        updateValue(event) { this.$emit('input', event.target.value); },
    },
};

</script>