/**
 * 用户类别
 */
export type UserType = {
    id: string;
    username: string;
    avatar?: string;
    nickname?: string;
    gender?: string;
    birthday?: Date;
    region?: string;
    signature?: string;
    phone?: string;
    email?: string;
    tags: string[];
    userStatus?: number;
    userRole?: number;
    createTime?: Date;
    updateTime?: Date;
};