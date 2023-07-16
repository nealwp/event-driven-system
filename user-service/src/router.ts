import { Request, Response, Router } from 'express'
import { timestamp } from './app'
import user from './user'

const router = Router()

router.post('/user/login', async (req: Request, res: Response) => {
    const { username } = req.body
    const loginSuccess = await user.login(username);

    if (!loginSuccess) {
        console.log(`[${timestamp()}]: user "${username}" login failure`)
        return res.redirect('http://localhost:3000/unauthorized')
    }

    console.log(`[${timestamp()}]: user "${username}" login success`)
    return res.redirect('http://localhost:3000/products');
})

router.post('/user/create', async (req: Request, res: Response) => {
    const userInfo = req.body
    console.log(userInfo)
    const result = await user.create(userInfo);

    if (result.success) {
        console.log(`[${timestamp()}]: user "${result.user.email}" create success`)
        return res.redirect('http://localhost:3000/login');
    } else {
        console.log(`[${timestamp()}]: user create failure: ${result.reason}`)
        return res.redirect('http://localhost:3000/unauthorized')
    }

})

export { router }
