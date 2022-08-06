import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { vfmPlugin } from 'vue-final-modal';
import App from "./App.vue";

import "./assets/main.css";

library.add(faPlus);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia());
app.use(vfmPlugin);

app.mount("#app");
