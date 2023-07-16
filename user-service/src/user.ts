import { findUserByUsername, createUser, modifyAccountInfo, NewUser } from './schema/user'

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

async function modifyInfo(userInfo: NewUser) {
    if (!await userExists(userInfo.email)) {
        return { success: false, reason: `user "${userInfo.email}" does not exist`, user: userInfo }
    }

    const modified = await modifyAccountInfo(userInfo)
    if(modified[0]) {
        return {success: true, user: modified[0]}
    } else {
        return {success: false, reason: `idk why we're here`, user: userInfo}
    }
}

export default { login, create, modifyInfo }
