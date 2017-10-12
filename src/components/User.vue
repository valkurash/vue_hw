<template>
  <div>
    <h1>Edit User {{id}}</h1>
    <user-form v-model="user"></user-form>
    <div class="form-group offset-md-4 col-md-8">
      <div class="col-md-offset-2 col-md-10">
        <button type="button" class="btn btn-primary" @click="saveUser">Save</button>
        <button type="button" class="btn btn-danger" @click="deleteUser">Delete</button>
      </div>
    </div>

    <pre>{{user}}</pre>
  </div>
</template>

<script>
import axios from 'axios';
import userForm from './UserForm/UserForm';

export default {
  name: 'User',
  props: {
    id: { type: String, required: true }
  },
  components: {
    'user-form': userForm
  },
  data() {
    return {
      url: `http://localhost:3000/users/${this.id}`,
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
  watch: {
    '$route': 'loadData'
  },
  methods: {
    loadData: async function() {
      try {
        const response = await axios.get(this.url)
        this.user = response.data
      } catch (e) {
        console.log(e);
      }
    },
    saveUser: async function() {
      try {
        await axios.patch(this.url, this.user);
        alert('saved!')
      } catch (e) {
        console.log(e);
      }
    },
    deleteUser: async function() {
      try {
        await axios.delete(this.url)
        this.$router.push('/')
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.loadData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
}
</style>
