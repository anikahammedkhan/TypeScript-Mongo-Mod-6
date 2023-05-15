import { NextFunction, Request, Response } from "express";
import { getAllAdminUsers, getUserByIdFromDB, getUserFromDB, userToDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body
    const user = await userToDB(data)
    res.status(200).json({
        message: "User created",
        user: user
    })
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUserFromDB()
    res.status(200).json({
        message: "User fetched",
        users: users
    })
}


export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const user = await getUserByIdFromDB(id)
    res.status(200).json({
        message: "User fetched",
        user: user
    })
}

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getAllAdminUsers()
    res.status(200).json({
        message: "User fetched",
        user: user
    })
}

