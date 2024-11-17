import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/css/main.scss";

import App from "./App.vue";
import router from "./router/index.ts";
import generateDummyTasks from "./data/tasks.ts";

const app = createApp(App);

app.use(createPinia());
app.use(router);

generateDummyTasks();

app.mount("#app");
