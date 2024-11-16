import { request } from './request';

//登录按钮成功后获取用户信息
export const getLoginByPhone = (phone:number,password:string) => {
  return request.get('/login/cellphone',{
    params: { phone, password }
  });
}