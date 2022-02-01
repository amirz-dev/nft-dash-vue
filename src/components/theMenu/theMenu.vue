<template>
  <div class="hidden lg:flex flex-col w-3/12 px-5 xl:px-10 py-8 bg-[#fafafa] dark:bg-dark">
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
