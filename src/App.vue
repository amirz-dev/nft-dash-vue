<template>
  <div>
    <div class="flex" v-if="!mobile">
    <!--========== Menu ==========-->
    <Menu />

    <!--========== Main ==========-->
    <Main/>
    
  </div>
  <div class="w-full h-screen flex justify-center items-center bg-dark" v-else>
    <h2 class="text-white font-semibold text-[24px]" >Sorry, this app not Supported mobile Devices</h2>
  </div>
  </div>
</template>

<script>
import Menu from "./components/theMenu/theMenu.vue";
import Main from "./components/theMain/theMain.vue";

export default {
  name: "App",
  components: {
    Menu,
    Main,
  },
  data() {
    return {
      mobile:false
    }
  },
  created() {
    this.checkScreen;
    window.addEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
     if(window.innerWidth < 768 ){
       this.mobile = true;
       return;
     }
     this.mobile = false;
    },
  },
};
</script>

<style></style>
