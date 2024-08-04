import IndexPage from "../Pages/IndexPage.vue";
import TeamPage from "../Pages/TeamPage.vue";
import UserPage from "../Pages/UserPage.vue";
import SearchPage from "../Pages/SearchPage.vue"
import UserEditPage from "../Pages/UserEditPage.vue";


const routes = [
    { path: '/', component: IndexPage },
    { path: '/team', component: TeamPage },
    { path: '/user', component: UserPage },
    { path: '/search', component: SearchPage },
    { path: '/user/edit', component: UserEditPage },
];

export default routes;