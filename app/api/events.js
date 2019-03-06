/*const pool = require('../../config/db')

module.exports = (app) => {
    const api = {}

    api.list = pool.query('SELECT * FROM events ORDER BY ID_Autor ASC', (error, res) => {
            if (error) {
                throw error
            }
            console.log(res.rows)
        })

    

    api.add = (req, res) => {
        res.end('Adicionado')
    }

    return api
}*/