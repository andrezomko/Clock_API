const calcAngle = (h,m)=>{
    const hrAngle = 30 * h + 0.5 * m //pt horas anda 30 graus em 60 min logo, 0.5 graus em 1 min. 
    const minAngle = m * 6 //pt min anda 6 graus por min.
    let angle = Math.abs(hrAngle-minAngle)
    angle =  Math.floor(angle)
    return Math.min(angle,360-angle)
}

module.exports = calcAngle