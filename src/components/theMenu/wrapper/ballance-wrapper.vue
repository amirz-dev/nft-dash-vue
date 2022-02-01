<template>
   <div
      class="w-full h-auto mt-6 py-8 flex flex-col text-center rounded-3xl relative bg-white shadow-lg dark:shadow-none dark:bg-light-slat-Blue"
    >
      <p class="text-[12px] xl:text-[14px] font-semibold text-[#A1A2AF] dark:text-melrose">Your Ballance</p>
      <p class="text-[30px] xl:text-[34px] font-semibold mt-4 z-10 dark:text-white">
        2,401.02
      </p>
      <div class="flex justify-center mt-3 z-10">
        <img
          :src="require('@/assets/img/logos_ethereum.svg')"
          alt=""
          class="w-[10px]"
        />
        <p class="text-[15px] font-semibold ml-2 text-[#A1A2AF] dark:text-melrose">ETH</p>
      </div>
      <img
        :src="require('@/assets/img/Stastistic-white-mode.png')"
        alt=""
        class="w-[80%] self-center -mt-5"
        :class="darkMode ? 'hidden' : 'block'"
      />
      <img
        :src="require('@/assets/img/Stastistic.png')"
        alt=""
        class="w-[80%] self-center -mt-5"
        :class="darkMode ? 'block' : 'hidden'"
      />
      <img
        :src="require('@/assets/img/Stastistic-bg.png')"
        alt=""
        class="w-[320px] absolute"
        :class="darkMode ? 'block' : 'hidden'"
      />

      <div
        class="w-[80%] h-14 flex justify-center gap-1 xl:gap-0 xl:justify-between items-center px-5 mt-5 self-center rounded-full border-2 border-[#F1F3F6] dark:border-none dark:bg-light-indigo hover:cursor-pointer"
      >
        <div
          class="hidden xl:flex justify-center items-center w-6 h-6 rounded-full bg-[#5AE6BC] dark:bg-bright-sun"
        >
          <i
            class="ri-add-line text-xl align-middle dark:text-light-slat-Blue"
          ></i>
        </div>
        <p class="text-[12px] font-medium xl:text-[16px] xl:font-semibold ml-3 dark:text-white text-center">
          Top Up Ballance
        </p>

        <i class="ri-arrow-right-s-line text-xl dark:text-white"></i>
      </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const darkMode = computed(() => store.getters.darkMode);

    return {
      darkMode,
    };
  },
};
</script>

<style>

</style>