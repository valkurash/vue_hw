<template>
  <div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="accessLevel">Role</label>
      <div class="col-md-4">
        <select class="form-control" id="accessLevel" v-model="curentUser.accessLevel" @input="updateUser">
          <option disabled value="">Choose role</option>
          <option v-for="option in roles" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <common-field type="text" id="firstName" placeholder="Name" v-model="curentUser.firstName" @input="updateUser"></common-field>
    <common-field type="text" id="lastName" placeholder="Surname" v-model="curentUser.lastName" @input="updateUser"></common-field>
    <common-field type="text" id="picture" placeholder="Picture" v-model="curentUser.picture" @input="updateUser"></common-field>
    <div class="form-group offset-md-4 col-md-8" v-if="imagePath">
      <div class="col-md-offset-2 col-md-10">
        <img :src="imagePath" alt="picture" width="300" />
      </div>
    </div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="age">Age</label>
      <div class="col-md-4">
        <input type="number" id="age" class="form-control input-md" v-model.number="curentUser.age" @input="updateUser" placeholder="Age" />
      </div>
    </div>
    <common-field type="text" id="company" placeholder="Company" v-model="curentUser.company" @input="updateUser"></common-field>
    <common-field type="text" id="balance" placeholder="Balance" v-model="curentUser.balance" @input="updateUser"></common-field>
    <common-field type="email" id="email" placeholder="Email" v-model="curentUser.email" @input="updateUser"></common-field>
    <common-field type="tel" id="phone" placeholder="Phone" v-model="curentUser.phone" @input="updateUser"></common-field>
    <common-field type="text" id="address" placeholder="Address" v-model="curentUser.address" @input="updateUser"></common-field>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label">Is Active</label>
      <div class="col-md-4">
        <label class="checkbox-inline" for="isActive">
          <input type="checkbox" id="isActive" v-model="curentUser.isActive" @input="updateUser"> {{curentUser.isActive}}
        </label>
      </div>
    </div>
    <div class="form-group offset-md-4 col-md-8 row">
      <label class="col-md-2 col-form-label" for="about">About</label>
      <div class="col-md-4">
        <textarea class="form-control" id="about" v-model="curentUser.about" @input="updateUser" rows="5"></textarea>
      </div>
    </div>
    <common-field type="text" id="registered" placeholder="Registered" v-model="curentUser.registered" @input="updateUser"></common-field>

  </div>
</template>

<script>
import commonField from './CommonField';

export default {
  name: 'userForm',
  props: {
    value: {
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
    curentUser() {
      return this.value;
    },
    imagePath() {
      return this.value.picture || false;
    },
  },
  methods: {
    updateUser(event) {
      this.$emit('input', this.curentUser)
    }
  }
};
</script>
