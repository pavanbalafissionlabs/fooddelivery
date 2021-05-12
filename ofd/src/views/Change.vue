<template>
  <v-form v-model="valid">
    <h1>change password</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            :label="this.listoflogindetails.name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="password"
            :rules="nameRules"
            :counter="10"
            label="this.listoflogindetails.password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <router-link to="/">
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="user">
          now login
        </v-btn>
      </router-link>
    </v-container>
  </v-form>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    valid: false,
    firstname: "",
    password: "",
    changepass: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    passwordRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
  }),
  user() {
    const data = {
      name: this.firstname,
      password: this.password,
    };
    window.console.log(`${data.name}`);
  },
  methods: {
    ...mapActions([" setlogindetails"]),
    ...mapGetters(["listofloggedinuser", "listoflogindetails"]),
    users() {
      this.changepass = this.password;
      this.$store.getters.listoflogindetails.password = this.changepass;
      this.setlogindetailsAction(this.password);
      console.log("password is changed");
    },
  },
};
</script>

<style scoped></style>
