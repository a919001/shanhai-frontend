import {createApp} from 'vue'
import App from './App.vue'
import {Button, Col, Icon, NavBar, Row, Tabbar, TabbarItem, Tag, TreeSelect} from "vant";

import * as VueRouter from 'vue-router'
import routes from "./config/route";

const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tag);
app.use(TreeSelect);
app.use(Col);
app.use(Row);

// @ts-ignore
const router = VueRouter.createRouter({
    history: VueRouter.createMemoryHistory(),
    routes,
});
app.use(router);

app.mount('#app');
