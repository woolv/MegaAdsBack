import {createPool} from "mysql2/promise";

// @ts-ignore
export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'megaads',
    namedPlaceholders: true,
    decimalNumbers: true,
});