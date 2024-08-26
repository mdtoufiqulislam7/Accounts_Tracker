const express = require('express')
const { addexpense, showexpense, deleteexpense } = require('../controllers/expense')

const router  = express.Router()


router.post('/addexpense',addexpense)
router.get('/showexpense',showexpense)
router.delete('/expense-delete/:id',deleteexpense)




module.exports = router