/*
 * @Author: 王鑫
 * @Description: 
 * @Date: 2022-06-30 10:33:34
 */
import service from '@/request/index'

// 定义接口的传参
interface UserInfoParam {
	username: string,
	password: string
}

// 获取用户信息
export function login(param: UserInfoParam) {
    return service({
		url: '/api/user/login',
		method: 'post',
		data: param,
	})
}