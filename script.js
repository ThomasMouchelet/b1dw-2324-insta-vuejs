const { createApp, ref } = Vue;
import { CardItem } from "./components/CardItem.js";

const vm = createApp({
  components: {
    "card-post": CardItem,
  },
  data() {
    return {
      postList: [],
    };
  },
  methods: {
    increase(id) {
      console.log("Increase likes for post with id: ", id);
      const post = this.postList.find(post => post.id === id)
      post.like += 1;
    },
  },
  mounted() {
    console.log("App mounted");
    fetch('data.json')
        .then((response) => response.json())
        .then((data) => {
            this.postList = data;
        });
  }
}).mount("#app");
