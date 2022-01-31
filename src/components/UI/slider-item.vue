<template>
  <div
    class="group min-w-[295px] h-[350px] rounded-xl overflow-hidden flex flex-col"
  >
    <div
      class="w-full h-[285px] p-3 flex flex-col bg-cloud-burst rounded-xl transition ease-in-out duration-300 group-hover:rounded-b-sm z-10"
    >
      <div class="relative w-full flex items-center justify-center">
        <img
          :src='require("@/assets/img/" + slide.img)'
          alt=""
          class="rounded-xl w-full h-[175px]"
        />

        <div
          class="absolute bg-[#00000091] flex items-center justify-center gap-2 px-5 py-2 rounded-full hover:cursor-pointer scale-0 transition ease-in-out duration-300 group-hover:scale-100"
        >
          <img :src='require("@/assets/img/mdi_star-four-points.svg")' alt="" />
          <p class="text-white text-[16px] font-semibold">Place a Bid</p>
        </div>
      </div>
      <div class="px-2 mt-5 flex items-end justify-between">
        <div class="flex flex-col">
          <h3 class="text-white text-[18px] font-semibold">
            {{slide.name}}
          </h3>
          <p class="text-regent-grey text-[14px] font-semibold mt-2">
            {{slide.seller.id}}
          </p>
        </div>
        <img
          :src='require("@/assets/img/" + slide.seller.img)'
          alt=""
          class="w-[32px] rounded-full"
        />
      </div>
    </div>
    <div
      class="w-full h-[70px] -mt-0.5 px-5 py-3 flex flex-col justify-between transition ease-in-out duration-300 group-hover:bg-haiti"
    >
      <div class="flex justify-between">
        <p class="text-regent-grey text-[14px]">Current bid</p>
        <p class="text-regent-grey text-[14px]">Ending in</p>
      </div>
      <div class="flex justify-between">
        <div class="flex">
          <img :src='require("@/assets/img/logos_ethereum.svg")' alt="" class="w-[10px]" />
          <p class="text-white text-[14px] ml-2">{{ slide.bid }}</p>
        </div>
        <p class="text-white text-[14px] font-semibold">{{ slide.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['slide']
};
</script>

<style></style>
