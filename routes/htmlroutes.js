const path = require('path')

module.exports = function (app) {
    app.get('/', (_, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })

    app.get('/exercise', (_, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'))
    })

    app.get('/stats', (_, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'))
    })
}