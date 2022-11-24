import Medicine from '../models/Medicine.js'

export const createMedicine = async(req, res, next) => {
    try {
        const newMed =  new Medicine(req.body)
        const savedMed = await newMed.save()
        res.status(201).json(savedMed)
    } catch (err) {
        next(err)
    }
}

export const updateMed = async(req, res, next) => {
    try {
        const update = await Medicine.findByIdAndUpdate(req.params.id,{
                $set:req.body
            }, {new: true})
        res.status(203).json(update)    
    } catch (err) {
        next(err)
    }
}


export const deleteMed = async(req, res, next) => {
    try {
        const deleteMedicine = await Medicine.findByIdAndDelete(req.params.id)
        res.status(200).json('Item successfully deleted')
    } catch (err) {
        next(err)
    }
}

export const getAllMeds = async(req, res, next) => {
    try {
        const allMedicine = await Medicine.find()
        res.status(200).json(allMedicine)
    } catch (err) {
        next(err)
    }
}

export const getSingleMeds = async(req, res, next) => {
    try {
        const singleMedicine = await Medicine.findById(req.params.id)
        res.status(200).json(singleMedicine)
    } catch (err) {
        next(err)
    }
}

export const deleteMeds = async(req, res, next) => {
    try {
        await Medicine.findByIdAndDelete(req.params.id)
        res.status(200).json('You have successfully deleted the Medicine')
    } catch (err) {
        next(err)
    }
}