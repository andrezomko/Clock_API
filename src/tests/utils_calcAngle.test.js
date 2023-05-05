const calcAngle = require("../utils/calcAngle")

describe('calcAngle',()=>{
    it('should return the correct angle',()=>{
        const hour = 3
        const minute = 45
        const expectedAngle = 112

        const result  = calcAngle(hour,minute)

        expect(result).toEqual(expectedAngle)
    })
})
