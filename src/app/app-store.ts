import { defineStore } from "pinia";
import { Post } from "./types";

export const appStore = defineStore("app", {
  state: () => ({
    activeUser: -1 as number,
    posts: [] as Post[],
  }),
  actions: {
    setActiveUser(id: number) {
      this.activeUser = id;
    },
  },
});
