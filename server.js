const express = require('express')
const connectDB = require('./config/db.js')

connectDB()
const app = express()
app.use(express.json())
app.get('/', (req, res) => {
	res.send('API running')
})

app.use('/api/customers', require('./routes/customers'))

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
