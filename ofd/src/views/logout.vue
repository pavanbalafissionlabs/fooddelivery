<template>
  <div>
    <div class="logout">
      <h2>click link to go for home page</h2>
      <div class="btn">
        <router-link to="/">logout</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logout",
};
</script>

<style scoped>
.logout {
  text-align: center;
  margin-top: 100px;
  background-color: silver;
}
.btn {
  margin-top: 50px;
  text-align: center;
  border: 1px lightgreen;
}
</style>
