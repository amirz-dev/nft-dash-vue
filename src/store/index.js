import { createStore } from "vuex";

const Store = createStore({
  state() {
    return {
      darkMode: false,
      sliders: [
        {
          img: "slider-1.jpg",
          bid: "0.10 ETH",
          time: "12h 43m 27s",
          name: "An Interstellar Wanderer",
          seller: {
            id: "@ronanhunt88",
            img: "user-1.jpg",
          },
        },
        {
          img: "slider-2.jpg",
          bid: "0.10 ETH",
          time: "12h 43m 27s",
          name: "Pepe community on tour",
          seller: {
            id: "@huntlancer",
            img: "user-2.jpg",
          },
        },
        {
          img: "slider-3.jpg",
          bid: "0.10 ETH",
          time: "12h 43m 27s",
          name: "Mixed Girl Power",
          seller: {
            id: "@aslanruby",
            img: "user-3.jpg",
          },
        },
        {
          img: "slider-1.jpg",
          bid: "0.10 ETH",
          time: "12h 43m 27s",
          name: "An Interstellar Wanderer",
          seller: {
            id: "@ronanhunt88",
            img: "user-1.jpg",
          },
        },
        {
          img: "slider-2.jpg",
          bid: "0.10 ETH",
          time: "12h 43m 27s",
          name: "Pepe community on tour",
          seller: {
            id: "@huntlancer",
            img: "user-2.jpg",
          },
        },
      ],
      menuItems: [
        {
          icon: "ri-dashboard-line",
          text: "Dashboard",
          badge: {
            status: false,
          },
        },
        {
          icon: "ri-store-2-line",
          text: "Market",
          badge: {
            status: true,
            text: "PRO",
          },
        },
        {
          icon: "ri-hammer-line",
          text: "Active Bids",
          badge: {
            status: false,
          },
        },
      ],
      myProfileItems: [
        {
          icon: "ri-user-3-line",
          text: "My Portfolio",
          badge: {
            status: true,
            text: "+6",
          },
        },
        {
          icon: "ri-folder-line",
          text: "History",
          badge: {
            status: false,
          },
        },
        {
          icon: "ri-heart-3-line",
          text: "Favorites",
          badge: {
            status: true,
            text: "+6",
          },
        },
      ],
      featuredItems: [
        {
          img: "user-4.jpg",
          name: "Sam rolfeswit",
          id: "@samrolfes",
          works: {
            img1: "Featured-1.jpg",
            img2: "Featured-2.jpg",
            badge: "+6",
          },
        },
        {
          img: "user-5.jpg",
          name: "Andrew Benson",
          id: "@pixlpa",
          works: {
            img1: "Featured-3.jpg",
            img2: "Featured-4.jpg",
            badge: "+6",
          },
        },
      ],
      userSuggestion: {
        name: "Samirah Rokni",
        id: "@satlancer",
        text: "Artist that archives Black Trans experince in Video games and animation. Info@piqo.design",
        img: "user-6.jpg",
        works: {
          img1: "Featured-5.jpg",
          img2: "Featured-6.jpg",
          img3: "Featured-7.jpg",
        },
      },
    };
  },
  getters: {
    sliders(state) {
      return state.sliders;
    },
    menuItems(state) {
      return state.menuItems;
    },
    myProfileItems(state) {
      return state.myProfileItems;
    },
    featuredItems(state) {
      return state.featuredItems;
    },
    userSuggestion(state) {
      return state.userSuggestion;
    },
    darkMode(state) {
      return state.darkMode;
    },
  },
  mutations: {
    darkMode(state, payload) {
      state.darkMode = payload;
    },
  },
});

export default Store;
