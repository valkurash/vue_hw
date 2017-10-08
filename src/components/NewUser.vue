<template>
  <div>
    <h1>Add new User</h1>
    <user-form :user="user"></user-form>
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
import userForm from './UserForm/UserForm';

export default {
  name: 'NewUser',
  components: {
    'user-form': userForm
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
