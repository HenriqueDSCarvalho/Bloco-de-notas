import db from "./DataBaseInstance";


const sqlCreate = 'CREATE TABLE IF NOT EXISTS NOTAS (id INTERGER PRIMARY KEY AUTOINCREMENT,tipo BIT NOT NULL, criacao DATE';

const sqlInsert = 'INSERT INTO NOTAS (tipo, criacao) VALUES (?,?)';

const sqlSelect = 'SELECT * FROM NOTAS WHERE id = ?';

const sqlUpdate = 'UPDATE NOTAS SET tipo = ?, criacao = ? WHERE id = ?';

const sqlDelete = 'DELETE FROM NOTAS WHERE id = ?';


export default class NotasBd {

    static async createTableNotas() {
        try {
            (await db).transaction(tx => {
                tx.executeSql(sqlCreate);
            });
        } catch (error) {
            console.log(error);

        }
    }

    static async openDatabase() {
        return await db;
    }

    static async createNotas(notas) {
        (await db).transaction(tx => {
            try {
                tx.executeSql(sqlInsert, [notas.tipo, notas.criacao]);
            } catch (error) {
                console.log(error);
            }
        });
    }

    static async getNotas(id) {
        let notas = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                notas = rows._array[0];
            });
        });
        return notas;
    }

    static async deleteNotas(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

    static async updateNotas(notas) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [notas.tipo, nota.criacao]);
        });
    }
}