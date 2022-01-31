<template>
  <div class="flex flex-col w-[435px] bg-[#24284C] rounded-xl px-6 py-7">
      <div class="flex justify-between">
        <img
          :src="require('@/assets/img/' + userInfo.works.img1)"
          alt=""
          class="object-cover rounded-xl w-[90px] h-[100px]"
        />
        <img
          :src="require('@/assets/img/' + userInfo.works.img2)"
          alt=""
          class="object-cover rounded-xl w-[180px] h-[100px]"
        />
        <img
          :src="require('@/assets/img/' + userInfo.works.img3)"
          alt=""
          class="object-cover rounded-xl w-[90px] h-[100px]"
        />
      </div>

      <div class="flex flex-col">
        <img
          :src="require('@/assets/img/' + userInfo.img)"
          alt=""
          class="w-[70px] h-[70px] rounded-full self-center -mt-10"
        />

        <div class="flex justify-between mt-5">
          <div class="flex flex-col">
            <div class="flex">
              <h3 class="text-white text-[18px] font-semibold">
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
            class="flex justify-center items-center w-[95px] h-[40px] bg-light-slat-Blue rounded-full hover:cursor-pointer"
          >
            <i class="ri-add-line align-middle text-white"></i>
            <p class="text-white font-semibold test-[14px]">Follow</p>
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