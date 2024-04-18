const express = require('express');
const cors = require('cors')
const blogRouter = require('./route/index')


require('./db')

const app = express()

app.use(cors());
app.use(express.json())

app.use('/api/blogs', blogRouter)


app.use('/api' , (req,res) => res.status(200).json({message : 'hello world'}))

app.listen(7000, () =>  console.log('your app is running at 7000'))