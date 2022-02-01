<template>
  <div
    class="w-full lg:w-9/12 flex flex-col h-1/1 pl-10 py-8 pr-5 xl:pr-10 bg-white dark:bg-ebony-clay"
  >
    <!--========== Head ==========-->
    <Head/>

    <!--========== Trending ==========-->
    <Trending />

    <!--========== Featured ==========-->
    <Featured />
  </div>
</template>

<script>
import Head from "./theHead/head-wrapper.vue";
import Trending from "./theTrending/theTrending.vue";
import Featured from "./theFeatured/theFeatured.vue";

export default {
  name: "App",
  components: {
    Head,
    Trending,
    Featured,
  },
  
};
</script>
<style></style>
