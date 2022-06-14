import DataManeger from "./DataManeger";
import db from "./DataBaseInstance";
export default class DataBaseInit {
    seeder = [
        {
            name: 'joao',
            email: 'h96656565@sdkjn.com',
            password: '123456'
        },
        {
            name: 'joao',
            email: 'h96656565@sdkjn.com',
            password: '123456'
        },
    ];
    constructor() {
        this.initDb();
    }
    initDb() {
        const sql = [
            DataManeger.createTableUser(),
            DataManeger.createUser(this.seeder[0]),

        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}
