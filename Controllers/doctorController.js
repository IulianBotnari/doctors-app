
const connection = require('../DB/db_connection.js')

const index = function (req, res) {
    connection.query('SELECT * FROM dottori ', (err, result) => {
        if (err) throw err;
        res.json(result)
    })
}

const store = function (req, res) {
    const { nome, cognome, descrizione, voto } = req.params.body
    connection.query('INSERT INTO dottori (nome, cognome, descrizione, voto) VALUES (?,?,?,?)', [nome, cognome, descrizione, voto], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Dottore aggiunto con successo' })
    })
}


const deleteDoctor = function (req, res) {
    const id = req.params.id
    connection.query('DELETE FROM dottori WHERE id =?', [id], (err, result) => {
        if (err) throw err;
        res.json({ message: 'Dottore eliminato con successo' })
    })
}

module.exports = {
    index,
    store,
    deleteDoctor
}