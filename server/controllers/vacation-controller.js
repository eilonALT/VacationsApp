import express from "express";
import {addVacation, getVacations, getVacation, updateVacation, deleteVacation} from "../business-logic/vacations-bl.js";


const vacationRouter = express.Router();

vacationRouter.get("/vacations", async (req, res) => {
    let result = await getVacations();
    res.send(result);
});

vacationRouter.get("/vacations/:id", async (req, res) => {
    let id = req.params.id;
    let result = await getVacation(id);
    res.send(result);
});

vacationRouter.post('/vacations', async (req, res) => {
    let result = await addVacation(req.body);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        result.data = {
            ...req.body,
            id: result.data.insertId
        }

        res.send(result)
    }
})

vacationRouter.delete('/vacations/:id', async (req, res) => {
    let result = await deleteVacation(req.params.id);

    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

vacationRouter.put('/vacations/:id', async (req, res) => {
    let result = await updateVacation(req.params.id, req.body);
    console.log(req.body);
    if (!result.success) {
        res.status(500).send(result)
    } else {
        res.send(result)
    }
})

export {
    vacationRouter
}