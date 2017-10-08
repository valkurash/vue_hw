<template>
  <div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="accessLevel">Role</label>
      <div class="col-md-4">
        <select class="form-control" id="accessLevel" v-model="user.accessLevel">
          <option disabled value="">Choose role</option>
          <option v-for="option in roles" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <common-field type="text" id="firstName" placeholder="Name" v-model="user.firstName"></common-field>
    <common-field type="text" id="lastName" placeholder="Surname" v-model="user.lastName"></common-field>
    <common-field type="text" id="picture" placeholder="Picture" v-model="user.picture"></common-field>
    <div class="form-group offset-md-4 col-md-8" v-if="imagePath">
      <div class="col-md-offset-2 col-md-10">
        <img :src="imagePath" alt="picture" width="300"/>
      </div>
    </div>
    <common-field type="number" id="age" placeholder="Age" v-model.number="user.age"></common-field>
    <common-field type="text" id="company" placeholder="Company" v-model="user.company"></common-field>
    <common-field type="text" id="balance" placeholder="Balance" v-model="user.balance"></common-field>
    <common-field type="email" id="email" placeholder="Email" v-model="user.email"></common-field>
    <common-field type="tel" id="phone" placeholder="Phone" v-model="user.phone"></common-field>
    <common-field type="text" id="address" placeholder="Address" v-model="user.address"></common-field>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label">Is Active</label>
      <div class="col-md-4">
        <label class="checkbox-inline" for="isActive">
          <input type="checkbox" id="isActive" v-model="user.isActive"> {{user.isActive}}
        </label>
      </div>
    </div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="about">About</label>
      <div class="col-md-4">
        <textarea class="form-control" id="about" v-model="user.about" rows="5"></textarea>
      </div>
    </div>
    <common-field type="text" id="registered" placeholder="Registered" v-model="user.registered"></common-field>

  </div>
</template>

<script>
import commonField from './CommonField';

export default {
  name: 'userForm',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  components: {
    'common-field': commonField,
  },
  data() {
    return {
      roles: [
        {
          text: 'admin',
          value: 'admin',
        },
        {
          text: 'user',
          value: 'user',
        },
        {
          text: 'guest',
          value: 'guest',
        }
      ],
    };
  },
  computed: {
    imagePath() {
      return this.user.picture;
    },
  },
};
</script>
