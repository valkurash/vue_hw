<template>
  <div>
    <h1>Add new User</h1>
    <user-form v-model="user"></user-form>
    <div class="form-group offset-md-4 col-md-8">
      <div class="col-md-offset-2 col-md-10">
        <button type="button" class="btn btn-primary" @click="saveUser">Save</button>
      </div>
    </div>

    <pre>{{user}}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewUser',
  components: {
    'user-form': () => import('./UserForm/UserForm')
  },
  data() {
    return {
      url: `http://localhost:3000/users/`,
      user: {
        "id": null,
        "isActive": false,
        "balance": "",
        "picture": "",
        "age": 0,
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
    }
  },
  methods: {
    saveUser: async function() {
      try {
        const response = await axios.post(this.url, this.user);
        this.$router.push(`/user/${response.data.id}`)
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
