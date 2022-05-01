import connection from '../database.js';

const getAll = async () => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            'SELECT * FROM vacations;'
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

const getById = async (id) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `SELECT * FROM vacations WHERE id = ${id};`
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

const addVacation = async (description, img, location, startTime, endTime, price, followers) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `INSERT INTO vacations (description, img, location, startTime, endTime, price, followers)
            VALUES
            ('${description}','${img}','${location}','${startTime}','${endTime}','${price}','${followers}');`
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

const updateVacation = async (id, description, img, location, startTime, endTime, price, followers) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `UPDATE vacations SET description='${description}', img='${img}', location='${location}', startTime='${startTime}',
             endTime='${endTime}', price=${price}, followers=${followers} WHERE id=${id} ;`
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


const deleteVacation = async (id) => {
    let result = {
        success: false,
        data: null
    }

    try {
        let res = await connection.promise().query(
            `DELETE FROM vacations WHERE id = ${id};`
        )

        result.success = true

        return result
    } catch (err) {
        result.success = false
        result.data = err

        return result
    }
}

export default {
    getAll,
    getById,
    addVacation,
    updateVacation,
    deleteVacation
}