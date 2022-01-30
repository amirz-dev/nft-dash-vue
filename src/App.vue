<template>
  <div class="flex">
      <!--========== Menu ==========-->
      <div class="flex flex-col w-3/12 px-10 py-8 dark:bg-dark">
        <!--========== user ==========-->
        <div class="flex w-full">
          <div class="basis-1/4">
            <img src="./assets/img/1.jpg" alt="" class="w-16 rounded-full" />
          </div>
          <div class="basis-2/4">
            <p class="text-[24px] font-semibold dark:text-white">Amir</p>
            <p class="text-[14px] font-semibold dark:text-white ">
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
          class="w-full h-auto mt-6 py-8 flex flex-col text-center rounded-3xl relative dark:bg-light-slat-Blue "
        >
          <p class="text-[14px] font-semibold dark:text-melrose ">Your Ballance</p>
          <p class="text-[34px] font-semibold mt-4 z-10 dark:text-white">2,401.02</p>
          <div class="flex justify-center mt-3 z-10">
            <img src="./assets/img/logos_ethereum.svg" alt="" class="w-[10px]" />
            <p class="text-[15px] font-semibold ml-2 dark:text-melrose">ETH</p>
          </div>
          <img
            src="./assets/img/Stastistic.png"
            alt=""
            class="w-[215px] self-center -mt-5"
          />
          <img src="./assets/img/Stastistic-bg.png" alt="" class="w-[320px] absolute" />

          <div
            class="w-[250px] h-14 flex justify-between items-center px-5 mt-5 self-center rounded-full dark:bg-light-indigo hover:cursor-pointer "
          >
            <div
              class="w-6 h-6 rounded-full flex justify-center items-center dark:bg-bright-sun"
            >
              <i
                class="ri-add-line text-xl align-middle dark:text-light-slat-Blue "
              ></i>
            </div>
            <p class="text-[16px] font-semibold ml-3 dark:text-white ">
              Top Up Ballance
            </p>

            <i class="ri-arrow-right-s-line text-xl dark:text-white "></i>
          </div>
        </div>

        <!--========== NAV ==========-->
        <nav class="w-full flex flex-col mt-6 h-auto">
          <ul class="list-none">
            <li
              class="flex items-center py-2 px-3 my-1 rounded-xl text-light-slat-Blue menu__items-hover"
            >
              <i class="ri-dashboard-line text-[20px]"></i>
              <p class="text-[18px] font-semibold ml-5">Dashboard</p>
            </li>
            <li
              class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
            >
              <div class="flex items-center">
                <i class="ri-store-2-line text-[20px]"></i>
                <p class="text-[18px] font-semibold ml-5">Market</p>
              </div>
              <div class="px-3 bg-black-Eel rounded-full">
                <p class="text-bright-sun text-[15px] font-semibold">PRO</p>
              </div>
            </li>
            <li
              class="flex items-center py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
            >
              <i class="ri-hammer-line text-[20px]"></i>
              <p class="text-[18px] font-semibold ml-5">Active Bids</p>
            </li>
          </ul>

          <p class="text-[#565976] text-[12px] font-semibold mt-10">
            MY PROFILE
          </p>

          <ul class="list-none">
            <li
              class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
            >
              <div class="flex items-center">
                <i class="ri-user-3-line text-[20px]"></i>
                <p class="text-[18px] font-semibold ml-5">My Portfolio</p>
              </div>
              <div class="px-2 py-1 rounded-full bg-cloud-burst">
                <p class="text-[12px] font-semibold">+6</p>
              </div>
            </li>
            <li
              class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
            >
              <div class="flex items-center">
                <i class="ri-folder-line text-[20px]"></i>
                <p class="text-[18px] font-semibold ml-5">History</p>
              </div>
            </li>
            <li
              class="flex items-center justify-between py-2 px-3 my-1 rounded-xl text-Amethyst-smoke menu__items-hover"
            >
              <div class="flex items-center">
                <i class="ri-heart-3-line text-[20px]"></i>
                <p class="text-[18px] font-semibold ml-5">Favorites</p>
              </div>
              <div class="px-2 py-1 rounded-full bg-cloud-burst">
                <p class="text-[12px] font-semibold">+6</p>
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
              <label
                for="toggleB"
                class=" flex items-center cursor-pointer"
              >
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
                  <i
                    class="ri-moon-fill text-light-slat-Blue text-[16px] z-20"
                  ></i>
                  <i
                    class="ri-sun-line text-Amethyst-smoke text-[16px] z-20"
                  ></i>
                </div>
              </label>
            </div>
          </div>
        </nav>
      </div>

      <!--========== Main ==========-->
      <div class="w-9/12 flex flex-col h-1/1 pl-16 py-8 pr-10 dark:bg-ebony-clay">
        <!--========== Head ==========-->
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <p class="text-[30px] font-semibold dark:text-white ">Good morning, Amir</p>
            <div class="flex items-center mt-1">
              <img src="./assets/img/1.jpg" alt="" class="rounded-full w-[30px] border-2 border-light-slat-Blue">
              <p class="text-[16px] font-semibold text-regent-grey ml-3">Finish your profile</p>
              <p class="text-[16px] font-semibold text-light-slat-Blue ml-3 hover:cursor-pointer">Edit Now</p>
            </div>
          </div>

          <div class="flex items-center">
            <!--========== Toggle ==========-->
            <div class="flex items-center">
              <label
                for="tiggleC"
                class=" flex items-center cursor-pointer"
              >
                <!-- toggle -->
                <div
                  class="relative flex items-center justify-between bg-cloud-burst w-[232px] h-12 px-8 rounded-full"
                >
                  <input type="checkbox" id="tiggleC" class="sr-only" />

                  <!-- dot -->
                  <div
                    class="dot absolute left-1 bg-dark w-[105px] h-10 rounded-full transition"
                  ></div>
                  <!-- line -->
                  <p class="text-white text-[14px] font-semibold z-10">Creator</p>
                  <p class="text-regent-grey text-[14px] font-semibold z-10">Collector</p>
                </div>
              </label>
            </div>

            <div class="ml-16 flex gap-5">
              <div class="w-[52px] h-[52px] border-2 border-cloud-burst rounded-full flex justify-center items-center menu__items-hover dark:text-white">
                <i class="ri-settings-3-line text-[21px]"></i>
              </div>
              <div class="w-[52px] h-[52px] relative border-2 border-cloud-burst rounded-full flex justify-center items-center menu__items-hover dark:text-white">
                <i class="ri-notification-2-line text-[21px]"></i>

                <div class="absolute bg-arty-click-crimson top-0 -right-2 rounded-full py-1 px-2">
                  <p class="text-white text-[10px]">+6</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--========== Trending ==========-->
        <div class="flex flex-col w-full mt-12">
          <!--========== Head ==========-->
          <div class="flex justify-between">
            <h1 class="text-white text-[32px] font-semibold">Trending Auctions</h1>

            <div class="flex items-center rounded-xl px-5 hover:cursor-pointer transition ease-in-out hover:bg-[#272856] duration-300">
              <p class="text-light-slat-Blue text-[16px] font-semibold">All Auctions</p>
              <div class="px-2 py-1 bg-[#272856]  rounded-full ml-2">
                <p class="text-light-slat-Blue text-[14px]">+32</p>
              </div>
            </div>
          </div>

          <!--========== Slider ==========-->
          <div class="slider flex flex-nowrap gap-8 mt-4 pb-2 overflow-x-auto w-full">
            <!--========== Slider num 1 ==========-->
            <div class="group min-w-[295px] h-[350px] rounded-xl overflow-hidden flex flex-col">
              <div class="w-full h-[285px] p-3 flex flex-col bg-cloud-burst rounded-xl  transition ease-in-out duration-300 group-hover:rounded-b-sm z-10">
                <div class="relative w-full flex items-center justify-center ">
                  <img src="./assets/img/slider-1.jpg" alt="" class="rounded-xl w-full h-[175px]">

                  <div class="absolute  bg-[#00000091] flex items-center justify-center gap-2 px-5 py-2 rounded-full hover:cursor-pointer scale-0 transition ease-in-out duration-300 group-hover:scale-100">
                    <img src="./assets/img/mdi_star-four-points.svg" alt="">
                    <p class="text-white text-[16px] font-semibold">Place a Bid</p>
                  </div>
                </div>
                <div class="px-2 mt-5 flex items-end justify-between">
                  <div class="flex flex-col">
                    <h3 class="text-white text-[18px] font-semibold">An Interstellar Wanderer</h3>
                    <p class="text-regent-grey text-[14px] font-semibold mt-2">@ronanhunt88</p>
                  </div>
                  <img src="./assets/img/Ellipse-1.png" alt="" class="w-[32px] rounded-full">
                </div>
              </div>
              <div class="w-full h-[70px] -mt-0.5 px-5 py-3 flex flex-col justify-between transition ease-in-out duration-300 group-hover:bg-haiti">
                <div class="flex justify-between">
                  <p class="text-regent-grey text-[14px] ">Current bid</p>
                  <p class="text-regent-grey text-[14px] ">Ending in</p>
                </div>
                <div class="flex justify-between">
                  <div class="flex">
                    <img src="./assets/img/logos_ethereum.svg" alt="" class="w-[10px]">
                    <p class="text-white text-[14px] ml-2">0.10 ETH</p>
                  </div>
                  <p class="text-white text-[14px] font-semibold">12h 43m 27s</p>
                </div>
              </div>
            </div>
            <!--========== Slider num 2 ==========-->
            <div class="group min-w-[295px] h-[350px] rounded-xl overflow-hidden flex flex-col">
              <div class="w-full h-[285px] p-3 flex flex-col bg-cloud-burst rounded-xl  transition ease-in-out duration-300 group-hover:rounded-b-sm z-10">
                <div class="relative w-full flex items-center justify-center ">
                  <img src="./assets/img/slider-2.jpg" alt="" class="rounded-xl w-full h-[175px]">

                  <div class="absolute  bg-[#00000091] flex items-center justify-center gap-2 px-5 py-2 rounded-full hover:cursor-pointer scale-0 transition ease-in-out duration-300 group-hover:scale-100">
                    <img src="./assets/img/mdi_star-four-points.svg" alt="">
                    <p class="text-white text-[16px] font-semibold">Place a Bid</p>
                  </div>
                </div>
                <div class="px-2 mt-5 flex items-end justify-between">
                  <div class="flex flex-col">
                    <h3 class="text-white text-[18px] font-semibold">Pepe community on tour</h3>
                    <p class="text-regent-grey text-[14px] font-semibold mt-2">@huntlancer</p>
                  </div>
                  <img src="./assets/img/Ellipse-2.png" alt="" class="w-[32px] rounded-full">
                </div>
              </div>
              <div class="w-full h-[70px] -mt-0.5 px-5 py-3 flex flex-col justify-between transition ease-in-out duration-300 group-hover:bg-haiti">
                <div class="flex justify-between">
                  <p class="text-regent-grey text-[14px] ">Current bid</p>
                  <p class="text-regent-grey text-[14px] ">Ending in</p>
                </div>
                <div class="flex justify-between">
                  <div class="flex">
                    <img src="./assets/img/logos_ethereum.svg" alt="" class="w-[10px]">
                    <p class="text-white text-[14px] ml-2">0.10 ETH</p>
                  </div>
                  <p class="text-white text-[14px] font-semibold">12h 43m 27s</p>
                </div>
              </div>
            </div>
             <!--========== Slider num 3 ==========-->
             <div class="group min-w-[295px] h-[350px] rounded-xl overflow-hidden flex flex-col">
              <div class="w-full h-[285px] p-3 flex flex-col bg-cloud-burst rounded-xl  transition ease-in-out duration-300 group-hover:rounded-b-sm z-10">
                <div class="relative w-full flex items-center justify-center ">
                  <img src="./assets/img/slider-3.jpg" alt="" class="rounded-xl w-full h-[175px]">

                  <div class="absolute  bg-[#00000091] flex items-center justify-center gap-2 px-5 py-2 rounded-full hover:cursor-pointer scale-0 transition ease-in-out duration-300 group-hover:scale-100">
                    <img src="./assets/img/mdi_star-four-points.svg" alt="">
                    <p class="text-white text-[16px] font-semibold">Place a Bid</p>
                  </div>
                </div>
                <div class="px-2 mt-5 flex items-end justify-between">
                  <div class="flex flex-col">
                    <h3 class="text-white text-[18px] font-semibold">Mixed Girl Power</h3>
                    <p class="text-regent-grey text-[14px] font-semibold mt-2">@aslanruby</p>
                  </div>
                  <img src="./assets/img/Ellipse-2.png" alt="" class="w-[32px] rounded-full">
                </div>
              </div>
              <div class="w-full h-[70px] -mt-0.5 px-5 py-3 flex flex-col justify-between transition ease-in-out duration-300 group-hover:bg-haiti">
                <div class="flex justify-between">
                  <p class="text-regent-grey text-[14px] ">Current bid</p>
                  <p class="text-regent-grey text-[14px] ">Ending in</p>
                </div>
                <div class="flex justify-between">
                  <div class="flex">
                    <img src="./assets/img/logos_ethereum.svg" alt="" class="w-[10px]">
                    <p class="text-white text-[14px] ml-2">0.10 ETH</p>
                  </div>
                  <p class="text-white text-[14px] font-semibold">12h 43m 27s</p>
                </div>
              </div>
            </div>
            <!--========== Slider num 4 ==========-->
            <div class="group min-w-[295px] h-[350px] rounded-xl overflow-hidden flex flex-col">
              <div class="w-full h-[285px] p-3 flex flex-col bg-cloud-burst rounded-xl  transition ease-in-out duration-300 group-hover:rounded-b-sm z-10">
                <div class="relative w-full flex items-center justify-center ">
                  <img src="./assets/img/slider-1.jpg" alt="" class="rounded-xl w-full h-[175px]">

                  <div class="absolute  bg-[#00000091] flex items-center justify-center gap-2 px-5 py-2 rounded-full hover:cursor-pointer scale-0 transition ease-in-out duration-300 group-hover:scale-100">
                    <img src="./assets/img/mdi_star-four-points.svg" alt="">
                    <p class="text-white text-[16px] font-semibold">Place a Bid</p>
                  </div>
                </div>
                <div class="px-2 mt-5 flex items-end justify-between">
                  <div class="flex flex-col">
                    <h3 class="text-white text-[18px] font-semibold">An Interstellar Wanderer</h3>
                    <p class="text-regent-grey text-[14px] font-semibold mt-2">@ronanhunt88</p>
                  </div>
                  <img src="./assets/img/Ellipse-1.png" alt="" class="w-[32px] rounded-full">
                </div>
              </div>
              <div class="w-full h-[70px] -mt-0.5 px-5 py-3 flex flex-col justify-between transition ease-in-out duration-300 group-hover:bg-haiti">
                <div class="flex justify-between">
                  <p class="text-regent-grey text-[14px] ">Current bid</p>
                  <p class="text-regent-grey text-[14px] ">Ending in</p>
                </div>
                <div class="flex justify-between">
                  <div class="flex">
                    <img src="./assets/img/logos_ethereum.svg" alt="" class="w-[10px]">
                    <p class="text-white text-[14px] ml-2">0.10 ETH</p>
                  </div>
                  <p class="text-white text-[14px] font-semibold">12h 43m 27s</p>
                </div>
              </div>
            </div>
            <!--========== Slider num 5 ==========-->
            <div class="group min-w-[295px] h-[350px] rounded-xl overflow-hidden flex flex-col">
              <div class="w-full h-[285px] p-3 flex flex-col bg-cloud-burst rounded-xl  transition ease-in-out duration-300 group-hover:rounded-b-sm z-10">
                <div class="relative w-full flex items-center justify-center ">
                  <img src="./assets/img/slider-2.jpg" alt="" class="rounded-xl w-full h-[175px]">

                  <div class="absolute  bg-[#00000091] flex items-center justify-center gap-2 px-5 py-2 rounded-full hover:cursor-pointer scale-0 transition ease-in-out duration-300 group-hover:scale-100">
                    <img src="./assets/img/mdi_star-four-points.svg" alt="">
                    <p class="text-white text-[16px] font-semibold">Place a Bid</p>
                  </div>
                </div>
                <div class="px-2 mt-5 flex items-end justify-between">
                  <div class="flex flex-col">
                    <h3 class="text-white text-[18px] font-semibold">Pepe community on tour</h3>
                    <p class="text-regent-grey text-[14px] font-semibold mt-2">@huntlancer</p>
                  </div>
                  <img src="./assets/img/Ellipse-2.png" alt="" class="w-[32px] rounded-full">
                </div>
              </div>
              <div class="w-full h-[70px] -mt-0.5 px-5 py-3 flex flex-col justify-between transition ease-in-out duration-300 group-hover:bg-haiti">
                <div class="flex justify-between">
                  <p class="text-regent-grey text-[14px] ">Current bid</p>
                  <p class="text-regent-grey text-[14px] ">Ending in</p>
                </div>
                <div class="flex justify-between">
                  <div class="flex">
                    <img src="./assets/img/logos_ethereum.svg" alt="" class="w-[10px]">
                    <p class="text-white text-[14px] ml-2">0.10 ETH</p>
                  </div>
                  <p class="text-white text-[14px] font-semibold">12h 43m 27s</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--========== Featured ==========-->
        <div class="flex justify-between mt-16">

          <div class="flex flex-col w-[575px]">
            <!--========== Head ==========-->
          <div class="flex justify-between">
            <h1 class="text-white text-[32px] font-semibold">Featured Creators</h1>

            <div class="flex items-center rounded-xl px-5 hover:cursor-pointer transition ease-in-out hover:bg-[#272856] duration-300">
              <p class="text-light-slat-Blue text-[16px] font-semibold">All Creators</p>
            </div>
          </div>

          <!--========== box 1 ==========-->
          <div class="flex justify-between items-center w-full h-[112px] rounded-xl bg-[#24284C] mt-5 px-6">
            <div class="flex items-center">
              <img src="./assets/img/Ellipse-4.png" alt="" class="w-[54px] h-[54px]">
              <div class="flex flex-col ml-5">
                <h3 class="text-[24px] text-white ">Sam rolfeswit</h3>
                <p class="text-[16px] text-regent-grey">@samrolfes 
                  <span class="text-light-slat-Blue hover:cursor-pointer">
                    <i class="ri-add-line align-middle -mr-1"></i>
                    Follow
                  </span>
                </p>
              </div>
            </div>
            <div class="flex">
              <img src="./assets/img/Featured-1.jpg" alt="" class="w-[90px] h-[75px] rounded-xl object-cover">
              <div class="relative flex items-center justify-center ml-5">
                <img src="./assets/img/Featured-2.jpg" alt="" class="w-[50px] h-[75px] rounded-xl object-cover">

                <div class="absolute w-[28px] h-[28px] rounded-full bg-dark flex justify-center items-center">
                  <p class="text-[12px] text-bright-sun font-semibold">+6</p>
                </div>
              </div>
            </div>
          </div>
          <!--========== box 2 ==========-->
          <div class="flex justify-between items-center w-full h-[112px] rounded-xl bg-[#24284C] mt-5 px-6">
            <div class="flex items-center">
              <img src="./assets/img/Ellipse-5.png" alt="" class="w-[54px] h-[54px]">
              <div class="flex flex-col ml-5">
                <h3 class="text-[24px] text-white ">Andrew Benson</h3>
                <p class="text-[16px] text-regent-grey">@pixlpa 
                  <span class="text-light-slat-Blue hover:cursor-pointer">
                    <i class="ri-add-line align-middle -mr-1"></i>
                    Follow
                  </span>
                </p>
              </div>
            </div>
            <div class="flex">
              <img src="./assets/img/Featured-3.jpg" alt="" class="w-[90px] h-[75px] rounded-xl object-cover">
              <div class="relative flex items-center justify-center ml-5">
                <img src="./assets/img/Featured-4.jpg" alt="" class="w-[50px] h-[75px] rounded-xl object-cover">

                <div class="absolute w-[28px] h-[28px] rounded-full bg-dark flex justify-center items-center">
                  <p class="text-[12px] text-bright-sun font-semibold">+6</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div class="flex flex-col w-[435px] bg-[#24284C] rounded-xl px-6 py-7">
            <div class="flex justify-between">
              <img src="./assets/img/Featured-5.jpg" alt="" class="object-cover rounded-xl w-[90px] h-[100px]">
              <img src="./assets/img/Featured-6.jpg" alt="" class="object-cover rounded-xl w-[180px] h-[100px]">
              <img src="./assets/img/Featured-7.jpg" alt="" class="object-cover rounded-xl w-[90px] h-[100px]">
            </div>

            <div class="flex flex-col">
              <img src="./assets/img/Ellipse-6.png" alt="" class="w-[70px] h-[70px] rounded-full self-center -mt-10 ">

              <div class="flex justify-between mt-5">
                <div class="flex flex-col">
                  <div class="flex">
                    <h3 class="text-white text-[18px] font-semibold">Samirah Rokni </h3>
                    <img src="./assets/img/ic_round-verified.svg" alt="" class="ml-2">
                  </div>
                  <p class="text-[14px] text-regent-grey">@satlancer</p>
                </div>

                <div class="flex justify-center items-center w-[95px] h-[40px] bg-light-slat-Blue rounded-full hover:cursor-pointer">
                  <i class="ri-add-line align-middle text-white"></i>
                  <p class="text-white font-semibold test-[14px]">Follow</p>
                </div>
              </div>
              <p class="text-regent-grey text-[14px] mt-5">Artist that archives Black Trans experince in Video games and animation. Info@piqo.design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>
