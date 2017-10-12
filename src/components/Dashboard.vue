<template>
  <div>
    <h1>Users List</h1>
    <rows-filter v-model="rowsPerPage">
      <span slot="title">Users per page:</span>
      <option slot="filter" v-for="option in [2,5,10,20]" :value="option" :key="option">
        {{ option }}
      </option>
    </rows-filter>
    <dashboard-table :items="currentUsers">
      <tr slot="thead">
        <th>id</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Company</th>
      </tr>
      <template slot="row" scope="props">
        <td>
          <router-link :to="`/user/${props.id}`">{{ props.id }}</router-link>
        </td>
        <td>
          {{ props.firstName }}
        </td>
        <td>
          {{ props.lastName }}
        </td>
        <td>
          {{ props.company }}
        </td>
      </template>
    </dashboard-table>
    <pagination v-model="selectedPage" @changePage="goToPage" :totalItems="users.length" :rowsPerPage="rowsPerPage"></pagination>
  </div>
</template>

<script>
//пока не совсем понимаю как реализовать именно в пагинации переключатель на 1 страницу при изменении фильтра, watch ?

//зачем и как правильно добавлять слоты в фильтрацию строк и пагинацию не совсем ясно. 
//Сделала только для строк пока, если выносить селект весь, тогда получается, что от фильтра остаётся только обертка, и почему его не вынести тогда весь в дашбоард, например.
// Или надо в слот выносить только опции?

import axios from 'axios';

export default {
  name: 'Dashboard',
  components: {
    'rows-filter': () => import('./Common/RowsFilter'),
    'dashboard-table': () => import('./Table'),
    'pagination': () => import('./Common/Pagination'),
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

<style>
h1 {
  text-align: center;
}
</style>


