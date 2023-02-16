const xmas = require('../models/xmas')

module.exports = {
    getGifts: async (req, res) => {
        console.log(req.user)
        try {
            const giftItems = await xmas.find({userId:req.user.id})
            const giftsLeft = await xmas.countDocuments({userId:req.user.id,completed: false})
            res.render('xmas.ejs', {gifts: giftItems, left: giftsLeft, user:req.user})
        } catch(err) {
            console.log(err)
        }
    },

    createGift: async (req, res) => {
        try {
            await xmas.create({gift: req.body.giftItem, completed: false, userId: req.user.id})
            console.log('Gift has been added!')
            res.redirect('/xmas')
        } catch(err) {
            console.log(err)
        }
    },

    markComplete: async (req, res) => {
        try {
            await xmas.findOneAndUpdate({_id: req.body.giftIdFromJSFile}, {
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        } catch(err) {
            console.log(err)
        }
    },

    markIncomplete: async (req, res) => {
        try {
            await xmas.findOneAndUpdate({_id: req.body.giftIdFromJSFile}, {
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        } catch(err) {
            console.log(err)
        }
    },

    deleteGift: async (req, res) => {
        try {
            await xmas.findOneAndDelete({_id: req.body.giftIdFromJSFile})
            console.log('Deleted Gift')
            res.json('Deleted Gift')
        } catch(err) {
            console.log(err)
        }
    }
}