import db from "./DataBaseInstance";

const sqlCreate = 'CREATE TABLE IF NOT EXISTS NOTAS (id INTERGER PRIMARY KEY AUTOINCREMENT,Notas CHAR(10000) , IMPORTANTE BIT NOT NULL,  NORMAL BIT NOT NULL, dataCriacao datetime, dataAtualizacao datetime)';

const sqlInsert = 'INSERT INTO NOTAS (Notas, Importante, Normal, dataCriacao, dataAtualizacao) VALUES (?,?)';

const sqlSelect = 'SELECT * FROM NOTAS WHERE id = ?';

const sqlUpdate = 'UPDATE NOTAS SET Notas = ?, Importante = ?, normal = ?, notasdataCriacao = ?, dataAtualizacao = ?';

const sqlDelete = 'DELETE FROM NOTAS id =?';


export default class DataManeger {

    async createTableNotas() {
        (await db).transaction(tx => {
           tx.executeSql(sqlCreate); 
        });
    }

    async openDatabase(){
        return await db;
    }

    async createNotas(Notas) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert)
        });
    }

}