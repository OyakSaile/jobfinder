const express = require('express');
const router = express.Router()
const Job = require('../models/Job')

router.get('/test', (req, res) => {
  res.send('Deu Certo')
})

router.post('/add', (req, res) => {
  let { title, salary, company, description, email, new_job } = req.body;
  res.send(req.body)
  //Insert

  Job.create({
    title,
    description,
    email,
    company,
    new_job,
    salary,
    description
  }).then(() => {
    res.redirect('/')
  }).catch(err => {
    console.log(err)
  })
})

module.exports = router