describe("String testing", ()=>{

    test("There should be no I in team", ()=>{
        let string = "team";
        expect(string).not.toMatch(/I/)
    });

    test("There is 'stop'in Christopher", ()=>{
        let string  = "Christopher";

        expect(string).toMatch(/stop/)
    })
})