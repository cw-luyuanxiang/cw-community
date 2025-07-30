// javascripts/discourse/initializers/test-log.js.es6
// 放在你的 theme 的 initialize 中
import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "log-all-widgets",
  initialize() {
    withPluginApi("1.0", (api) => {
      const originalWidget = require("discourse/widgets/widget").default;

      const createWidget = originalWidget.createWidget;
      originalWidget.createWidget = function (name, options) {
        console.log("[Widget Registered]", name); // 打印所有注册的 widget 名称
        return createWidget.call(this, name, options);
      };
    });
  },
};
