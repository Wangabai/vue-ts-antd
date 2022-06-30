/*
 * @Author: 王鑫
 * @Description: user mockjs
 * @Date: 2022-04-19 10:28:39
 */
export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: (req: any) => {
      const { username, password } = req.body
      console.log(req)
      if (username === 'jack' && password === 'redballoon') {
        return {
          code: 200,
          message: '登陆成功'
        }
      } else {
        return {
          code: 500,
          data: null,
          message: '账户密码错误'
        }
      }
    }
  }
]
