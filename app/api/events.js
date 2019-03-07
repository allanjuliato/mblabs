const pool = require('../../config/db')

module.exports = (app) => {

    const Pool = require('pg').Pool
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'apolo0404',
        port: 5432,
    })

    const api = {}

    api.list = (request, response) => {
        pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.json(results.rows)
        })
    }



    api.add = (request, response) => {
        const { local, datahora, nome, flyer, preco, observacao, datalibera, codpromocao } = request.body

        pool.query('INSERT INTO events (local, datahora , nome, flyer, preco, observacao, datalibera, codpromocao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [local, datahora, nome, flyer, preco, observacao, datalibera, codpromocao], (error, results) => {
            if (error) {
                throw error
            }
            response.json(results.insertId)
        })
    }


    return api
}