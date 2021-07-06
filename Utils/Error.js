module.exports = {
    serverError (res, error){
        console.log(error)
        res.status(500).json({message: " something is wrong"})
    },

    resourceError (res, message){
        res.status(400).json({ message })
    }
}