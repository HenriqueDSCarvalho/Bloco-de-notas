import DataManeger from "./DataManeger";
import db from "./DataBaseInstance";

export default class DataBaseInit {
    login = [
        {
            name: 'jose',            
            email: 'jose123@gmail.com',
            password: '123456'
        },
        {
            name: 'henrique',
            email: 'henrique123@gmail.com',
            password: '654321'
        },

    ];
 
    constructor() {
        this.initDb();
    }
    initDb() {
        const sql = [
            DataManeger.createTableUser(),
            DataManeger.createUser(this.login[0]),
          
        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}
