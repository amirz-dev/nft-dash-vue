<template>
  <div class="flex flex-col w-[435px] bg-white shadow-lg dark:shadow-none dark:bg-[#24284C] rounded-xl px-6 py-7">
      <div class="flex justify-between gap-3">
        <img
          :src="require('@/assets/img/' + userInfo.works.img1)"
          alt=""
          class="object-cover rounded-xl  h-[100px] basis-1/4"
        />
        <img
          :src="require('@/assets/img/' + userInfo.works.img2)"
          alt=""
          class="object-cover rounded-xl  h-[100px] basis-2/4"
        />
        <img
          :src="require('@/assets/img/' + userInfo.works.img3)"
          alt=""
          class="object-cover rounded-xl h-[100px] basis-1/4"
        />
      </div>

      <div class="flex flex-col">
        <img
          :src="require('@/assets/img/' + userInfo.img)"
          alt=""
          class="w-[70px] h-[70px] rounded-full self-center -mt-10 ring-[6px] ring-white dark:ring-[#24284C]"
        />

        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <div class="flex">
              <h3 class="text-[#131736] dark:text-white text-[18px] font-semibold">
                {{ userInfo.name }}
              </h3>
              <img
                :src="require('@/assets/img/ic_round-verified.svg')"
                alt=""
                class="ml-2"
              />
            </div>
            <p class="text-[14px] text-regent-grey">{{ userInfo.id }}</p>
          </div>

          <div
            class="group flex justify-center items-center w-[95px] h-[40px] bg-light-slat-Blue rounded-full hover:cursor-pointer hover:bg-white border-2 border-light-slat-Blue dark:hover:bg-[#272856] transition duration-300 ease-in-out"
          >
            <i class="ri-add-line align-middle text-white group-hover:text-light-slat-Blue"></i>
            <p class="text-white font-semibold test-[14px] group-hover:text-light-slat-Blue">Follow</p>
          </div>
        </div>
        <p class="text-regent-grey text-[14px] mt-5">
          {{ userInfo.text }}
        </p>
      </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore();

    const userInfo = computed(()=> store.getters.userSuggestion)

    return { userInfo }
  }
}
</script>

<style>

</style>