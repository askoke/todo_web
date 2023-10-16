const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('test')
})


app.listen(3001, () => {
	console.log('Example app is started at https://localhost:3001')
})