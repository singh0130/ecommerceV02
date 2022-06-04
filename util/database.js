const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Buka&#5225'
});

module.exports=pool.promise();