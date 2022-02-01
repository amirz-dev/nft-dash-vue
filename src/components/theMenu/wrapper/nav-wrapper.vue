<template>
  <nav class="w-full flex flex-col mt-6 h-auto">
      <ul class="list-none">
        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl first:text-light-slat-Blue first:dark:text-light-slat-Blue menu__items-hover text-[#555D68] dark:text-Amethyst-smoke "
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <div class="flex items-center">
            <i class="text-[18px] xl:text-[20px]" :class="item.icon"></i>
            <p class="text-[14px] ml-3 xl:text-[18px] xl:ml-5 font-semibold">{{ item.text }}</p>
          </div>
          <div v-if="item.badge.status" class="px-3 bg-bright-sun dark:bg-black-Eel rounded-full">
            <p class="text-white dark:text-bright-sun text-[15px] font-semibold">
              {{ item.badge.text }}
            </p>
          </div>
        </li>
      </ul>

      <p class="text-[#565976] text-[12px] font-semibold mt-10">MY PROFILE</p>

      <ul class="list-none">
        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-[#555D68] dark:text-Amethyst-smoke menu__items-hover"
          v-for="(item, index) in myProfileItems"
          :key="index"
        >
          <div class="flex items-center">
            <i class="text-[18px] xl:text-[20px]" :class="item.icon"></i>
            <p class="text-[14px] ml-3 xl:text-[18px] xl:ml-5 font-semibold">{{ item.text }}</p>
          </div>
          <div
            v-if="item.badge.status"
            class="px-2 py-1 rounded-full bg-[#F2F2F2] dark:bg-cloud-burst"
          >
            <p class="text-[12px] font-semibold">{{ item.badge.text }}</p>
          </div>
        </li>

        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke hover:cursor-pointer"
        >
          <div class="flex items-center">
            <i class="ri-arrow-down-s-line text-[18px] xl:text-[20px]"></i>
            <p
              class="text-[12px] font-semibold ml-3 xl:ml-5 uppercase text-light-slat-Blue"
            >
              Show More
            </p>
          </div>
        </li>
      </ul>

      <div
        class="mt-10 flex items-center justify-between py-2 px-3 my-1 text-[#555D68] dark:text-Amethyst-smoke"
      >
        <div class="flex items-center">
          <i class="ri-haze-line text-[18px] xl:text-[20px]"></i>
          <p class="text-[14px] ml-3 xl:text-[18px] xl:ml-5 font-semibold">Light mode</p>
        </div>
        <div class="flex items-center">
          <label @click="darkModeInput" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div
              class="relative flex items-center justify-between bg-[#F6F6F6] dark:bg-cloud-burst w-[60px] h-8 px-2 rounded-full"
            >
              <!-- <input type="checkbox"  class="sr-only" /> -->

              <!-- dot -->
              <div
                class="dot absolute bg-[#FFFFFF] dark:bg-dark w-7 h-7 rounded-full"
                :class="darkMode ? 'left-0.5 ' : 'right-0.5 '"
              ></div>
              <!-- line -->
              <i class="ri-moon-fill text-[16px] z-20" :class="darkMode ? 'text-light-slat-Blue' : 'text-Amethyst-smoke'"></i>
              <i class="ri-sun-line text-[16px] z-20" :class="darkMode ? 'text-Amethyst-smoke' : 'text-light-slat-Blue'"></i>
            </div>
          </label>
        </div>
      </div>
    </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const menuItems = computed(() => store.getters.menuItems);

    const myProfileItems = computed(() => store.getters.myProfileItems);

    const darkMode = computed(() => store.getters.darkMode);

    function darkModeInput(){
      document.body.classList.toggle('dark')
      store.commit('darkMode', !darkMode.value);
    }

    return {
      menuItems,
      myProfileItems,
      darkMode,
      darkModeInput
    };
  },
};
</script>

<style>

</style>