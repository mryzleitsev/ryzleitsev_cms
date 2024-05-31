import { User } from "./models";
import { connectToDB } from "./utils";

export const fatchUsers = async (q) => {

    const regex = new RegExp(q, "i")
    try {
        console.log("Попытка подключения к базе данных...");
        await connectToDB();
        console.log("Успешное подключение к базе данных!");

        console.log("Попытка получения пользователей...");
        const users = await User.find({username:{$regex: regex}});
        console.log("Пользователи получены:", users);

        return users;
    } catch (err) {
        console.error("Ошибка при получении пользователей:", err);
        throw new Error("Failed to fetch users!");
    }
};
