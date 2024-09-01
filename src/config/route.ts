import IndexPage from "../Pages/IndexPage.vue";
import TeamPage from "../Pages/TeamPage.vue";
import UserPage from "../Pages/UserPage.vue";
import SearchPage from "../Pages/SearchPage.vue"
import UserEditPage from "../Pages/UserEditPage.vue";
import SearchResultPage from "../Pages/SearchResultPage.vue";
import UserLoginPage from "../Pages/UserLoginPage.vue";


const routes = [
    { path: '/', component: IndexPage },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
    { path: '/user/list', component: SearchResultPage },
    { path: '/user/login', component: UserLoginPage },
];

export default routes;