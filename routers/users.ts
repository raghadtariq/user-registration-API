import express from 'express';
import { User } from '../db/entities/User.js';

var router = express.Router();


router.post("/register", async (req, res) => {
    try{
    const { username, password } = req.body;
    const user = new User();
    user.username = username;
    user.password = password;
    
    await user.save();
    res.status(201).send('user created successfully');
    } catch (err) {
        console.log("error in register");
        res.send ('sth wrong!')
    }
});


export default router;