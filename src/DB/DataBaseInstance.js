import * as SQLite from 'expo-sqlite';

let db = SQLite.openDataBase({name: 'userDataBase.db'});

export default db;