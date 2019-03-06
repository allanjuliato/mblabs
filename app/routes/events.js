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

    const api = app.api.events

    app.route('/events')
        .get((request, response) => {
            pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
                if (error) {
                    throw error
                }
                response.json(results.rows)
            })
        }
        )
    //.post(api.add)
}


