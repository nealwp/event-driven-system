import { findUserByUsername } from './schema/user'

async function login(username: string) {
    const user = await findUserByUsername(username);
    if(user[0]){
        return true;
    } else {
        return false;
    }
}

export default { login }
