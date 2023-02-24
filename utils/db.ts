import {createPool} from "mysql2/promise";

// @ts-ignore
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megak_ads',
    namedPlaceholders: true,
    decimalNumbers: true,
});