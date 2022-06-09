import * as SQLite from 'expo-sqlite';

let db = SQLite.openDatabase({name: 'userDataBase.db'});

export default db;