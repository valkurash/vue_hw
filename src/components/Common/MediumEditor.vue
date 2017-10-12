<template>
    <div class="medium-editor">
        <textarea class="form-control" ref="mEditor" :id="id" :value="value" rows="5"></textarea>
    </div>
</template>

<script>
import MediumEditor from 'medium-editor';
import 'medium-editor/dist/css/medium-editor.css';

export default {
    name: 'mediumEditor',
    props: {
        value: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
    },
    date() {
        me: null
    },
    watch: {
        //обновление сверху
        value: 'updateEditor'
    },
    methods: {
        initEditor() {
            this.me = new MediumEditor(this.$refs.mEditor, {
                delay: 1000,
                targetBlank: true,
                toolbar: {
                    buttons: ['bold', 'italic', 'quote'],
                    diffLeft: 25,
                    diffTop: 10,
                },
                anchor: {
                    placeholderText: 'Type a link',
                    customClassOption: 'btn',
                    customClassOptionText: 'Create Button'
                },
                paste: {
                    cleanPastedHTML: true,
                    cleanAttrs: ['style', 'dir'],
                    cleanTags: ['label', 'meta'],
                    unwrapTags: ['sub', 'sup']
                },
                anchorPreview: {
                    hideDelay: 300
                },
                placeholder: {
                    text: 'Click to edit'
                }
            });
            this.me.subscribe('editableInput', (event, target) => {
                this.$emit('input', target.innerHTML)
            });
        },
        updateEditor() {
            //вызывается при editableInput и соответственно переставляется курсор в начало, после вставки, как это правильно обрабатывать?
            if (this.me) {
                this.me.setContent(this.value);
            }
        }
    },
    mounted() {
        this.initEditor();
    }

};
</script>
