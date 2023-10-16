const express = require('express')
const app = express()

// use ejs files to prepare templates for views
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
	// task list data
	const tasks = ['Study HTML', 'Study CSS', 'Study JS', 'Study OOP']
	res.render('index', {tasks: tasks})
})


app.listen(3001, () => {
	console.log('Example app is started at https://localhost:3001')
})