const xmas = require('../models/xmas')

module.exports = {
    getGifts: async (req, res) => {
        try {
            const giftItems = await xmas.find()
            const giftsLeft = await xmas.countDocuments({completed: false})
            res.render('xmas.ejs', {gifts: giftItems, left: giftsLeft})
        } catch(err) {
            console.log(err)
        }
    },

    createGift: async (req, res) => {
        try {
            await xmas.create({gift: req.body.giftItem, completed: false})
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