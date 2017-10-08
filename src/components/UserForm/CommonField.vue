<template>
    <div class="form-group offset-md-4 col-md-8 row">
        <label class="col-md-2 col-form-label" :for="id">{{placeholder}}</label>
        <div class="col-md-4">
            <input ref="input" :type="type" class="form-control input-md" :id="id" :value="value" @input="updateValue($event.target.value)" :placeholder="placeholder" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'commonField',
    props: {
        type: String,
        placeholder: String,
        id: String,
        value: {
            type: [Number, String],
            required: true
        },
    },
    methods: {
        updateValue: function(value) { this.$emit('input', value); },
    },
};

</script>