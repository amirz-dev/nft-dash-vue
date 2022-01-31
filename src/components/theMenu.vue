<template>
  <div class="flex flex-col w-3/12 px-10 py-8 dark:bg-dark">
    <!--========== user ==========-->
    <div class="flex w-full">
      <div class="basis-1/4">
        <img
          :src="require('@/assets/img/1.jpg')"
          alt=""
          class="w-16 rounded-full"
        />
      </div>
      <div class="basis-2/4">
        <p class="text-[24px] font-semibold dark:text-white">Amir</p>
        <p class="text-[14px] font-semibold dark:text-white">
          Creator
          <span class="text-bright-sun">
            Pro
            <i class="ri-add-line align-middle"></i>
          </span>
        </p>
      </div>
      <div class="basis-1/4 flex justify-end self-center">
        <button class="">
          <i class="ri-add-line text-[32px] text-light-indigo"></i>
        </button>
      </div>
    </div>

    <!--========== Ballance ==========-->
    <div
      class="w-full h-auto mt-6 py-8 flex flex-col text-center rounded-3xl relative dark:bg-light-slat-Blue"
    >
      <p class="text-[14px] font-semibold dark:text-melrose">Your Ballance</p>
      <p class="text-[34px] font-semibold mt-4 z-10 dark:text-white">
        2,401.02
      </p>
      <div class="flex justify-center mt-3 z-10">
        <img
          :src="require('@/assets/img/logos_ethereum.svg')"
          alt=""
          class="w-[10px]"
        />
        <p class="text-[15px] font-semibold ml-2 dark:text-melrose">ETH</p>
      </div>
      <img
        :src="require('@/assets/img/Stastistic.png')"
        alt=""
        class="w-[215px] self-center -mt-5"
      />
      <img
        :src="require('@/assets/img/Stastistic-bg.png')"
        alt=""
        class="w-[320px] absolute"
      />

      <div
        class="w-[250px] h-14 flex justify-between items-center px-5 mt-5 self-center rounded-full dark:bg-light-indigo hover:cursor-pointer"
      >
        <div
          class="w-6 h-6 rounded-full flex justify-center items-center dark:bg-bright-sun"
        >
          <i
            class="ri-add-line text-xl align-middle dark:text-light-slat-Blue"
          ></i>
        </div>
        <p class="text-[16px] font-semibold ml-3 dark:text-white">
          Top Up Ballance
        </p>

        <i class="ri-arrow-right-s-line text-xl dark:text-white"></i>
      </div>
    </div>

    <!--========== NAV ==========-->
    <nav class="w-full flex flex-col mt-6 h-auto">
      <ul class="list-none">
        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
          v-for="(item, index) in menuItems"
          :key="index"
        >
          <div class="flex items-center">
            <i class="text-[20px]" :class="item.icon"></i>
            <p class="text-[18px] font-semibold ml-5">{{ item.text }}</p>
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
            <i class="text-[20px]" :class="item.icon"></i>
            <p class="text-[18px] font-semibold ml-5">{{ item.text }}</p>
          </div>
          <div
            v-if="item.badge.status"
            class="px-2 py-1 rounded-full bg-cloud-burst"
          >
            <p class="text-[12px] font-semibold">{{ item.badge.text }}</p>
          </div>
        </li>

        <li
          class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
        >
          <div class="flex items-center">
            <i class="ri-arrow-down-s-line text-[20px]"></i>
            <p
              class="text-[12px] font-semibold ml-5 uppercase text-light-slat-Blue"
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
          <i class="ri-haze-line text-[20px]"></i>
          <p class="text-[18px] font-semibold ml-5">Light mode</p>
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
  </div>
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

<style></style>
