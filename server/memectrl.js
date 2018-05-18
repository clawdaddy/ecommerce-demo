const _ = require('lodash')

module.exports = {
    getMemes: (req, res, next) => {
        
        req.app.get('db').get_memes().then( memes => {
            res.status(200).send(memes)
        })
    },
    getMeme: (req, res, next) => {
        const {productid} = req.params;
        req.app.get('db').get_meme([productid]).then( meme => {
            res.status(200).send(meme[0])
        })
    },
    getCart: (req, res, next) => {
        const { id } = req.session;
        req.app.get('db').get_cart([id]).then( cart => {
            res.status(200).send(cart)
        })
        
    },
    addToCart: (req, res, next) => {
        const { id:memeid } = req.body;
        const { id:sessionid } = req.session;
        let quantity = 1;
        req.app.get('db').new_item([memeid, sessionid, quantity]).then( cartid => {
        if (req.session.cart){
            req.session.cart.push({cartid:cartid[0].id, memeid}, quantity)
            
            res.status(200).send({cartid:cartid[0].id, memeid, sessionid})
        } else {
            
            req.session.cart = [{cartid:cartid[0].id, memeid, quantity}]
            
            res.status(200).send({cartid:cartid[0].id, memeid, sessionid})
        }
    }
    )
    },
    updateQuantity: (req, res, next) => {
        const { quantity, id } = req.body;
        let index = 0
        let item = _.find(req.session.cart, (item, i) => {
            index = i;
            return item.cartid === id
        })
        let newItem = Object.assign({}, item, {quantity:quantity})
        let newArray = [...req.session.cart]
        newArray.splice(index, 1, newItem)
        req.session.cart = newArray;
        req.app.get('db').update_quantity([quantity, id]).then( result => {
            console.log(result)
            res.status(200).send({quantity: result[0].quantity})
        })
        

    },
    deleteFromCart: (req, res, next) => {
        const { dbid } = req.params;
        
        req.app.get('db').delete_item([dbid]).then( deletedrow => {
           
            let newCart = req.session.cart.filter( item => {
                return (item.cartid !== +dbid)
            })
            req.session.cart = newCart
            res.sendStatus(200)
            }
        )
    },

}