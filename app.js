// Imports
const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname +  '/date.js')


const app = express()
const port = 3000

const items = ['Buy Food', 'Cook Food', 'Eat Food']
const workItems = []

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))

// Static Files
app.use(express.static('public'))

// Navigation
app.get('/', (req, res) => {
    
    const day = date.getDate()

    res.render('list', {
        listTitle: day,
        newListItems: items
    })
    
})

app.post('/', (req, res) => {

    const item = req.body.newItem

    if (req.body.list === 'work') {
        workItems.push(item)
        res.redirect('/work')
    } else {
        items.push(item)
        res.redirect('/')
    }
   
})

app.get('/work', (req, res) => {
    res.render('list', {listTitle: 'Work List', newListItems: workItems})   
})

app.get('/about', (req, res) => {
    res.render('about')
})

// listen on port 3000
app.listen(port, () => {
    console.info(`App listen on port ${port}`)
})
