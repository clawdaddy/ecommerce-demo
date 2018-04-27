module.exports = {
    getMemes: (req, res, next) => {
        req.app.get('db').get_memes().then( memes => {
            res.status(200).send(memes)
        })
    }
}