import MyAxios from "../plugins/MyAxios";
import {setCurrentUserState} from "../status/user";

export const getCurrentUser = async () => {
    // 从远程获取
    const res = await MyAxios.get('/user/current');
    if (res.code === 0) {
        setCurrentUserState(res.data);
        return res.data;
    }
    return null;
}