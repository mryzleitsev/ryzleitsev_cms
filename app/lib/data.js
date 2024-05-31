import {Product, User} from "./models";
import { connectToDB } from "./utils";

export const fatchUsers = async (q, page) => {
    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 4

    try {
        console.log("Попытка подключения к базе данных...");
        await connectToDB();
        console.log("Успешное подключение к базе данных!");

        const count = await User.find({username:{$regex: regex}}).count();

        console.log("Попытка получения пользователей...");
        const users = await User.find({username:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        console.log("Пользователи получены:", users);

        return {count, users};
    } catch (err) {
        console.error("Ошибка при получении пользователей:", err);
        throw new Error("Failed to fetch users!");
    }
};

export const fatchProducts = async (q, page) => {
    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE = 4

    try {
        console.log("Попытка подключения к базе данных...");
        await connectToDB();
        console.log("Успешное подключение к базе данных!");

        const count = await Product.find({title:{$regex: regex}}).count();

        console.log("Попытка получения продуктов...");
        const products = await Product.find({title:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        console.log("Пользователи получены:", products);

        return {count, products};
    } catch (err) {
        console.error("Ошибка при получении продуктов:", err);
        throw new Error("Failed to fetch products!");
    }
};