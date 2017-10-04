const fixtures = {
    "id": 0,
    "isActive": false,
    "balance": "$1,913.57",
    "picture": "http://i.imgur.com/xmm2bjD.png",
    "age": 32,
    "accessLevel": "user",
    "firstName": "Mabel",
    "lastName": "Miranda",
    "company": "LIQUIDOC",
    "email": "mabel.miranda@liquidoc.biz",
    "phone": "+7 (971) 535-2903",
    "address": "540 Stuyvesant Avenue, Ivanhoe, Arizona, 1682",
    "about": "Enim qui dolor aute elit reprehenderit consectetur proident. Occaecat cupidatat sunt elit qui ullamco Lorem deserunt. Consectetur eiusmod reprehenderit eiusmod duis excepteur laborum voluptate do.",
    "registered": "16.04.2016"
};

const usersList = [
    { id: '0', firstName: 'Ivan', lastName: 'Ivanov' },
    { id: '1', firstName: 'Petr', lastName: 'Petrovanov' }
]


const commonField = {
    props: ['type', 'placeholder', 'name', 'value'],
    template: `<div class="form-group">
    <label class="col-md-2 control-label" :for="name">{{placeholder}}</label>
    <div class="col-md-4">
        <input ref="input" :id="name" :value="value" @input="updateValue($event.target.value)" :name="name" :type="type" :placeholder="placeholder" class="form-control input-md">
        </div>
    </div>`,
    methods: {
        updateValue: function(value) {
            this.$emit('input', value);
        }
    }
}

var profile = new Vue({
    el: '#profile',
    data() {
        return {
            user: {
                "id": null,
                "isActive": false,
                "balance": "",
                "picture": "",
                "age": null,
                "accessLevel": "",
                "firstName": "",
                "lastName": "",
                "company": "",
                "email": "",
                "phone": "",
                "address": "",
                "about": "",
                "registered": ""
            },
            roles: [
                { text: 'admin', value: 'admin' },
                { text: 'user', value: 'user' }
            ]

        }
    },
    mounted: function() {
        this.user = fixtures;
    },
    computed: {
        imagePath() {
            return this.user.picture;
        },
        /*balance() {
            const regex = /^([\$\€])(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{1,2})?$/;
            return this.user.balance ? {
                currency: this.user.balance.match(regex)[1],
                value: this.user.balance.match(regex)[2],
                fixed: this.user.balance.match(regex)[5]
            } : {
                currency: '',
                value: '',
                fixed: ''
            };
        }*/
    },
    // methods
    methods: {
        saveUser() {
            console.log('saved');
        }
    },
    components: {
        'common-field': commonField
    }
});




var users = new Vue({
    el: '#users',
    data() {
        return {
            users: [],

        }
    },
    mounted: function() {
        this.users = usersList;
    }
})