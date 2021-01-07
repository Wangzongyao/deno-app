/**
 * models 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关注业务
 * 描述：封装异步 API
 */

export interface User {
    name: string,
    password: string,
}

const userMap: Array<User> = [
    {
        name: 'wzy',
        password: '001', 
    },
    {
        name: 'jy',
        password: '002', 
    },
]

export default userMap