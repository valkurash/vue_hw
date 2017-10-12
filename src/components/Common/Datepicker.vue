<template>
    <div class="js-datepicker">
        <input type="text" ref="datepicker" class="form-control input-md" :id="id" :value="value" :placeholder="placeholder" />
    </div>
</template>

<script>
import flatpickr from 'flatpickr';
import { ru } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.css';

export default {
    name: 'datepicker',
    props: {
        value: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            default: 'Choose date'
        },
        id: {
            type: String,
            required: true
        },
    },
    date() {
        fp: null
    },
    watch: {
        //обновление сверху
        value: 'updateDatepicker'
    },
    methods: {
        initDatepicker() {
            this.fp = flatpickr(this.$refs.datepicker, {
                locale: 'ru',
                dateFormat: 'd.m.Y',
                defaultDate: new Date(), //имеет ли смысл ставить в плагине defaultDate? Получается так всё равно надо как-то обновить this.value, иначе не подтягивается значение. Или лучше в пропсах выставить у value дефолтную дату?
                onChange: (selectedDates, dateStr) => {
                    this.$emit('input', dateStr)
                }
            });
        },
        updateDatepicker() {
            if (this.fp) {
                this.fp.setDate(this.value);
            }
        }
    },
    mounted() {
        this.initDatepicker();
    }

};
</script>
