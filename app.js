const express = require('express')
const app = express()
const db = require('./db/connection')
const PORT = 3001
const bodyParser = require('body-parser')
const Job = require('./models/Job')


app.listen(PORT, () => {
  console.log(`API iniciada na Porta ${PORT}`)
})


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// DB CONNECTION

db.authenticate().then(() => {
  console.log('Conectou ao Banco')
})
  .catch(err => {
    console.log(err, `Ocorreu um erro`)
  })

// ROUTES
app.get('/', (req, res) => {
  Job.findAll({
    order: [
      ['createdAt', 'DESC']
    ]
  }).then(jobs => {
    res.send(jobs)
  })
})

// JOBS ROUTES
app.use('/jobs', require('./routes/jobs'))