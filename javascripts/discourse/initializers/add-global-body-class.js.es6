export default {
    name: "add-global-body-class",
  
    initialize(container) {
      const router = container.lookup("router:main");
  
      router.on("routeDidChange", () => {
        // 每次路由切换后给 body 添加类名
        document.body.classList.add("landing-page");
      });
  
      // 初始化时也加一次
      document.body.classList.add("landing-page");
    }
  };
  