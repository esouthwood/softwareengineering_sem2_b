const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'DefaultUser',
    host: 'expertsoftware.duckdns.org',
    database: 'SoftEng',
    password: '',
    port: 5432,
})
pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
})
const client = new Client({
    user: 'DefaultUser',
    host: 'expertsoftware.duckdns.org',
    database: 'SoftEng',
    password: '',
    port: 5432,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})
