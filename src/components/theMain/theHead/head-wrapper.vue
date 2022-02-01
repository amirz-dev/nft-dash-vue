<template>
  <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <p class="text-[30px] font-semibold text-[#131736] dark:text-white">
          Good morning, Amir
        </p>
        <div class="flex items-center mt-1">
          <img
            :src="require('@/assets/img/1.jpg')"
            alt=""
            class="rounded-full w-[30px] border-2 border-light-slat-Blue"
          />
          <p
            class="text-[16px] font-semibold text-[#A1A2AF] dark:text-regent-grey ml-3"
          >
            Finish your profile
          </p>
          <p
            class="text-[16px] font-semibold text-light-slat-Blue ml-3 hover:cursor-pointer"
          >
            Edit Now
          </p>
        </div>
      </div>

      <div class="hidden lg:flex items-center">
        <!--========== Toggle ==========-->
        <div class="flex items-center">
          <label for="toggleC" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div
              class="relative flex items-center justify-between bg-[#F9F9F9] dark:bg-cloud-burst w-[232px] h-12 px-8 rounded-full"
            >
              <input type="checkbox" id="toggleC" class="sr-only" />

              <!-- dot -->
              <div
                class="dot absolute left-1 bg-[#FFFFFF] dark:bg-dark w-[105px] h-10 rounded-full transition"
              ></div>
              <!-- line -->
              <p
                class="text-[#131736] dark:text-white text-[14px] font-semibold z-10"
              >
                Creator
              </p>
              <p class="text-regent-grey text-[14px] font-semibold z-10">
                Collector
              </p>
            </div>
          </label>
        </div>

        <div class="xl:ml-16 lg:ml-5 flex gap-5">
          <div
            class="w-[52px] h-[52px] border-2 border-[#EAEEF3] dark:border-cloud-burst rounded-full flex justify-center items-center menu__items-hover text-[#131736] dark:text-white"
          >
            <i class="ri-settings-3-line text-[21px]"></i>
          </div>
          <div
            class="w-[52px] h-[52px] relative border-2 border-[#EAEEF3] dark:border-cloud-burst rounded-full flex justify-center items-center menu__items-hover text-[#131736] dark:text-white"
          >
            <i class="ri-notification-2-line text-[21px]"></i>

            <div
              class="absolute bg-arty-click-crimson top-0 -right-2 rounded-full py-1 px-2"
            >
              <p class="text-white text-[10px]">+6</p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:hidden flex gap-3 flex-row-reverse">
         
        <div
          class="w-[52px] h-[52px] border-2 border-[#EAEEF3] dark:border-cloud-burst rounded-full flex justify-center items-center menu__items-hover text-[#131736] dark:text-white"
        >
          <i class="ri-menu-2-line text-[21px]"></i>
        </div>
         <div
          class="w-[52px] h-[52px] border-2 border-[#EAEEF3] dark:border-cloud-burst rounded-full flex justify-center items-center menu__items-hover text-[#131736] dark:text-white"
          @click="darkModeInput"
        >
          <i class="ri-moon-fill text-[16px] z-20" v-if="darkMode"></i>
          <i class="ri-sun-fill text-[16px] z-20" v-else></i>
        </div>
         <div
          class="w-[52px] h-[52px] border-2 border-[#EAEEF3] dark:border-cloud-burst rounded-full flex justify-center items-center menu__items-hover text-[#131736] dark:text-white"
          @click="darkModeInput"
        >
          <a href="https://github.com/amirz-dev" target="_blank">
              <i class="ri-github-line text-[16px] z-20"></i>
          </a>
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

    const darkMode = computed(() => store.getters.darkMode);

    function darkModeInput() {
      document.body.classList.toggle("dark");
      store.commit("darkMode", !darkMode.value);
    }

    return {
      darkMode,
      darkModeInput,
    };
  },
}
</script>

<style>

</style>