import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "custom-homepage-content",

  initialize() {
    withPluginApi("1.10.0", (api) => {
      api.decorateWidget("main-outlet:after", () => {
        return [
          api.h("div.custom-homepage-content", [
            api.h("p", "👋 这是我的自定义首页组件！")
          ])
        ];
      });
    });
  },
};
