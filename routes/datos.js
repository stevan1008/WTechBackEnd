const express = require('express')
const { getAllData, getSingleData, createData, deleteData } = require('../controllers/datos')
const router = express.Router()

router.route('/').get(getAllData).post(createData)
router.route('/:id').get(getSingleData).delete(deleteData)

module.exports = router