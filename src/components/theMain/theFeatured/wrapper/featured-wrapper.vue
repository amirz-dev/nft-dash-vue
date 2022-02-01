<template>
  <div class="flex flex-col w-full 2xl:w-[575px]">
      <!--========== Head ==========-->
      <div class="flex justify-between">
        <h1 class="text-[#131736] dark:text-white text-[32px] font-semibold">Featured Creators</h1>

        <div
          class="flex items-center rounded-xl px-5 hover:cursor-pointer transition ease-in-out hover:bg-[#7b62ff26] dark:hover:bg-[#272856] duration-300"
        >
          <p class="text-light-slat-Blue text-[16px] font-semibold">
            All Creators
          </p>
        </div>
      </div>

      <!--========== boxs ==========-->
      <div class="flex flex-col xl:flex-row 2xl:flex-col gap-5 mt-5">
      <div
        class="flex justify-between items-center xl:w-1/2 lg:w-full 2xl:w-full h-[112px] rounded-xl bg-white shadow-lg dark:shadow-none dark:bg-[#24284C] px-6"
        v-for="(item, index) in featuredItems" :key="index"
      >
        <div class="flex items-center">
          <img
            :src="require('@/assets/img/' + item.img)"
            alt=""
            class="w-[54px] h-[54px] rounded-full"
          />
          <div class="flex flex-col ml-5">
            <h3 class="text-[24px] text-[#131736] dark:text-white">{{item.name}}</h3>
            <p class="text-[16px] text-regent-grey">
              {{item.id}}
              <span class="text-light-slat-Blue hover:cursor-pointer">
                <i class="ri-add-line align-middle -mr-1"></i>
                Follow
              </span>
            </p>
          </div>
        </div>
        <div class="flex">
          <img
            :src="require('@/assets/img/' + item.works.img1)"
            alt=""
            class="w-[90px] h-[75px] rounded-xl object-cover"
          />
          <div class="relative flex items-center justify-center ml-5">
            <img
              :src="require('@/assets/img/' + item.works.img2)"
              alt=""
              class="w-[50px] h-[75px] rounded-xl object-cover"
            />

            <div
              class="absolute w-[28px] h-[28px] rounded-full bg-white dark:bg-dark flex justify-center items-center"
            >
              <p class="text-[12px] text-bright-sun font-semibold">{{item.works.badge}}</p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
    const store = useStore();

    const featuredItems = computed(() => store.getters.featuredItems);

    return { featuredItems };
  },
};
</script>

<style>

</style>