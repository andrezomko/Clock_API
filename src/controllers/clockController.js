const Request = require('../models/request')
const calcAngle = require('../utils/calcAngle')
const {client} = require('../database')

exports.getAngle =  async (req,res,next)=>{
    try{
        const{ hour, minute} = req.params
        if( hour < 0 || hour > 11 || minute < 0 || minute > 59){
            res.send(('Hora deve estar entre 0-11 e minuto entre 0-59'))
            return
        }
        const queryVerific = `SELECT COUNT(*) FROM Data WHERE hour = ${hour} AND minute = ${minute}`
        const countResult = await client.query(queryVerific)
        const rowCount = countResult.rows[0].count

        if(rowCount>0){  //consulta ja executada, usar valor armazenado em banco:
            const angleQuery = `SELECT angle FROM Data WHERE hour = '${hour}' AND minute = '${minute}'`;
            const angleResult = await client.query(angleQuery);
            const angle = angleResult.rows[0].angle;
            res.json({angle})

        }else{ //consulta nova, realiza calculo:
            const angle = calcAngle(hour,minute)
            const request = new Request({hour,minute,angle})
            await request.save()
            res.json({angle})
        }
    
    }catch(err){
        next(err)
    }
}

