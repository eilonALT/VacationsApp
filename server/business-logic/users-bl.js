import usersDal from '../data-access-layer/users-dal.js';
import bcrypt from 'bcrypt';

const getUsers = async () => {
    return await usersDal.getAll()
}
const getUser = async (userName, password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    let result = await usersDal.getUser(userName);

    if (result.data.length > 0) {
        let check = bcrypt.compareSync(password, result.data[0].password);
        if (check) {
            return result
        }
        else {
            result.success = false;
            result.data = "Wrong password";
            return result
        }
    }
    else {
        result.success = false;
        result.data = "User not found";
    }
    return result
}

const addUser = async (body) => {
    let password = body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return await usersDal.addUser(
        body.firstName, body.lastName, body.userName, hash)
}

// const deleteUser = async (id) => {
//     return await usersDal.deleteUser(id)
// }

// const updateUser = async (id, body) => {
//     return await usersDal.updateUser(
//         id, body.description, body.img, body.location, body.startTime, body.endTime, body.price, body.followers)
// }
export {
    getUsers,
    getUser,
    addUser,
    // deleteUser,
    // updateUser
}