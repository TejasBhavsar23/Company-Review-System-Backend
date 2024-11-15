import { Model } from "mongoose";
import userModel from "../models/User.js"

export const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = new userModel({
            name,
            email,
            password,
            role: "Admin"
        })
        const saveuser = await user.save();
        res.json({
            saveuser,
            message: "Admin Added Successfully"
        });

    } catch (error) {
        res.json({
            error: "Error Occured"
        })
        console.log(error);
    }
};

export const createAlumni = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new userModel({
            name,
            email,
            password,
            role: "Alumni"
        })
        const savedUser = await user.save();
        res.json({
            savedUser,
        })
    } catch (error) {
        error: "Error Occured"
    }
}

export const createStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new userModel({
            name,
            email,
            password,
            role: "Student"
        })
        const savedUser = await user.save();
        res.json({
            savedUser,
        })
    } catch (error) {
        error: "Error Occured"
    }
}
//Function to get All users data
 export const getAllUsers = async (req, res) => {
    try {
       const getUsers = await userModel.find()
       res.json({
        getUsers
       })
    } catch (error) {
        res.json({
            error:"Cannot fetch Data"
           })
           console.log(error)
    }
}