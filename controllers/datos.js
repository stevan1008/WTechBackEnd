const Datos = require('../models/Datos')

const getAllData = async (req, res) => {
    try {
        const data = await Datos.find({})
        res.status(200).json({ data })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const getSingleData = async (req, res) => {
    try {
        const { id: dataID } = req.params
        const singleData = await Datos.findOne({ _id:dataID })
        res.status(200).json({ singleData })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const createData = async (req, res) => {
    try {
        const newData = await Datos.create(req.body)
        res.status(201).json({ newData })
    } catch (error) {
        res.status(500).json({ error })
    }
}

const deleteData = async (req, res) => {
    try {
        const { id: dataID } = req.params
        const data = await Datos.findOneAndDelete({ _id:dataID })
        res.status(200).json({ msg: `Se elimino el dato con id: ${dataID}`}) 
    } catch (error) {
        res.status(500).json({ error })
    }
}

module.exports = { getAllData, getSingleData, createData, deleteData }