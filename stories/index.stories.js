import MyView from "../src/view.vue";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => ({
  components: { MyView },
  template: "<my-view></my-view>",
});
