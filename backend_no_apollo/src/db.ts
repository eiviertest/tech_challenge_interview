import { createConnection } from "typeorm";
import { Users_Test_Ale_Vargas } from "./entities/Users_Test_Ale_Vargas";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_TYPE, DB_USERNAME } from './config';

export const connectDB =async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: Number(DB_PORT),
        host: DB_HOST,
        database: DB_NAME,
        entities: [Users_Test_Ale_Vargas],
        synchronize: false,
        ssl: false
    });
}