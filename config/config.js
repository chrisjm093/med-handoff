module.exports ={
  "development": {
    "username": "root",
    "password": process.env.DEV_DB_PASS,
    "database": "medhandoff_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": "obwhekmpqc2wywi1",
    "password": "tj0l6le2p7azu0ce",
    "database": "nqdxrsjio1xqczjo",
    "host": "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
