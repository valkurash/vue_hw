<template>
  <div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="accessLevel">Role</label>
      <div class="col-md-4">
        <select class="form-control" id="accessLevel" v-model="curentUser.accessLevel">
          <option disabled value="">Choose role</option>
          <option v-for="option in roles" :value="option" :key="option">
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <common-field type="text" id="firstName" placeholder="Name" v-model="curentUser.firstName"></common-field>
    <common-field type="text" id="lastName" placeholder="Surname" v-model="curentUser.lastName"></common-field>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="picture">Picture</label>
      <div class="col-md-4">
        <div class="col-md-offset-2 col-md-10">
          <img :src="imagePath" alt="picture" width="300" />
        </div>
        <input type="file" ref="image" class="invisible " @change="upload" />
        <button class="btn btn-default btn-block" @click="selectPicture">Upload</button>
        <input type="text" class="form-control input-md" v-model="curentUser.picture" disabled />
      </div>
    </div>
    <div class="form-group offset-md-4 col-md-8 row " :class="{'has-error': errors.has('age')}">
      <label class="col-md-2 col-form-label" for="age">Age</label>
      <div class="col-md-4">
        <input type="number" id="age" name="age" class="form-control input-md" v-model.number="curentUser.age" placeholder="Age" v-validate="'required|min_value:18'" />
        <p v-show="errors.has('age')" class="alert alert-danger">{{ errors.first('age') }}</p>
      </div>
    </div>
    <common-field type="text" id="company" placeholder="Company" v-model="curentUser.company"></common-field>
    <common-field type="text" id="balance" placeholder="Balance" v-model="curentUser.balance"></common-field>
    <common-field type="email" id="email" placeholder="Email" v-model="curentUser.email"></common-field>
    <common-field type="tel" id="phone" placeholder="Phone" v-model="curentUser.phone"></common-field>
    <common-field type="text" id="address" placeholder="Address" v-model="curentUser.address"></common-field>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label">Is Active</label>
      <div class="col-md-4">
        <label class="checkbox-inline" for="isActive">
          <bootstrap-switch id="isActive" v-model="curentUser.isActive"></bootstrap-switch>
        </label>
      </div>
    </div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="about">About</label>
      <div class="col-md-4">
        <medium-editor v-model="curentUser.about" id="about"></medium-editor>
      </div>
    </div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="registered">Registered</label>
      <div class="col-md-4">
        <datepicker v-model="curentUser.registered" id="registered" placeholder="Choose register date"></datepicker>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VeeValidate from 'vee-validate';//пока сделано только для age
Vue.use(VeeValidate);

export default {
  name: 'userForm',
  components: {
    'common-field': () => import('./CommonField'),
    'datepicker': () => import('../Common/Datepicker'),
    'medium-editor': () => import('../Common/MediumEditor'),
    'bootstrap-switch': () => import('../Common/BootstrapSwitch.vue')
  },
  model: {
    //изменение имени для модели
    prop: 'curentUser'
  },
  props: {
    curentUser: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      roles: ['admin', 'user', 'guest'],
    };
  },
  computed: {
    imagePath() {
      return this.curentUser.picture || false;
    },
  },
  methods: {
    selectPicture() {
      this.$refs.image.click();
    },
    upload() {
      const url = 'https://api.imgur.com/3/image';
      const formData = new FormData();
      formData.append('image', this.$refs.image.files[0]);

      const config = {
        headers: {
          Authorization: 'Client-ID a9bbe48b4686045'
        }
      }
      axios.post(url, formData, config).then(response => response.data).then(response => {
        this.curentUser.picture = response.data.link;
        this.$refs.image.value = '';
      })

    }

  }
};
</script>
<style  scoped>
.has-error input {
  border-color: red;
}
</style>