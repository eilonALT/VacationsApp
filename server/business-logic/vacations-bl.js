import vacationsDal from '../data-access-layer/vacations-dal.js';

const getVacations = async () => {
    return await vacationsDal.getAll()
}
const getVacation = async (id) => {
    return await vacationsDal.getById(id)
}

const addVacation = async (body) => {
    return await vacationsDal.addVacation(
        body.description, body.img, body.location, body.startTime.slice(0,10), body.endTime.slice(0,10), +body.price, +body.followers)
}

const deleteVacation = async (id) => {
    return await vacationsDal.deleteVacation(id)
}

const updateVacation = async (id, body) => {
    return await vacationsDal.updateVacation(
        id, body.description, body.img, body.location, body.startTime.slice(0,10), body.endTime.slice(0,10), body.price, +body.followers)
}
export {
    getVacations,
    getVacation,
    addVacation,
    deleteVacation,
    updateVacation
}