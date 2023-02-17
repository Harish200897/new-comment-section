const express = require('express')
const COMMENT=require("../utils/commentdata")
const router = express.Router()



router.get('/new', (req, res) => { 
    res.render('views/form',{ comment: new COMMENT()})
})
router.get('/:id', async (req, res) => { 
    const comment = await COMMENT.findById(req.params.id)
    if (comment ==null) res.redirect("/")
    res.render('views/index',{ comment: comment})

})

router.post('/', async(req, res) => { 
    let comment =new COMMENT({
        UserName: req.body.UserName,
        UserId: req.body.UserId,
        description: req.body.description
        })
        try{
            comment = await comment.save()
            res.redirect(`/comments/{commment.id}`)
        } catch (e) {
            console.log(e)
            res.render('/comments/new', {comment:comment})

        }
        })

module.exports = router;