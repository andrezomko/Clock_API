const {client} = require('../database') //mmudar esse nome

class Request{
    constructor({hour,minute,angle}){
        this.hour = hour
        this.minute = minute
        this.angle = angle
        this.date = new Date()
    }

    async save(){
        const query ={
            text: 'INSERT INTO Data(hour, minute, angle, date) VALUES($1, $2, $3, $4)',
            values:[this.hour,this.minute,this.angle,this.date]
        }
        await client.query(query)
    }
}

module.exports = Request