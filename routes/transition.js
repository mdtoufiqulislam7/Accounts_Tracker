const express = require('express')
const { addIncome, showincome, deleteincome, getJanuaryDataSorted, getFebDataSorted, getMarDataSorted, getAprilDataSorted, getMayDataSorted, getJunDataSorted, getJulyDataSorted, getAugDataSorted, getSepDataSorted, getOctDataSorted, getNovDataSorted, getDecDataSorted } = require('../controllers/transition')
const router  = express.Router()


router.post('/addincome',addIncome)
router.get('/showincome',showincome)
router.get('/january',getJanuaryDataSorted)
router.get('/february',getFebDataSorted)
router.get('/march',getMarDataSorted)
router.get('/april',getAprilDataSorted)
router.get('/may',getMayDataSorted)
router.get('/jun',getJunDataSorted)
router.get('/july',getJulyDataSorted)
router.get('/aug',getAugDataSorted)
router.get('/sep',getSepDataSorted)
router.get('/oct',getOctDataSorted)
router.get('/nov',getNovDataSorted)
router.get('/dec',getDecDataSorted)
router.delete('/delete/:id',deleteincome)




module.exports = router