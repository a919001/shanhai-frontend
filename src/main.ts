import {createApp} from 'vue'
import App from './App.vue'
import Vant from 'vant'
// import {Button, Col, Field, Form, Icon, NavBar, Row, Tabbar, TabbarItem, Tag, TreeSelect} from "vant";

import * as VueRouter from 'vue-router'
import routes from "./config/route";

import 'vant/lib/index.css';

const app = createApp(App);
app.use(Vant);
// app.use(Button);
// app.use(NavBar);
// app.use(Icon);
// app.use(Tabbar);
// app.use(TabbarItem);
// app.use(Tag);
// app.use(TreeSelect);
// app.use(Col);
// app.use(Row);
// app.use(Form);
// app.use(Field);

// @ts-ignore
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
app.use(router);

app.mount('#app');
