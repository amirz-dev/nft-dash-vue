<template>
  <div class="flex flex-col w-3/12 px-10 py-8 dark:bg-dark">
    <!--========== user ==========-->
    <User/>

    <!--========== Ballance ==========-->
    <Ballance/>

    <!--========== NAV ==========-->
    <Nav/>

  </div>
</template>

<script>
import User from './wrapper/user-wrapper.vue';
import Ballance from './wrapper/ballance-wrapper.vue';
import Nav from './wrapper/nav-wrapper.vue';
export default {
  components:{
    User, Ballance, Nav
  },
};
</script>

<style></style>
