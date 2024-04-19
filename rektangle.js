const rectangle = require(".rectangle")

describe("Rektangle",() =>{

    it( "Kontrollera att rektangel har rätt värden", ()=> {

let rektangel = new rektangel(10,5)
expect (rektangel.length).toBe(10)
expect(rektangel.width).toBe(5)

    })
})