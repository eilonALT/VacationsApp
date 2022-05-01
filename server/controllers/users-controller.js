import express from "express";
import { addUser, getUsers, getUser } from "../business-logic/users-bl.js";


const UsersRouter = express.Router();

UsersRouter.get("/users", async (req, res) => {
    let result = await getUsers();
    res.send(result);
});

UsersRouter.get("/users/:userName/:password", async (req, res) => {
    let userName = req.params.userName;
    let password = req.params.password;

    let result = await getUser(userName, password);

    res.send(result);
});

UsersRouter.post('/users', async (req, res) => {
    let result = await addUser(req.body);

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

// UsersRouter.delete('/Users/:id', async (req, res) => {
//     let result = await deleteUser(req.params.id);

//     if (!result.success) {
//         res.status(500).send(result)
//     } else {
//         res.send(result)
//     }
// })

// UsersRouter.put('/Users/:id', async (req, res) => {
//     let result = await updateUser(req.params.id, req.body);

//     if (!result.success) {
//         res.status(500).send(result)
//     } else {
//         res.send(result)
//     }
// })

export {
    UsersRouter
}