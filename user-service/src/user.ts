import { findUserByUsername, createUser, NewUser } from './schema/user'

async function login(username: string) {
    const user = await findUserByUsername(username);
    if(user[0]){
        return true;
    } else {
        return false;
    }
}

async function create(user: NewUser) {
    if (await userExists(user.email)){
        return {success: false, reason: `user "${user.email}" already exists`, user}
    }

    const newUser = await createUser(user)
    return {success: true, user: newUser[0] }
}

async function userExists(username: string) {
    const user = await findUserByUsername(username)
    if (user[0]) {
        return true;
    } else {
        return false;
    }
}

export default { login, create }
