<template>
  <div>
    <h1>Users List</h1>

    <div class="form-group col-md-8 row">
      <label class="col-md-2 col-form-label" for="accessLevel">Show</label>
      <div class="col-md-4">
        <select class="form-control" id="rowsPerPage" v-model.number="rowsPerPage" @change="goToFirstPage">
          <option disabled value="">Choose users count</option>
          <option v-for="option in usersCountArr" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      ({{rowsPerPage}})
    </div>
    <dashboard-table :users="users" :rowsPerPage="rowsPerPage" :selectedPage="selectedPage"></dashboard-table>
    <pagination @changePage="setPage" :totalItems="users.length" :rowsPerPage="rowsPerPage" :selectedPage="selectedPage"></pagination>
  </div>
</template>

<script>
import axios from 'axios';
import dashboardTable from './Table';
import pagination from './Common/Pagination';

export default {
  name: 'Dashboard',
  components: {
    'dashboard-table': dashboardTable,
    'pagination': pagination
  },
  data() {
    return {
      url: 'http://localhost:3000/users/',
      users: [],
      rowsPerPage: 5,
      usersCountArr: [
        {
          text: '2 users',
          value: 2
        },
        {
          text: '5 users',
          value: 5
        },
        {
          text: '20 users',
          value: 20
        },
      ],
      selectedPage: 1,
    };
  },
  methods: {
    setPage(page) {
      this.selectedPage = page;
    },
    goToFirstPage() {
      this.selectedPage = 1;
    }
  },
  mounted: async function() {
    try {
      const response = await axios.get(this.url)
      this.users = response.data
    } catch (e) {
      console.log(e);
    }
  },
};
</script>


