import { createWidget } from "discourse/widgets/widget";

export default createWidget("main-outlet", {
  tagName: "div.custom-homepage-content",

  html() {
    return this.h("p", {}, "👋 This is a custom homepage widget!");
  },
});
