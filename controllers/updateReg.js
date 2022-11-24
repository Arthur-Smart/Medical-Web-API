import UpdateReg from '../models/UpdateReg.js' 

export const updateRegister = async(req, res, next) => {
    try {
        const newRegistration = await UpdateReg(req.body)
        const savedReg = newRegistration.save()
        res.status(201).json(savedReg)
    } catch (err) {
        next(err)
    }
}

export const allUpdateRegestration = async(req, res, next) => {
    try {
        const registeredUpdates = await UpdateReg.find()
        res.status(200).json(registeredUpdates)
    } catch (err) {
        next(err)
    }
}

export const deleteUpdateReg = async(req, res, next) => {
    try {
        await UpdateReg.findByIdAndDelete(req.params.id)
        res.status(200).json('Registration has been deleted successfully')
    } catch (err) {
        next(err)
    }
}