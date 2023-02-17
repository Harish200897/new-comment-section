const express = require('express')

const COMMENT = require('./utils/commentdata');
const commentsRouter = require('./routes/router');

const app = express()

app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: false }))

 app.get('/',   async(req, res) => {
  const comments = await COMMENT.findOne().sort({postedAt: 'desc' })
       res.render('views/index', { comments:comments })

  })

app.use('/comments',commentsRouter)

 app.listen(3000, () => {
    console.log(`server is running on port `)
});

 