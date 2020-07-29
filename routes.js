const express = require('express')
const { Router } = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', function (req, res) {
    return res.redirect("teachers")
})

routes.get('/teachers', function (req, res) {
    return res.render("teacher/index")
})

routes.get('/teachers/create', function (req, res) {
    return res.render("teacher/create")
})

routes.post('/teachers', teachers.post)

routes.get('/members', function (req, res) {
    return res.send("members")
})

module.exports = routes