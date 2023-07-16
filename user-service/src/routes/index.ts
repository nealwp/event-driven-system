import { Request, Response, Router } from 'express'
import { timestamp } from '../app'
import user from '../user'

const router = Router()

router.post('/user/login', async (req: Request, res: Response) => {
    const { username } = req.body
    const loginSuccess = await user.login(username);

    if (!loginSuccess) {
        console.log(`[${timestamp()}]: user ${username} login failure`)
        return res.redirect('http://localhost:3000/unauthorized')
    }

    console.log(`[${timestamp()}]: user ${username} login success`)
    return res.redirect('http://localhost:3000/products');
})

export { router }
