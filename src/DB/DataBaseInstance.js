import * as SQLite from 'expo-sqlite';

let db = SQLite.openDatabase({name: 'UserDatabase.db'});

export default db;