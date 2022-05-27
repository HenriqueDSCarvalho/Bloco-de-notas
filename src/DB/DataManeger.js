import db from "./DataBaseInstance";

const sqlCreate = 'CREATE TABLE IF NOT EXISTS NOTAS (id INTERGER PRIMARY KEY AUTOINCREMENT,nota VARCHAR(200) , tipo BIT NOT NULL, dataCriacao datetime, dataAtualizacao datetime)';

const sqlInsert = 'INSERT INTO NOTAS (nota, tipo, dataCriacao) VALUES (?,?,?)';

const sqlSelect = 'SELECT * FROM NOTAS WHERE id = ?';

const sqlUpdate = 'UPDATE NOTAS SET nota = ?, tipo = ?, dataAtualizacao = ?';

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

    async createNotas(nota) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [nota.nota, nota.tipo, nota.dataCriacao]);
        });
    }
    
}