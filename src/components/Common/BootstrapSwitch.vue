<template>
    <div class="js-datepicker">
        <input type="checkbox" ref="bSwitch" class="form-control input-md" :id="id" :value="value" />
    </div>
</template>

<script>
import jquery from 'jquery';
import bSwitch from 'bootstrap-switch';
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css';

export default {
    name: 'bootstrapSwitch',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        id: {
            type: String,
            required: true
        },
    },
    date() {
        bs: null
    },
    watch: {
        //обновление сверху
        value: 'updateBSwitch'
    },
    methods: {
        initBSwitch() {
            this.bs = $(this.$refs.bSwitch).bootstrapSwitch({
                onText: 'Active',
                offText: 'Offline',
                state: this.value,
                onSwitchChange: (event, state) => {
                    this.$emit('input', state);
                }
            });

        },
        updateBSwitch() {
            if (this.bs) {
                $(this.bs).bootstrapSwitch('state', this.value);
            }
        }
    },
    mounted() {
        this.initBSwitch();
    }

};
</script>
