import { IUser } from "./user.interface";
import { User } from "./user.model";

export const userToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();
    console.log(user.fullName());
    return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
};

export const getUserByIdFromDB = async (id: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: id });
    return user;
}

export const getAllAdminUsers = async () => {
    const admins = await User.getAllAdminUsers();
    return admins;
}