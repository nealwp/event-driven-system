import { middleware } from "./middleware"
import { router } from "./routes"
import { createServer } from "./server"
import * as db from './db';

const PORT: number = 3001

export function timestamp() {
    return new Date().toISOString();
}

const app = createServer(middleware, router)

db.initialize().then(() => {
    app.listen(PORT, () => {
        console.log(`[${timestamp()}]: server started`)
    })
})
