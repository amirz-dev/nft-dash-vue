<template>
   <div class="flex w-full gap-3">
      <div class="basis-1/4">
        <img
          :src="require('@/assets/img/1.jpg')"
          alt=""
          class="w-16 rounded-full"
        />
      </div>
      <div class="basis-2/4">
        <p class="text-[20px] xl:text-[24px] font-semibold text-[#131736] dark:text-white">Amir</p>
        <p class="text-[12px] xl:text-[14px] font-medium xl:font-semibold text-[#A0A2AE] dark:text-white">
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
</template>

<script>
export default {

}
</script>

<style>

</style>