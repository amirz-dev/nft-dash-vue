<template>
  <div class="flex flex-col gap-5 2xl:flex-row justify-between mt-12">
    <Featured/>

    <!-- User suggestion -->
    <Suggestion/>
  </div>
</template>

<script>
import Featured from './wrapper/featured-wrapper.vue';
import Suggestion from './wrapper/suggestion-wrapper.vue';
export default {
    components:{Featured, Suggestion}
};
</script>

<style></style>
