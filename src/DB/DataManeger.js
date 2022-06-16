import db from "./DataBaseInstance";

const sqlCreate = 'CREATE TABLE IF NOT EXISTS USER (id INTERGER PRIMARY KEY AUTOINCREMENT,email VARCHAR(200), password VARCHAR(200)';

const sqlInsert = 'INSERT INTO USER (email, password) VALUES (?,?)';

const sqlSelect = 'SELECT * FROM USER WHERE id = ?';

const sqlUpdate = 'UPDATE USER SET email = ?, password = ? WHERE id = ?';

const sqlDelete = 'DELETE FROM USER WHERE id = ?';


export default class DataManeger {

    static async createTableUser() {
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

    static async createUser(user) {
        (await db).transaction(tx => {
            try {
                tx.executeSql(sqlInsert, [user.email, user.password]);
            } catch (error) {
                console.log(error);
            }
        });
    }

    
    static async getUser(id) {
        let user = null;
        (await db).transaction(tx => {
            tx.executeSql(sqlSelect, [id], (_, { rows }) => {
                user = rows._array[0];
            });
        });
        return user;
    }
   


    static async deleteUser(id) {
        (await db).transaction(tx => {
            tx.executeSql(sqlDelete, [id]);
        });
    }

   
    static async updateUser(user) {
        (await db).transaction(tx => {
            tx.executeSql(sqlUpdate, [user.email, user.password]);
        });
    }

  

}