import Express from "express";
import caldata from '../modules/model.js'
const route = Express.Router()

route.post('/data', async (req, res) => {
    const { data } = req.body;
    if (data) {
        try {
            const response = await caldata.create({ data: data })
            const answer = await response.save()
            res.status(200).json({ answer })
        } catch (error) {
            console.log(error)
        }
    }
})

route.get('/getdata', async (req, res) => {
    const answer = await caldata.find();
    res.status(200).json({ answer })
})

export default route