<template>
  <div>
    <!-- <div class="home">
      <div class="split left">
        <div class="centered">
          <img
            src="https://image.freepik.com/free-vector/hand-drawn-background-of-cook-with-tray_23-2147630131.jpg"
            alt=""
          />
        </div>
      </div>-->

    <div class="Logindiv">
      <h1>Login</h1>
      <input type="text" name="username" placeholder="Username" required />
      <br />
      <br />
      <input type="password" name="password" placeholder="Password" />
      <br />
      <br />
      <router-link to="/Homes"
        ><button @click="login">
          login
        </button></router-link
      >
    </div>
  </div>

  <!-- <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn>
    </v-form>
  </div> -->
</template>

//
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data: () => ({
    firstname: "",
    password: "123",
  }),
  components: {},
  methods: {
    ...mapActions([" setlogindetails"]),
    ...mapGetters(["listofloggedinuser"]),
    userdetails() {
      const data = {
        name: this.firstname,
        password: this.password,
      };
      window.console.log(`${data.name}`);
      this.setlogindetails(data);
      window.console.log("He is registered ");
      window.console.log("not registered");
    },
  },
};
</script>

//
<script>
// export default {
//   data: () => ({
//     valid: true,
//     name: "",
//     nameRules: [
//       (v) => !!v || "Name is required",
//       (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
//     ],
//     email: "",
//     emailRules: [
//       (v) => !!v || "E-mail is required",
//       (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
//     ],
//     select: null,
//     items: ["Item 1", "Item 2", "Item 3", "Item 4"],
//     checkbox: false,
//   }),

//   methods: {
//     validate() {
//       this.$refs.form.validate();
//     },
//     reset() {
//       this.$refs.form.reset();
//     },
//     resetValidation() {
//       this.$refs.form.resetValidation();
//     },
//   },
// };
//
</script>

<style scoped>
.split {
  height: 80%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  border-radius: 15px 200px 200px 5px;
  overflow-x: hidden;
  padding-top: 20px;
  margin-top: 5%;
}

.left {
  left: 0;
  /* background-color: #111; */
}
.btn {
  justify-content: space-between;
  border-radius: 25px;
  background: #73ad21;
  padding: 20px;
  width: 200px;
  height: 150px;
  position: absolute;
  right: 0px;
  /* width: 300px; */
  border: 3px solid #496d18;
  /* padding: 10px; */
}
.btn:hover {
  background-color: red;
}
.divbtn {
  align-content: center;
  position: absolute;
  right: 0px;
  width: 50%;
  /* border: 3px solid #73ad21; */
  float: right;
  padding-top: 18%;
  margin-right: 20%;
}
.centered {
  color: whitesmoke;
}
.Logindiv {
  float: center;
}
</style>
