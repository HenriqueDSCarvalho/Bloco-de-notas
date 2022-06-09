import db from "./DataBaseInstance";

const sqlCreate = 'CREATE TABLE IF NOT EXISTS NOTAS (id INTERGER PRIMARY KEY AUTOINCREMENT,nota VARCHAR(200) , tipo VARCHAR(200), dataCriacao VARCHAR(200), dataAtualizacao datetime)';

const sqlInsert = 'INSERT INTO NOTAS (nota, tipo, dataCriacao) VALUES (?,?,?)';

const sqlSelect = 'SELECT * FROM NOTAS WHERE id = ?';

const sqlUpdate = 'UPDATE NOTAS SET nota = ?, tipo = ?, dataAtualizacao = ?';

const sqlDelete = 'DELETE FROM NOTAS id =?';


export default class DataManeger {

    static async createTableNotas() {
        (await db).transaction(tx => {
           tx.executeSql(sqlCreate); 
        });
    }

    static async openDatabase(){
        return await db;
    }

    static async createNotas(nota) {
        (await db).transaction(tx => {
            tx.executeSql(sqlInsert, [nota.nota, nota.tipo, nota.dataCriacao]);
        });
    }
    static async getNotas(id) {
        let Notas = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, {rows }) =>{
                user = rows._array[0];
            });
        });
        return Notas;
    }
    static async deleteNotas(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }
    static async updateNotas(nota) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [nota.nota, nota.tipo, nota.dataCriacao]);
        });
    }
    
}