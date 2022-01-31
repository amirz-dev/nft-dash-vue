<template>
  <div class="flex">
    <!--========== Menu ==========-->
    <Menu />

    <!--========== Main ==========-->
    <div class="w-9/12 flex flex-col h-1/1 pl-16 py-8 pr-10 dark:bg-ebony-clay">
      <!--========== Head ==========-->
      <div class="flex justify-between items-center">
        <div class="flex flex-col">
          <p class="text-[30px] font-semibold dark:text-white">
            Good morning, Amir
          </p>
          <div class="flex items-center mt-1">
            <img
              src="./assets/img/1.jpg"
              alt=""
              class="rounded-full w-[30px] border-2 border-light-slat-Blue"
            />
            <p class="text-[16px] font-semibold text-regent-grey ml-3">
              Finish your profile
            </p>
            <p
              class="text-[16px] font-semibold text-light-slat-Blue ml-3 hover:cursor-pointer"
            >
              Edit Now
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <!--========== Toggle ==========-->
          <div class="flex items-center">
            <label for="toggleC" class="flex items-center cursor-pointer">
              <!-- toggle -->
              <div
                class="relative flex items-center justify-between bg-cloud-burst w-[232px] h-12 px-8 rounded-full"
              >
                <input type="checkbox" id="toggleC" class="sr-only" />

                <!-- dot -->
                <div
                  class="dot absolute left-1 bg-dark w-[105px] h-10 rounded-full transition"
                ></div>
                <!-- line -->
                <p class="text-white text-[14px] font-semibold z-10">Creator</p>
                <p class="text-regent-grey text-[14px] font-semibold z-10">
                  Collector
                </p>
              </div>
            </label>
          </div>

          <div class="ml-16 flex gap-5">
            <div
              class="w-[52px] h-[52px] border-2 border-cloud-burst rounded-full flex justify-center items-center menu__items-hover dark:text-white"
            >
              <i class="ri-settings-3-line text-[21px]"></i>
            </div>
            <div
              class="w-[52px] h-[52px] relative border-2 border-cloud-burst rounded-full flex justify-center items-center menu__items-hover dark:text-white"
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
      </div>

      <!--========== Trending ==========-->
      <Trending />

      <!--========== Featured ==========-->
      <Featured />
    </div>
  </div>
</template>

<script>
import Menu from "./components/theMenu/theMenu.vue";
import Trending from "./components/theTrending/theTrending.vue";
import Featured from "./components/theFeatured/theFeatured.vue";
export default {
  name: "App",
  components: {
    Menu,
    Trending,
    Featured,
  },
};
</script>

<style></style>
