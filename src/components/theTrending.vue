<template>
  <div class="flex flex-col w-full mt-12">
    <!--========== Head ==========-->
    <div class="flex justify-between">
      <h1 class="text-white text-[32px] font-semibold">Trending Auctions</h1>

      <div
        class="flex items-center rounded-xl px-5 hover:cursor-pointer transition ease-in-out hover:bg-[#272856] duration-300"
      >
        <p class="text-light-slat-Blue text-[16px] font-semibold">
          All Auctions
        </p>
        <div class="px-2 py-1 bg-[#272856] rounded-full ml-2">
          <p class="text-light-slat-Blue text-[14px]">+32</p>
        </div>
      </div>
    </div>

    <!--========== Slider ==========-->
    <div class="slider flex flex-nowrap gap-8 mt-4 pb-2 overflow-x-auto w-full">
      
          <slider
            v-for="(slide, index) in sliders"
            :key="index"
            :slide="slide"
          />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import slider from "./UI/slider-item.vue";


export default {
  components: { slider, },
  setup() {
    const store = useStore();

    const sliders = computed(() => store.getters.sliders);

    return { sliders, };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
 display: flex;
    gap: 30px;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

</style>
