function convertToBinary(input){
    let resultString = ""
    while(input >= 1){
        if (input % 2 === 0){
            resultString = "0" + resultString 
        } else {
            resultString = "1" + resultString 
        }
        input = Math.floor(input / 2)
    }
    return resultString
}

function convertToHexa(input){
    let resultString = ""
    while (input >= 1){
        let remainder = input % 16
        switch (remainder){
            case 10: resultString =  "A" + resultString; break
            case 11: resultString =  "B" + resultString; break
            case 12: resultString =  "C" + resultString; break
            case 13: resultString =  "D" + resultString; break
            case 14: resultString =  "E" + resultString; break
            case 15: resultString =  "F" + resultString; break
            default: resultString = remainder + resultString
        }
        input = Math.floor(input / 16)
    }
    return resultString
}

module.exports = {
    convertToBinary,
    convertToHexa
}