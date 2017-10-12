<template>
  <div>
    <h1>Users List</h1>
    <rows-filter v-model.number="rowsPerPage"></rows-filter>
    <dashboard-table :users="currentUsers"></dashboard-table>
    <pagination v-model="selectedPage" @changePage="goToPage" :totalItems="users.length" :rowsPerPage="rowsPerPage"></pagination>
  </div>
</template>

<script>
//пока не совсем понимаю как реализовать именно в пагинации переключатель на 1 страницу при изменении фильтра, watch ?
import axios from 'axios';
import rowsFilter from './Common/RowsFilter';
import dashboardTable from './Table';
import pagination from './Common/Pagination';

export default {
  name: 'Dashboard',
  components: {
    'rows-filter': rowsFilter,
    'dashboard-table': dashboardTable,
    'pagination': pagination
  },
  data() {
    return {
      url: 'http://localhost:3000/users/',
      users: [],
      rowsPerPage: 5,
      selectedPage: 1,
    };
  },
  computed: {
    currentUsers() {
      return this.users.filter((e, i) => i >= this.rowsPerPage * (this.selectedPage - 1) && i < (this.rowsPerPage * (this.selectedPage - 1) + this.rowsPerPage));
    },
  },
  methods: {
    goToPage(page) {
      this.selectedPage = page;
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


