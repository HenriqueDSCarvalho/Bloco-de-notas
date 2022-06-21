import NotasBd from "./NotaBd";
import db from "./DataBaseInstance";

export default class DBInitNotas {

    notas = [
        {
            name: 'nota1',
            tipo: 1,
            criacao: '2022-06-20'
        },
        {
            name: 'nota2',
            tipo: 0,
            criacao: '2022-06-20'
        },
    ];

    constructor (){
        this.NotaDBInit();
    }

    NotaDBInit() {
        const sql = [
            NotasBd.createTableNotas(),
            NotasBd.createNotas(this.notas[0]),
          
        ];
        db.transaction(tx => {
            sql.forEach(query => {
                tx.executeSql(query);
            });
        });
    }
}