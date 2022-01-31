<template>
  <div class="flex justify-between mt-12">
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
