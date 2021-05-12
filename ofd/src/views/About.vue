<template>
  <div>
    <div v-for="name in user" :key="name.id">
      <h1>Account Name : {{ name }}</h1>
    </div>

    <div>
      <h2>
        you user can change username and password here
        <a href="Change">Change password</a>
      </h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "my account",
  data() {
    return {
      firstname: "",
      password: "",
      changepass: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.loggeduser;
    },
    ...mapGetters(["listoflogindetails"]),
  },
  methods: {
    ...mapActions([" setlogindetails"]),
    ...mapGetters(["listofloggedinuser"]),
    users() {
      this.changepass = this.password;
      this.$store.getters.listoflogindetails.password = this.changepass;
      this.setlogindetailsAction(this.password);
      alert("Your password has changed successfully");
    },
  },
};
</script>

<style scoped></style>
