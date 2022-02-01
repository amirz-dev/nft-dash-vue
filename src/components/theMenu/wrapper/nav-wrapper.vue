<template>
  <nav class="w-full flex flex-col mt-6 h-auto">
      <ul class="list-none">
        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <div class="flex items-center">
            <i class="text-[18px] xl:text-[20px]" :class="item.icon"></i>
            <p class="text-[14px] ml-3 xl:text-[18px] xl:ml-5 font-semibold">{{ item.text }}</p>
          </div>
          <div v-if="item.badge.status" class="px-3 bg-black-Eel rounded-full">
            <p class="text-bright-sun text-[15px] font-semibold">
              {{ item.badge.text }}
            </p>
          </div>
        </li>
      </ul>

      <p class="text-[#565976] text-[12px] font-semibold mt-10">MY PROFILE</p>

      <ul class="list-none">
        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
          v-for="(item, index) in myProfileItems"
          :key="index"
        >
          <div class="flex items-center">
            <i class="text-[18px] xl:text-[20px]" :class="item.icon"></i>
            <p class="text-[14px] ml-3 xl:text-[18px] xl:ml-5 font-semibold">{{ item.text }}</p>
          </div>
          <div
            v-if="item.badge.status"
            class="px-2 py-1 rounded-full bg-cloud-burst"
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
        class="mt-10 flex items-center justify-between py-2 px-3 my-1 text-Amethyst-smoke"
      >
        <div class="flex items-center">
          <i class="ri-haze-line text-[18px] xl:text-[20px]"></i>
          <p class="text-[14px] ml-3 xl:text-[18px] xl:ml-5 font-semibold">Light mode</p>
        </div>
        <div class="flex items-center">
          <label for="toggleB" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div
              class="relative flex items-center justify-between bg-cloud-burst w-[60px] h-8 px-2 rounded-full"
            >
              <input type="checkbox" id="toggleB" class="sr-only" />

              <!-- dot -->
              <div
                class="dot absolute left-0.5 bg-dark w-7 h-7 rounded-full transition"
              ></div>
              <!-- line -->
              <i class="ri-moon-fill text-light-slat-Blue text-[16px] z-20"></i>
              <i class="ri-sun-line text-Amethyst-smoke text-[16px] z-20"></i>
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

    return {
      menuItems,
      myProfileItems,
    };
  },
};
</script>

<style>

</style>