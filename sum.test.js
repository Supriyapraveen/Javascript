const sum = require("./sum");


 describe ("Addition",()=>){
    it (" 1+2 = 3", ()=>{

        expect(sum(1,2)).toBe(3)


})
}

it ("14+35=49",()=>){
    expect(sum(14,35)).toBe(49)
}
//skapa ett testgrupp
