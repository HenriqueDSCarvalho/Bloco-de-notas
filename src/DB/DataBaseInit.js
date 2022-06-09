import DataManeger from "./DataManeger";
import db from "./DataBaseInstance";
export default class DataBaseInit {
    seeder = [
        {
            nota: 'faculdade',
            tipo: 'normal',
            dataCriacao: 'hoje'
        },
        {
            nota: 'contas',
            tipo: 'importante',
            dataCriacao: 'hoje'
        }
    ]
    constructor() {
        this.initDb();
    }
    initDb() {
        const sql = [
            DataManeger.createTableNotas(),
            DataManeger.createNotas(this.seeder[0]),

        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}
