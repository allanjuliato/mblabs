const pool = require('../../config/db')

module.exports = (app) => {



    const api = app.api.events

    app.route('/events')
        .get(api.list)
        .post(api.add)
}


