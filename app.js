const express = require('express');
const app = express();
const articleRouter = require('./routes/article');

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req,res) => {
    const articles = [{
        name: 'New article',
        createdAt: Date.now(),
        description: 'Test'
    }]
    res.render('index', { test: 'Articles'})
})

app.listen(3000)