import express from "express";
// import { createUser,getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers";

// export const login = async (req : express.Request,res : express.Response) =>{
//     try{
//         const {email,password} = req.body;
//         if(!email || !password){
//             res.sendStatus(400);
//         }
//         const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
//         if(!user){
//             return res.sendStatus(400);
//         }

//         const expectedHash = authentication(user.authentication.salt,password);

//         if(user.authentication.password !== expectedHash){
//             return res.sendStatus(403);
//         }

//         const salt = random();
//         user.authentication.sessionToken = authentication(salt,user._id.toString());

//         await user.save();

//         res.cookie("AUTH",user.authentication.sessionToken,{domain : 'localhost ',path : "/"});

//         res.status(200).json(user).end();
//     }
//     catch(error){
//         console.log(error);
//         res.sendStatus(400);
//     }
// }

// export const register = async (req : express.Request,res : express.Response) =>{
//     try{
//         const {username,email,password} = req.body;
//         if(!username || !email || !password) res.sendStatus(400);
//         const existingUser = await getUserByEmail(email);
//         if(existingUser) res.sendStatus(400);

//         const salt = random();

//         const user = await createUser({
//             username,
//             email,
//             authentication : {
//                 salt ,
//                 password : authentication(salt,password)
//             }
//         })

//         return res.status(200).json(user).end();
//     }catch(error){
//         console.log(error);
//         res.sendStatus(400);
//     }
// }