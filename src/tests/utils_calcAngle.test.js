const calcAngle = require("../utils/calcAngle")

describe('calcAngle',()=>{
    it('should return the angle 180 when hour is 6 and minute is 0',()=>{
        const hour = 6
        const minute = 0
        const expectedAngle = 180

        const result  = calcAngle(hour,minute)

        expect(result).toEqual(expectedAngle)
    })
    it('should return the angle 90 when hour is 3 and minute is 0',()=>{
        const hour = 3
        const minute = 0
        const expectedAngle = 90

        const result  = calcAngle(hour,minute)

        expect(result).toEqual(expectedAngle)
    })
    it('should return the angle 90 when hour is 9 and minute is 0',()=>{
        const hour = 9
        const minute = 0
        const expectedAngle = 90

        const result  = calcAngle(hour,minute)

        expect(result).toEqual(expectedAngle)
    })
})
