const Request = require('../models/request')
const calcAngle = require('../utils/calcAngle')

exports.getAngle =  async (req,res,next)=>{
    try{
        const{ hour, minute} = req.params
        const angle = await calcAngle(hour,minute)
        const request = new Request({hour,minute,angle})
        await request.save()
        res.json({angle})
    }catch(err){
        next(err)
    }
}

