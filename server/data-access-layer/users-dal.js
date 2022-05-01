import connection from '../database.js';

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM users;'
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const getUser = async (userName) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `SELECT * FROM users WHERE userName='${userName}';`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

const addUser = async (firstName, lastName, userName, password) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO users (firstName,lastName,userName,password,role)
            VALUES
            ('${firstName}','${lastName}','${userName}','${password}','user');`
        )

        result.success = true
        result.data = res[0]

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

// const updateUser = async (id, description, img, location, startTime, endTime, price, followers) => {
//     let result = {
//         success: false,
//         data: null
//     }

//     try {
//         let res = await connection.promise().query(
//             `UPDATE vacations SET description=${description}, img=${img}, location=${location}, startTime=${startTime},
//              endTime=${endTime}, price=${price}, followers=${followers} WHERE id=${id} ;`
//         )

//         result.success = true
//         result.data = res[0]

//         return result
//     } catch (err) {
//         result.success = false
//         result.data = err

//         return result
//     }
// }


// const deleteUser = async (id) => {
//     let result = {
//         success: false,
//         data: null
//     }

//     try {
//         let res = await connection.promise().query(
//             `DELETE FROM vacations WHERE id = ${id};`
//         )

//         result.success = true

//         return result
//     } catch (err) {
//         result.success = false
//         result.data = err

//         return result
//     }
// }

export default {
    getAll,
    getUser,
    addUser,
    // updateUser,
    // deleteUser
}